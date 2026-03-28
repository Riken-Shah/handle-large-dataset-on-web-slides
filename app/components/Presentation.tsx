"use client";

import { useCallback, useEffect, useState } from "react";

const speakerNotes: string[][] = [
  // Slide 1 — Title
  [
    "Welcome, today I want to talk about a problem that is massively under-discussed in the local-first community.",
    "We have incredible resources for CRDTs, sync, conflict resolution. Nobody talks about what happens when all that data lands in the browser.",
    "I hit this wall. Here's what I learned.",
  ],
  // Slide 2 — How Does a Local-First App Work?
  [
    "How does a local-first app work? Let's build it step by step.",
    "First, fetch from the server — once, or incrementally. Persist to the user's device — that's what makes it local-first.",
    "On open, load from disk into memory — JS objects in the heap. Then hydrate the UI — DOM elements render.",
    "This flow works beautifully. At small scale.",
  ],
  // Slide 3 — How I Got Here
  [
    "I'm Riken, founding engineer at Tasks. 700K+ downloads, 4.8 stars. Built our sync engine from scratch — custom CRDT, no third-party libs.",
    "Started building the web version with IDB.",
    "Tested with real data. App collapsed at 10K tasks.",
  ],
  // Slide 4 — Then We Hit 10,000 Tasks
  [
    "V0 looked great. Then real data showed up.",
    "At 100 tasks — smooth. At 10K — laggy, things start pulsing. At 100K — frozen. Page unresponsive.",
    "Same app. Same code. Just more data. Local-first does not mean all data in memory. This is a problem that grows with your users' success.",
  ],
  // Slide 5 — 4 Walls I Hit
  [
    "Building a local-first app at scale means solving all four of these.",
    "Memory — you can't load everything. DOM — 10K nodes kills the browser. Updates — one change re-renders the whole board. Storage speed — random access is too slow.",
    "Each one nearly killed the web version.",
  ],
  // Slide 6 — Problem 1: Memory
  [
    "Every entity has real overhead. If you use MobX or any reactive framework — observable fields, proxy wrappers, junction maps — each entity costs ~14KB.",
    "25K tasks × 14KB = 350MB. Just for task objects. Before properties, comments, or rendering.",
    "Chrome tabs crash around 1-2GB. One large project eats 350MB of that budget.",
  ],
  // Slide 7 — Problem 2: DOM Rendering
  [
    "More nodes = exponentially more work. Style recalculation scales with DOM size. Layout reflows recompute positions for the entire tree.",
    "Lighthouse warns at 800 nodes, errors at 1,400. At 10K+ — every interaction lags.",
    "Adding ONE node to a 10K tree triggers a recalculation of the entire tree.",
  ],
  // Slide 8 — Problem 3: Mutation Handling
  [
    "Databases like DexieDB give you table-level hooks only. When one task changes, the entire table re-queries. All blocks re-render.",
    "O(n) re-evaluation — even though only one thing changed.",
    "IDB gives us no onChange, no triggers. We have to build this ourselves.",
  ],
  // Slide 9 — What Everyone Tries
  [
    "So you Google it. Pagination — solves memory, breaks UX. Virtualization — solves DOM, everything still in memory. Windowing — gets the closest.",
    "Solves memory, DOM, scoping. But none of them avoid re-querying on every update.",
    "You can flip two switches but never all three.",
  ],
  // Slide 10 — Windowing Gets Closest
  [
    "Windowing manages both DOM and data. Only ~30 items in memory and DOM. Buffer zone preloads nearby items.",
    "Solves memory, DOM, scoping. But it needs fast random access reads — individual items on scroll.",
    "And no built-in mutation tracking. Closest to what we need, but not the full answer.",
  ],
  // Slide 11 — Each Storage Has a Strength
  [
    "I benchmarked IDB against SQLite WASM on OPFS. 100K tasks, real queries.",
    "Random access — the one windowing needs — OPFS is 4.4x faster. 8.5ms vs 37.6ms.",
    "Sequential reads — IDB wins by 1.9x. Writes — OPFS 2.4x faster.",
    "Neither is strictly better. Each has a strength. What if we use both?",
  ],
  // Slide 12 — What If We Only Load What's Visible?
  [
    "A viewport-aware, reactive rendering engine. Only loads what users see.",
    "Architecture: UI at the top, EntityStore in the middle — holds indexes plus hydrated visible entities — Database and Disk below.",
    "Look at the right side — items in the dataset, only the visible ones are hydrated. The rest are lightweight indexes.",
    "Scroll in → hydrate. Scroll out → unload. Memory stays flat.",
  ],
  // Slide 13 — How EntityStore Works
  [
    "Here's how the observable query system works.",
    "Step one: you register your query with EntityStore.",
    "Step two: it returns indexes — lightweight pointers to every matching entity.",
    "Step three: that query becomes observable. Task added, moved, deleted? The indexes auto-update. No re-query.",
    "Step four: minimal re-renders — only the affected visible entity re-renders. Everything else stays untouched.",
    "Query once, observe forever.",
  ],
  // Slide 14 — How We Do This: MobX
  [
    "EntityStore uses MobX under the hood. Each entity is independently observable.",
    "Without MobX — left side — entire list re-queries and diffs. O(n).",
    "With MobX — right side — only the changed card re-renders. O(1). Surgical.",
    "And remember: a task is never just a task. Properties, tags, comments, assets. 1 task = ~9 entities. MobX makes each one independently observable.",
    "Credit to the Linear team for pioneering this pattern.",
  ],
  // Slide 15 — Why Indexes Instead of Full Entities?
  [
    "Full entities: each carries observable fields, proxy wrappers, junction maps. ~14KB each. At 25K — 350MB. Tab crashes.",
    "Indexes: four fields. Plain JS objects. ~200 bytes. At 25K — 5MB.",
    "Same 25K tasks. 70x less memory. Look at the bar graph — the difference is staggering.",
  ],
  // Slide 16 — The Hybrid Model
  [
    "On startup, load all indexes from IDB. One sequential read — IDB is 1.9x faster here. 25K lightweight objects. Board renders immediately.",
    "As the user scrolls, pull full data from SQLite via OPFS — random access. OPFS is 4.4x faster here.",
    "Card scrolls out → full data freed, index retained.",
    "IDB fires once at startup. SQLite fires continuously as the user interacts. Each storage does what it's best at.",
  ],
  // Slide 17 — The Numbers
  [
    "The proof. Before: 350MB. Freezes. After: 7MB. 50x reduction.",
    "250ms to interactive with 25,000 tasks.",
  ],
  // Slide 18 — Memory Stays Flat
  [
    "Look at the graph. Naive approach — red line shoots up linearly. 10K to 100K goes from 140MB to 1.4GB.",
    "Two-tier — green line stays flat. ~7MB to ~9MB. About 10% growth.",
    "This works at 5K or 500K.",
  ],
  // Slide 19 — Closing
  [
    "The best sync engine in the world doesn't matter if your app takes 3 seconds to load a task list.",
    "The unglamorous work is what makes local-first apps feel fast.",
    "And none of it required a third-party library.",
    "Thank you.",
  ],
];

interface PresentationProps {
  slides: React.ReactNode[];
}

export default function Presentation({ slides }: PresentationProps) {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const total = slides.length;

  const goNext = useCallback(() => {
    setCurrent((c) => Math.min(c + 1, total - 1));
  }, [total]);

  const goPrev = useCallback(() => {
    setCurrent((c) => Math.max(c - 1, 0));
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true));
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false));
    }
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft" || e.key === "Backspace") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === "n" || e.key === "N") {
        e.preventDefault();
        setShowNotes((s) => !s);
      } else if (e.key === "Escape") {
        if (document.fullscreenElement) {
          // browser handles this
        }
      }
    };

    const handleFSChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    window.addEventListener("keydown", handleKey);
    document.addEventListener("fullscreenchange", handleFSChange);
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.removeEventListener("fullscreenchange", handleFSChange);
    };
  }, [goNext, goPrev, toggleFullscreen]);

  const notes = speakerNotes[current] || [];

  return (
    <div className="presentation" tabIndex={0}>
      {/* Slides */}
      {slides.map((slide, i) => (
        <div key={i} className={`slide ${i === current ? "active" : ""}`}>
          {slide}
        </div>
      ))}

      {/* Speaker notes panel */}
      {showNotes && (
        <div style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "rgba(0,0,0,0.95)",
          borderTop: "1px solid #333",
          padding: "16px 32px",
          zIndex: 200,
          maxHeight: "30vh",
          overflowY: "auto",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <span style={{ fontSize: 11, color: "#666", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Speaker Notes — Slide {current + 1}
            </span>
            <span style={{ fontSize: 10, color: "#444", fontFamily: "monospace" }}>
              press N to hide
            </span>
          </div>
          <ul style={{ margin: 0, paddingLeft: 20, listStyle: "disc" }}>
            {notes.map((note, i) => (
              <li key={i} style={{ color: "#ccc", fontSize: 14, lineHeight: 1.7, marginBottom: 4 }}>
                {note}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Progress bar */}
      <div
        className="progress-bar"
        style={{ width: `${((current + 1) / total) * 100}%` }}
      />

      {/* Slide counter */}
      <div className="slide-counter">
        {current + 1} / {total}
      </div>

      {/* Navigation hint - only on first slide */}
      {current === 0 && (
        <div className="nav-hint anim d10" style={{ animation: "fadeIn 1s ease forwards", animationDelay: "2s", opacity: 0 }}>
          Arrow keys or Enter to navigate &middot; F for fullscreen &middot; N for notes
        </div>
      )}
    </div>
  );
}
