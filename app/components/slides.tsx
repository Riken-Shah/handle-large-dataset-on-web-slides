"use client";

import Image from "next/image";
import {
  A,
  DoodleLongUnderline,
  DoodleArrowRight,
  DoodleArrowDown,
  DoodleStar,
  DoodleCheckmark,
  DoodleCross,
  DoodleCloud,
  DoodleDatabase,
  DoodleChip,
  DoodleBrowser,
  DoodleSparkle,
  DoodleSquiggle,
  DoodleWarning,
  DoodleLightning,
  DoodleExplosion,
} from "./Doodles";

/* ═══════════════════════════════════════
   SLIDE 1 — Title
   ═══════════════════════════════════════ */
export function Slide1() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-6 max-w-4xl">
      <A delay={0} animation="pop"><DoodleStar size={32} className="mb-4" /></A>
      <A delay={1}><h1 className="slide-title">How to Handle Large<br />Datasets on the Web</h1></A>
      <A delay={3} animation="fade"><DoodleLongUnderline delay="0.4s" /></A>
      <A delay={5}><p className="slide-subtitle">When local-first meets real-world scale</p></A>
      <A delay={8}>
        <div className="flex items-center gap-3 mt-6">
          <DoodleSparkle /><span className="text-gray-400 slide-mono text-sm">Riken Shah · Founding Engineer @ Tasks</span><DoodleSparkle />
        </div>
      </A>
    </div>
  );
}

/* ═══════════════════════════════════════
   SLIDE 1B — The Impact (teaser)
   ═══════════════════════════════════════ */
export function SlideImpact() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 max-w-5xl w-full">
      <A delay={0}><h2 className="slide-heading text-center">The Numbers</h2></A>

      {/* Big before/after */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-4">
        <A delay={2} animation="scale">
          <div className="text-center">
            <p className="text-gray-500 font-bold text-5xl sm:text-7xl md:text-8xl" style={{lineHeight:1,letterSpacing:"-0.04em"}}>545MB</p>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">IDB · 25K tasks</p>
            <p className="text-xs sm:text-sm text-gray-600">Page freezes · even with sharding</p>
          </div>
        </A>
        <A delay={4} animation="fade">
          <span className="text-2xl sm:text-4xl text-gray-600 mx-2 sm:mx-4">→</span>
        </A>
        <A delay={5} animation="scale">
          <div className="text-center">
            <p className="text-white font-bold text-5xl sm:text-7xl md:text-8xl" style={{lineHeight:1,letterSpacing:"-0.04em"}}>44MB</p>
            <p className="text-xs sm:text-sm text-gray-400 mt-2">Two-tier · 25K tasks</p>
            <p className="text-xs sm:text-sm text-gray-400">12x reduction</p>
          </div>
        </A>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-4">
        <A delay={8} animation="pop">
          <div className="text-center">
            <p className="slide-mono text-3xl sm:text-5xl font-bold text-red-400">7,600ms</p>
            <p className="text-xs sm:text-sm text-red-400/60 mt-1">IDB · to interactive</p>
          </div>
        </A>
        <A delay={10} animation="fade">
          <span className="text-xl sm:text-2xl text-gray-600">→</span>
        </A>
        <A delay={11} animation="pop">
          <div className="text-center">
            <p className="slide-mono text-3xl sm:text-5xl font-bold text-green-400">600ms</p>
            <p className="text-xs sm:text-sm text-green-400/60 mt-1">Two-tier · to interactive</p>
          </div>
        </A>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   SLIDE 2 — How Local-First Works
   ═══════════════════════════════════════ */
export function Slide2() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 max-w-5xl w-full">
      <A delay={0}><h2 className="slide-heading text-center">How Does a Local-First App Work?</h2></A>
      <A delay={1} animation="fade"><DoodleSquiggle /></A>
      <div className="flex items-center justify-center gap-4 flex-wrap mt-4">
        <A delay={2} animation="scale"><div className="flex flex-col items-center gap-2"><DoodleCloud delay="0.3s" /><span className="slide-mono text-xs text-gray-400">FETCH</span></div></A>
        <A delay={4} animation="fade"><DoodleArrowRight delay="0.5s" /></A>
        <A delay={5} animation="scale"><div className="flex flex-col items-center gap-2"><DoodleDatabase delay="0.6s" /><span className="slide-mono text-xs text-gray-400">PERSIST</span></div></A>
        <A delay={7} animation="fade"><DoodleArrowRight delay="0.8s" /></A>
        <A delay={8} animation="scale"><div className="flex flex-col items-center gap-2"><DoodleChip delay="0.9s" /><span className="slide-mono text-xs text-gray-400">LOAD</span></div></A>
        <A delay={10} animation="fade"><DoodleArrowRight delay="1.1s" /></A>
        <A delay={11} animation="scale"><div className="flex flex-col items-center gap-2"><DoodleBrowser delay="1.2s" /><span className="slide-mono text-xs text-gray-400">RENDER</span></div></A>
      </div>
      <A delay={13}><p className="slide-body text-sm text-center">Server → Disk → Memory → UI</p></A>
      <A delay={15}><p className="text-gray-500 text-sm italic text-center">&ldquo;This flow works beautifully. At small scale.&rdquo;</p></A>
    </div>
  );
}

/* ═══════════════════════════════════════
   SLIDE 3 — How I Got Here (moved up)
   ═══════════════════════════════════════ */
export function Slide3() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 max-w-5xl w-full">
      <A delay={0}><h2 className="slide-heading text-center">How I Got Here</h2></A>
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 mt-2 w-full">
        <A delay={2} animation="scale">
          <div className="flex-shrink-0 w-full max-w-[280px] md:max-w-[420px] rounded-xl overflow-hidden border border-gray-700">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/tasks-app.jpeg" alt="Tasks App" className="w-full h-auto block" />
          </div>
        </A>
        <div className="flex flex-col gap-0 flex-1 relative">
          {/* Animated connecting line */}
          <div className="absolute left-5 top-5 bottom-5 w-px overflow-hidden">
            <div className="hig-line w-full bg-gradient-to-b from-white/40 via-white/20 to-red-500/40" />
          </div>
          {[
            {step:"01",text:"Built Tasks: 700K+ downloads, 4.8 stars",delay:3},
            {step:"02",text:"Custom CRDT sync engine, no third-party libs",delay:5},
            {step:"03",text:"Started building the web version with IDB",delay:7},
            {step:"04",text:"Tested with real data. App collapsed at 10K tasks.",delay:9},
          ].map(item=>(
            <A key={item.step} delay={item.delay} animation="right">
              <div className="flex items-center gap-4 py-3.5">
                <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-sm font-bold z-10 bg-black slide-mono flex-shrink-0">{item.step}</div>
                <p className="slide-body text-sm">{item.text}</p>
              </div>
            </A>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   SLIDE 4 — Then We Hit 10,000 Tasks
   V0 breaking down — personal framing
   ═══════════════════════════════════════ */
export function Slide4() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 max-w-4xl w-full">
      <A delay={0}><h2 className="slide-heading text-center">Then We Hit 10,000 Tasks</h2></A>
      <A delay={2} animation="fade">
        <p className="text-gray-400 text-sm italic text-center max-w-lg">&ldquo;V0 looked great. Then real users showed up.&rdquo;</p>
      </A>

      <div className="flex items-end gap-4 sm:gap-10 mt-4">
        {/* 100 tasks - smooth */}
        <A delay={3} animation="scale">
          <div className="flex flex-col items-center gap-2 sm:gap-3 w-24 sm:w-36">
            <div className="grid grid-cols-3 gap-1">
              {Array.from({length:9}).map((_,i)=>(
                <div key={i} className="w-8 h-6 bg-white rounded-sm" />
              ))}
            </div>
            <p className="slide-mono text-xl sm:text-3xl font-bold">100</p>
            <p className="text-xs sm:text-sm text-gray-400">smooth</p>
            <DoodleCheckmark delay="0.3s" />
          </div>
        </A>

        {/* 10K tasks - laggy */}
        <A delay={5} animation="scale">
          <div className="flex flex-col items-center gap-2 sm:gap-3 w-24 sm:w-36">
            <div className="grid grid-cols-3 gap-1">
              {Array.from({length:9}).map((_,i)=>(
                <div key={i} className="w-8 h-6 bg-gray-500 rounded-sm" style={{animation:"pulse 2s ease-in-out infinite",animationDelay:`${i*0.2}s`}} />
              ))}
            </div>
            <p className="slide-mono text-xl sm:text-3xl font-bold">10K</p>
            <p className="text-xs sm:text-sm text-gray-400">laggy</p>
            <DoodleWarning delay="0.6s" />
          </div>
        </A>

        {/* 100K tasks - frozen */}
        <A delay={7} animation="scale">
          <div className="flex flex-col items-center gap-2 sm:gap-3 w-24 sm:w-36">
            <div className="grid grid-cols-3 gap-1 relative">
              {Array.from({length:9}).map((_,i)=>(
                <div key={i} className="w-8 h-6 bg-gray-800 border border-gray-700 rounded-sm" />
              ))}
              {/* Freeze overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs text-gray-500 slide-mono bg-black/80 px-2 py-0.5 rounded" style={{animation:"pulse 1.5s ease-in-out infinite"}}>frozen</span>
              </div>
            </div>
            <p className="slide-mono text-xl sm:text-3xl font-bold text-gray-500">100K</p>
            <p className="text-xs sm:text-sm text-gray-500">unresponsive</p>
            <DoodleExplosion delay="0.9s" />
          </div>
        </A>
      </div>

      <A delay={10}><p className="text-gray-500 text-sm italic text-center">Same app. Same code. Just more data.</p></A>
      <A delay={12} animation="pop"><p className="text-sm font-medium text-center">Local-first ≠ Janky Experience</p></A>
    </div>
  );
}

/* ═══════════════════════════════════════
   SLIDE 5 — 4 Walls I Hit
   ═══════════════════════════════════════ */
export function Slide5() {
  const problems = [
    { n: "01", title: "Memory", desc: "Can't keep everything in the JS heap", icon: <DoodleChip delay="0.3s" /> },
    { n: "02", title: "DOM Rendering", desc: "10K nodes = browser meltdown", icon: <DoodleBrowser delay="0.5s" /> },
    { n: "03", title: "Mutations", desc: "One change re-renders everything", icon: <DoodleExplosion delay="0.7s" /> },
    { n: "04", title: "Storage Speed", desc: "Random access is too slow", icon: <DoodleDatabase delay="0.9s" /> },
  ];
  return (
    <div className="flex flex-col items-center justify-center gap-6 max-w-4xl w-full">
      <A delay={0}><h2 className="slide-heading text-center">4 Walls I Hit</h2></A>
      <A delay={1}><p className="text-sm text-gray-500 text-center">Each one nearly killed the web version.</p></A>
      <div className="grid grid-cols-2 gap-5 mt-4 w-full max-w-2xl">
        {problems.map((p, i) => (
          <A key={p.n} delay={3 + i * 2} animation="scale" className="h-full">
            <div className="diagram-node flex flex-col items-center justify-center text-center gap-3 p-5 h-full">
              <div>{p.icon}</div>
              <div>
                <p className="text-xs text-gray-500 slide-mono">{p.n}</p>
                <p className="font-semibold text-lg">{p.title}</p>
                <p className="text-xs text-gray-400">{p.desc}</p>
              </div>
            </div>
          </A>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   SLIDE 6 — Problem 1: Memory
   ═══════════════════════════════════════ */
export function Slide6() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 max-w-4xl w-full">
      <A delay={0}><div className="slide-label">Problem 1</div></A>
      <A delay={1}><h2 className="slide-heading text-center">We Can&apos;t Keep Everything in Memory</h2></A>
      <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 sm:gap-12 mt-4">
        <A delay={3} animation="scale">
          <div className="fill-container w-28 h-40 sm:w-36 sm:h-52 relative">
            <div className="fill-bar fill-animate bg-white" style={{"--fill-height":"85%"} as React.CSSProperties} />
            <div className="absolute inset-0 flex items-center justify-center z-10"><span className="text-black font-bold text-xl mix-blend-difference">350MB</span></div>
            {[0.25,0.5,0.75].map((l,i)=>(<div key={i} className="absolute -top-2 bg-white rounded-full w-1.5 h-1.5" style={{left:`${l*100}%`,animation:"float 2s ease-in-out infinite",animationDelay:`${1.5+i*0.3}s`,opacity:0.4}} />))}
          </div>
        </A>
        <div className="flex flex-col gap-4">
          <A delay={5}><p className="text-sm text-gray-400">Every entity has real overhead</p></A>
          <A delay={7}>
            <div className="doodle-box-dashed p-4">
              <p className="slide-mono text-center"><span className="text-3xl font-bold">25K</span><span className="text-gray-500"> x </span><span className="text-3xl font-bold">14KB</span><span className="text-gray-500"> = </span><span className="text-4xl font-bold">~350MB</span></p>
              <p className="text-xs text-gray-500 text-center mt-2">Observable fields, proxy wrappers, junction maps</p>
            </div>
          </A>
          <A delay={10}><div className="flex items-center gap-2 text-sm text-gray-500"><DoodleWarning delay="1.1s" /><span>Chrome tabs crash around 1-2GB</span></div></A>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   SLIDE 7 — Problem 2: DOM
   ═══════════════════════════════════════ */
export function Slide7() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 max-w-4xl w-full">
      <A delay={0}><div className="slide-label">Problem 2</div></A>
      <A delay={1}><h2 className="slide-heading text-center">DOM Rendering is Expensive</h2></A>
      <A delay={3}>
        <div className="flex items-end gap-8 mt-4">
          <div className="flex flex-col items-center gap-1">
            <div className="grid grid-cols-3 gap-1">{Array.from({length:9}).map((_,i)=>(<div key={i} className="w-5 h-5 bg-white rounded-sm" style={{animation:"popIn 0.3s ease forwards",animationDelay:`${0.5+i*0.05}s`,opacity:0}} />))}</div>
            <p className="text-xs text-gray-500 mt-2 slide-mono">100</p><DoodleCheckmark delay="0.8s" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="grid grid-cols-6 gap-0.5">{Array.from({length:36}).map((_,i)=>(<div key={i} className="w-3.5 h-3.5 bg-gray-400 rounded-sm" style={{animation:"popIn 0.2s ease forwards",animationDelay:`${1+i*0.02}s`,opacity:0}} />))}</div>
            <p className="text-xs text-gray-500 mt-2 slide-mono">1,400</p><DoodleWarning delay="1.2s" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="grid grid-cols-10 gap-0.5">{Array.from({length:80}).map((_,i)=>(<div key={i} className="w-2.5 h-2.5 bg-gray-600 rounded-sm" style={{animation:"popIn 0.15s ease forwards",animationDelay:`${1.5+i*0.01}s`,opacity:0}} />))}</div>
            <p className="text-xs text-gray-500 mt-2 slide-mono">10K+</p><DoodleExplosion delay="2s" />
          </div>
        </div>
      </A>
      <div className="flex flex-col gap-3 mt-6 w-full max-w-2xl">
        <A delay={8} animation="right"><div className="flex items-start gap-3"><DoodleCross delay="0.9s" /><p className="text-sm">Style recalculation across the entire tree on every change</p></div></A>
        <A delay={10} animation="right"><div className="flex items-start gap-3"><DoodleCross delay="1.1s" /><p className="text-sm">Layout reflows recompute positions for every element</p></div></A>
        <A delay={12} animation="right"><div className="flex items-start gap-3"><DoodleExplosion delay="1.3s" /><p className="text-sm">Adding 1 node to 10K? Browser recomputes everything.</p></div></A>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   SLIDE 8 — Problem 3: Mutations (table-level only)
   ═══════════════════════════════════════ */
export function Slide8() {
  const delays = [0,0.3,0.1,0.5,0.2,0.4,0.15,0.35,0.25,0.45,0.05,0.38,0.12,0.48,0.28,0.08,0.42,0.18,0.32,0.22];
  return (
    <div className="flex flex-col items-center justify-center gap-6 max-w-4xl w-full">
      <A delay={0}><div className="slide-label">Problem 3</div></A>
      <A delay={1}><h2 className="slide-heading text-center">Mutation Handling</h2></A>
      <A delay={2}><p className="text-sm text-gray-500 text-center max-w-lg">Databases like DexieDB give you table-level hooks. When one task changes, the entire table re-queries.</p></A>

      <A delay={4}>
        <div className="w-full max-w-md">
          <p className="text-xs text-gray-500 text-center slide-mono mb-3">ONE TASK CHANGES → ENTIRE TABLE RE-RENDERS</p>
          <div className="border border-gray-700 rounded-lg p-5">
            <div className="grid grid-cols-5 gap-2">
              {Array.from({length:20}).map((_,i)=>(
                <div key={i} className="h-10 border border-gray-600 rounded" style={{animation:"blink-block 1.2s ease-in-out infinite",animationDelay:`${delays[i]}s`}} />
              ))}
            </div>
          </div>
          <p className="text-center mt-3"><span className="slide-mono font-bold text-2xl">O(n)</span></p>
          <p className="text-xs text-gray-500 text-center mt-1">Every component re-evaluates. Every card re-renders.</p>
        </div>
      </A>

      <A delay={9}><p className="text-sm text-gray-500 italic text-center">No onChange, no triggers. How do we make updates surgical?</p></A>
    </div>
  );
}

/* ═══════════════════════════════════════
   SLIDE 9 — What Everyone Tries
   Animated toggles: you can't have all 3
   ═══════════════════════════════════════ */

function Toggle({ on, fail }: { on: boolean; fail?: boolean }) {
  return (
    <div className={`toggle-track ${on ? "on" : "off"} ${fail ? "fail" : ""}`}>
      <div className="toggle-thumb" />
    </div>
  );
}

function ApproachRow({ name, desc, memory, dom, updates, ux, delay }: {
  name: string; desc: string; memory: boolean; dom: boolean; updates: boolean; ux: boolean; delay: number;
}) {
  return (
    <A delay={delay} animation="right">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 py-3 sm:py-4 px-3 sm:px-5 border border-gray-800 rounded-xl">
        <div className="w-full sm:w-36 flex-shrink-0">
          <p className="font-bold text-base sm:text-lg">{name}</p>
          <p className="text-[10px] text-gray-500">{desc}</p>
        </div>
        <div className="flex items-center gap-3 sm:gap-5 flex-1 justify-start sm:justify-center flex-wrap">
          <div className="flex items-center gap-2">
            <Toggle on={memory} />
            <span className={`text-xs ${memory ? "text-white" : "text-gray-600"}`}>Memory</span>
          </div>
          <div className="flex items-center gap-2">
            <Toggle on={dom} />
            <span className={`text-xs ${dom ? "text-white" : "text-gray-600"}`}>DOM</span>
          </div>
          <div className="flex items-center gap-2">
            <Toggle on={updates} fail={!updates} />
            <span className={`text-xs ${updates ? "text-white" : "text-gray-600"}`}>Updates</span>
          </div>
          <div className="flex items-center gap-2">
            <Toggle on={ux} fail={!ux} />
            <span className={`text-xs ${ux ? "text-white" : "text-gray-600"}`}>UX</span>
          </div>
        </div>
      </div>
    </A>
  );
}

export function Slide9() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 max-w-4xl w-full">
      <A delay={0}><h2 className="slide-heading text-center">What Everyone Tries</h2></A>
      <A delay={1}><p className="text-sm text-gray-500 text-center">Windowing solves most of it. But none avoid re-querying on every update.</p></A>

      <div className="flex flex-col gap-3 mt-4 w-full max-w-2xl">
        <ApproachRow
          name="Pagination"
          desc="Split into pages, load one at a time"
          memory={true} dom={true} updates={false} ux={false}
          delay={3}
        />
        <ApproachRow
          name="Virtualization"
          desc="Recycle DOM nodes, all data in heap"
          memory={false} dom={true} updates={false} ux={true}
          delay={5}
        />
        <ApproachRow
          name="Windowing"
          desc="Load + render only near viewport"
          memory={true} dom={true} updates={false} ux={true}
          delay={7}
        />
      </div>

      {/* The punchline — updates always OFF */}
      <A delay={10} animation="pop">
        <div className="flex flex-col items-center gap-2 mt-2">
          <div className="flex items-center gap-3">
            <div className="toggle-track off">
              <div className="toggle-thumb" style={{animation:"thumb-fail 3s ease-in-out infinite"}} />
            </div>
            <span className="text-sm font-bold">Updates</span>
            <span className="text-sm text-gray-500">— always off. Every change re-queries the entire dataset.</span>
          </div>
        </div>
      </A>

      <A delay={13} animation="fade">
        <p className="text-sm text-gray-400 italic text-center">You can pick Memory + DOM. But who avoids the re-renders?</p>
      </A>
    </div>
  );
}

/* ═══════════════════════════════════════
   SLIDE 10 — Windowing Gets Closest
   ═══════════════════════════════════════ */
export function Slide10() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 max-w-5xl w-full">
      <A delay={0}><h2 className="slide-heading text-center">Windowing Gets Closest</h2></A>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 mt-4">
        <A delay={2} animation="scale">
          <div className="relative">
            <div className="flex flex-col gap-1 w-36 md:w-44">
              {Array.from({length:15}).map((_,i)=>{
                const vis=i>=5&&i<=9,buf=i===4||i===10;
                return <div key={i} className={`h-6 rounded-sm ${vis?"bg-white":buf?"bg-gray-500":"border border-dashed border-gray-700"}`} />;
              })}
            </div>
          </div>
        </A>
        <div className="flex flex-col gap-4 max-w-sm">
          <A delay={4}><p className="slide-body">Both DOM and data are windowed. Only ~30 items in memory.</p></A>
          <A delay={6}><div className="flex items-start gap-3"><DoodleCheckmark delay="0.7s" /><p className="text-sm">Memory + DOM stay low</p></div></A>
          <A delay={8}><div className="flex items-start gap-3"><DoodleWarning delay="0.9s" /><p className="text-sm text-gray-400">Needs <strong className="text-white">fast random access</strong> from storage</p></div></A>
          <A delay={10}><div className="flex items-start gap-3"><DoodleWarning delay="1.1s" /><p className="text-sm text-gray-400">Still no mutation tracking</p></div></A>
        </div>
      </div>
      <A delay={13}><p className="text-sm text-gray-500 italic text-center">So: windowing is the shape of the answer. But I need faster storage + reactivity.</p></A>
    </div>
  );
}

/* ═══════════════════════════════════════
   SLIDE 11 — Each Storage Has a Strength
   IDB vs OPFS Benchmark — reference-style bars
   ═══════════════════════════════════════ */

function BenchBar({ label, value, unit, pct, winner, animDelay, compact }: {
  label: string; value: string; unit: string; pct: number; winner: boolean; animDelay: string; compact?: boolean;
}) {
  return (
    <div className={`flex items-center ${compact ? "gap-2" : "gap-3"}`}>
      <span className={`text-sm slide-mono ${compact ? "w-10" : "w-12"} text-right flex-shrink-0 ${winner ? "text-green-400" : "text-red-400"}`}>{label}</span>
      <div className={`flex-1 ${compact ? "h-7" : "h-9"} rounded-lg overflow-hidden relative`} style={{ background: "rgba(255,255,255,0.06)" }}>
        <div
          className={`h-full rounded-lg bar-animate ${winner ? "bg-green-500/80" : "bg-red-400/70"}`}
          style={{ "--expand-width": `${pct}%`, animationDelay: animDelay } as React.CSSProperties}
        />
      </div>
      <span className={`text-xs slide-mono text-gray-300 ${compact ? "w-16" : "w-20"} flex-shrink-0`}>{value} {unit}</span>
    </div>
  );
}

export function Slide11() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 max-w-3xl w-full">
      <A delay={0}><h2 className="slide-heading text-center">Each Storage Has a Strength</h2></A>
      <A delay={1}><p className="text-xs text-gray-500 text-center slide-mono">100K tasks · real queries · median of 3 runs</p></A>

      {/* Hero: Random Access — large, bordered, full width */}
      <A delay={2}>
        <div className="w-full border border-gray-700 rounded-2xl p-6 px-8 mt-2">
          <div className="flex items-baseline justify-between mb-5 gap-6">
            <div className="flex items-baseline gap-3">
              <p className="text-lg font-bold">Random Access</p>
              <p className="text-xs text-gray-500">most important for our use case</p>
            </div>
            <p className="text-lg font-bold text-green-400 slide-mono flex-shrink-0">OPFS 4.4×</p>
          </div>
          <div className="flex flex-col gap-4">
            <BenchBar label="IDB" value="37.6" unit="ms" pct={100} winner={false} animDelay="0.4s" />
            <BenchBar label="OPFS" value="8.5" unit="ms" pct={23} winner={true} animDelay="0.7s" />
          </div>
        </div>
      </A>

      {/* Secondary: Sequential + Writes — side by side */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full mt-1">
        <A delay={6}>
          <div>
            <div className="flex items-baseline justify-between mb-3">
              <p className="font-bold text-sm">Sequential Reads</p>
              <p className="font-bold text-sm text-green-400 slide-mono">IDB 1.9×</p>
            </div>
            <div className="flex flex-col gap-2">
              <BenchBar label="IDB" value="2,061" unit="ms" pct={52} winner={true} animDelay="0.8s" compact />
              <BenchBar label="OPFS" value="3,993" unit="ms" pct={100} winner={false} animDelay="1.0s" compact />
            </div>
          </div>
        </A>

        <A delay={9}>
          <div>
            <div className="flex items-baseline justify-between mb-3">
              <p className="font-bold text-sm">Writes</p>
              <p className="font-bold text-sm text-green-400 slide-mono">OPFS 2.4×</p>
            </div>
            <div className="flex flex-col gap-2">
              <BenchBar label="IDB" value="75.2" unit="s" pct={100} winner={false} animDelay="1.2s" compact />
              <BenchBar label="OPFS" value="30.8" unit="s" pct={41} winner={true} animDelay="1.4s" compact />
            </div>
          </div>
        </A>
      </div>

      <A delay={13} animation="pop"><p className="text-lg font-bold text-center mt-2">Neither is better. What if we use both?</p></A>
    </div>
  );
}

/* ═══════════════════════════════════════
   SLIDE 12 — What If We Only Load What's Visible?
   EntityStore: viewport-aware reactive rendering engine
   ═══════════════════════════════════════ */
export function Slide12() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 max-w-5xl w-full">
      <A delay={0}><h2 className="slide-heading text-center">What If We Only Load What&apos;s Visible?</h2></A>
      <A delay={1}><p className="text-sm text-gray-400 text-center">Load on demand. Free when out of view.</p></A>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 mt-4 w-full">
        {/* Architecture: UI → EntityStore → DB → Disk */}
        <div className="flex flex-col items-center gap-0 w-full md:w-52 flex-shrink-0">
          <A delay={2} animation="down">
            <div className="border border-gray-700 rounded-lg p-2 w-full text-center">
              <p className="text-sm font-medium">UI</p>
              <p className="text-[9px] text-gray-500">visible cards only</p>
            </div>
          </A>
          <A delay={3} animation="fade"><DoodleArrowDown delay="0.4s" /></A>
          <A delay={4}>
            <div className="border-2 border-white rounded-lg p-3 w-full text-center">
              <p className="font-bold text-sm">EntityStore</p>
              <p className="text-[9px] text-gray-400">indexes + hydrated visible</p>
            </div>
          </A>
          <A delay={6} animation="fade"><DoodleArrowDown delay="0.7s" /></A>
          <A delay={7}>
            <div className="border border-gray-700 rounded-lg p-2 w-full text-center">
              <p className="text-sm font-medium">Database</p>
              <p className="text-[9px] text-gray-500">fast random access</p>
            </div>
          </A>
          <A delay={9} animation="fade"><DoodleArrowDown delay="1s" /></A>
          <A delay={10}>
            <div className="border border-gray-700 rounded-lg p-2 w-full text-center">
              <DoodleDatabase className="mx-auto" delay="1.1s" />
              <p className="text-[9px] text-gray-500">Disk</p>
            </div>
          </A>
        </div>

        {/* Memory lifecycle diagram */}
        <A delay={6}>
          <div className="flex flex-col items-center gap-5 w-72">
            <p className="text-xs text-gray-400 slide-mono uppercase tracking-widest">Memory Lifecycle</p>

            {/* Visual: scrolling list with load/unload arrows */}
            <div className="w-full flex flex-col gap-1">
              {Array.from({length:9}).map((_,i) => {
                const isVisible = i >= 3 && i <= 5;
                const isLoading = i === 2;
                const isUnloading = i === 6;
                return (
                  <div key={i} className="flex items-center gap-2">
                    {/* Left arrows */}
                    <span className="text-[10px] w-12 text-right slide-mono flex-shrink-0">
                      {isLoading && <span className="text-green-400">load ↓</span>}
                      {isUnloading && <span className="text-red-400">free ↑</span>}
                    </span>
                    {/* Bar */}
                    <div className={`flex-1 h-5 rounded-sm ${
                      isVisible ? "bg-white shadow-[0_0_8px_rgba(255,255,255,0.3)]" :
                      isLoading ? "bg-green-500/30 border border-green-500/40" :
                      isUnloading ? "bg-red-500/20 border border-red-500/30" :
                      "bg-transparent border border-gray-800"
                    }`} style={isVisible ? {animation:"spotlight-pulse 2s ease-in-out infinite", animationDelay:`${(i-3)*0.2}s`} : {}} />
                    {/* Right label */}
                    <span className={`text-[9px] slide-mono w-14 flex-shrink-0 ${
                      isVisible ? "text-white" : isLoading ? "text-green-400" : isUnloading ? "text-red-400" : "text-gray-600"
                    }`}>
                      {isVisible ? "14KB" : isLoading ? "hydrating" : isUnloading ? "→ GC" : "200B"}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Summary */}
            <div className="flex justify-between w-full text-[10px] text-gray-500 border-t border-gray-800 pt-3">
              <span>3 loaded × 14KB = <span className="text-white font-medium">42KB</span></span>
              <span>6 indexes × 200B = <span className="text-white font-medium">1.2KB</span></span>
            </div>
          </div>
        </A>
      </div>

      <A delay={12}><p className="text-xs text-gray-400 text-center">Memory stays flat — no matter how large the dataset.</p></A>
    </div>
  );
}

/* ═══════════════════════════════════════
   SLIDE 12B — Viewport-Aware Rendering
   ═══════════════════════════════════════ */
export function SlideViewport() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 max-w-4xl w-full">
      <A delay={0}><h2 className="slide-heading text-center">Viewport-Aware Rendering</h2></A>
      <A delay={1}><p className="text-sm text-gray-400 text-center">Only hydrated items live in the DOM. Everything else is a lightweight index.</p></A>

      <A delay={2}>
        <div className="relative mt-4 w-full" style={{maxWidth:"32rem"}}>
          <p className="text-xs text-gray-500 slide-mono mb-3 text-center uppercase tracking-widest">Dataset — 25,000 items</p>
          <div className="relative rounded-xl overflow-hidden p-4 bg-gray-950">
            {/* Spotlight glow */}
            <div className="absolute left-0 right-0 pointer-events-none" style={{
              top: "calc(35%)",
              height: "30%",
              background: "radial-gradient(ellipse at center, rgba(255,255,255,0.08) 0%, transparent 70%)",
            }} />

            <div className="flex flex-col gap-1.5">
              {Array.from({length:16}).map((_,i) => {
                const isVisible = i >= 5 && i <= 10;
                const isBuffer = i === 4 || i === 11;
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`flex-1 h-5 rounded-sm transition-all ${
                      isVisible
                        ? "bg-white shadow-[0_0_12px_rgba(255,255,255,0.4)]"
                        : isBuffer
                        ? "bg-gray-500"
                        : "bg-transparent border border-gray-800"
                    }`}
                    style={isVisible ? {
                      animation: "spotlight-pulse 2s ease-in-out infinite",
                      animationDelay: `${(i-5)*0.15}s`,
                    } : {}}
                    />
                    <span className="text-[8px] slide-mono w-16 text-right" style={{color: isVisible ? "#fff" : isBuffer ? "#666" : "#333"}}>
                      {isVisible ? "hydrated" : isBuffer ? "buffer" : "index only"}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Floating particles from disk to visible */}
            {[0,1,2].map(j => (
              <div key={j} className="absolute w-1 h-1 bg-white rounded-full" style={{
                left: `${30+j*20}%`,
                animation: "viewport-particle 2.5s ease-in-out infinite",
                animationDelay: `${j*0.8}s`,
                bottom: 0,
              }} />
            ))}
          </div>
        </div>
      </A>

      <A delay={6}><p className="text-xs text-gray-400 text-center">Scroll in → hydrate. Scroll out → unload. Memory stays ~7MB.</p></A>
    </div>
  );
}

/* ═══════════════════════════════════════
   SLIDE 13 — How EntityStore Works
   Register query → indexes → observable → minimal re-renders
   ═══════════════════════════════════════ */
export function Slide13() {
  const steps = [
    { n: "1", color: "#22c55e", border: "border-green-500", text: "Register your query", sub: <span className="slide-mono text-[11px] bg-white/5 px-1.5 py-0.5 rounded">store.query({"{"} board: &quot;sprint-1&quot; {"}"})</span>, delay: 3 },
    { n: "2", color: "#3b82f6", border: "border-blue-500", text: "EntityStore returns indexes", sub: <span>Lightweight pointers to every matching entity. Not full objects.</span>, delay: 7 },
    { n: "3", color: "#8b5cf6", border: "border-purple-500", text: "Query becomes observable", sub: <span>Task added, moved, or deleted? Indexes auto-update. No re-query.</span>, delay: 11 },
    { n: "4", color: "#f59e0b", border: "border-amber-500", text: "Minimal re-renders", sub: <span>Only the affected visible entity re-renders. Everything else stays untouched.</span>, delay: 15 },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-4 max-w-5xl w-full">
      <A delay={0}><h2 className="slide-heading text-center">How EntityStore Works</h2></A>
      <A delay={1}><p className="text-sm text-gray-500 text-center max-w-xl">This is how we solve mutation handling. Register a query once — EntityStore keeps it alive. No table-level re-queries. No O(n) re-evaluation.</p></A>

      {/* Main layout: steps left, board right */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 mt-1 w-full">

        {/* Left: Numbered steps with animated connecting line */}
        <div className="relative flex flex-col flex-1">
          {/* Vertical line connecting all steps — animates via CSS on slide.active */}
          <div className="absolute left-[15px] top-5 bottom-5 w-px overflow-hidden">
            <div className="es-line w-full bg-gradient-to-b from-green-500/40 via-purple-500/40 to-amber-500/40" />
          </div>

          {steps.map((item) => (
            <A key={item.n} delay={item.delay} animation="right">
              <div className="flex items-start gap-4 py-3.5 relative">
                <div
                  className={`w-8 h-8 rounded-full border-2 ${item.border} flex items-center justify-center text-sm font-bold slide-mono flex-shrink-0 bg-black z-10`}
                  style={{ color: item.color }}
                >
                  {item.n}
                </div>
                <div>
                  <p className="text-[15px] font-semibold">{item.text}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{item.sub}</p>
                </div>
              </div>
            </A>
          ))}
        </div>

        {/* Right: Live kanban board */}
        <A delay={5} animation="scale">
          <div className="flex-shrink-0 w-full md:w-64 bg-[#0e0e0e] border border-gray-700/60 rounded-2xl p-5 flex flex-col shadow-[0_0_40px_rgba(34,197,94,0.04)]">
            <p className="text-[10px] text-gray-500 text-center tracking-[0.15em] uppercase mb-4">Live Result</p>

            <div className="flex gap-3 flex-1">
              {/* To Do */}
              <div className="flex-1 flex flex-col gap-1.5">
                <p className="text-[9px] text-gray-500 text-center mb-1">To Do</p>
                {[0,1,2].map(i => (
                  <div key={i} className="h-6 bg-[#1a1a1a] border border-[#252525] rounded" />
                ))}
              </div>

              {/* Active — matched cards pulse */}
              <div className="flex-1 flex flex-col gap-1.5">
                <p className="text-[9px] text-green-500/70 text-center mb-1 font-medium">Active</p>
                <div className="h-6 rounded border border-green-500/40 bg-green-500/10" style={{animation:"spotlight-pulse 2.5s ease-in-out infinite"}} />
                <div className="h-6 rounded border border-green-500/40 bg-green-500/10" style={{animation:"spotlight-pulse 2.5s ease-in-out 0.4s infinite"}} />
                <div className="h-6 bg-[#1a1a1a] border border-[#252525] rounded" />
                <div className="h-6 bg-[#1a1a1a] border border-[#252525] rounded" />
              </div>

              {/* Done */}
              <div className="flex-1 flex flex-col gap-1.5">
                <p className="text-[9px] text-gray-500 text-center mb-1">Done</p>
                {[0,1].map(i => (
                  <div key={i} className="h-6 bg-[#1a1a1a] border border-[#252525] rounded" />
                ))}
              </div>
            </div>

            {/* Status */}
            <div className="mt-4 pt-3 border-t border-gray-800 text-center">
              <p className="text-[10px] text-green-500 slide-mono">&#10003; always in sync</p>
              <p className="text-[8px] text-gray-600 mt-1">query never re-runs</p>
            </div>
          </div>
        </A>
      </div>

      {/* Bottom tagline */}
      <A delay={17} animation="pop">
        <div className="text-center">
          <p className="font-bold text-base">Query once → observe forever.</p>
          <p className="text-gray-500 text-base">Minimal re-renders. No recomputation.</p>
        </div>
      </A>
    </div>
  );
}

/* ═══════════════════════════════════════
   SLIDE 14 — How We Do This: MobX
   O(n) vs O(1) + Linear credit
   ═══════════════════════════════════════ */
export function Slide14() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 max-w-5xl w-full">
      <A delay={0}><h2 className="slide-heading text-center">How We Do This: MobX</h2></A>
      <A delay={1}><p className="text-sm text-gray-500 text-center max-w-lg">EntityStore uses MobX under the hood. Each entity is independently observable — updates are surgical, not global.</p></A>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mt-2 w-full">
        {/* O(n) */}
        <A delay={3}>
          <div className="border border-gray-700 rounded-lg p-4">
            <p className="text-xs text-gray-500 slide-mono mb-2 text-center">WITHOUT MobX</p>
            <div className="grid grid-cols-5 gap-2">
              {Array.from({length:15}).map((_,i)=>{
                const d=[0,0.25,0.1,0.45,0.15,0.35,0.05,0.4,0.2,0.3,0.12,0.38,0.08,0.42,0.22];
                return <div key={i} className="h-8 border border-gray-600 rounded" style={{animation:"blink-block 1s ease-in-out infinite",animationDelay:`${d[i]}s`}} />;
              })}
            </div>
            <p className="text-center mt-3"><span className="slide-mono font-bold text-xl">O(n)</span></p>
            <p className="text-[10px] text-gray-500 text-center">re-query entire list on every change</p>
          </div>
        </A>

        {/* O(1) */}
        <A delay={7}>
          <div className="border border-white rounded-lg p-4">
            <p className="text-xs text-gray-400 slide-mono mb-2 text-center">WITH MobX OBSERVER</p>
            <div className="grid grid-cols-5 gap-2">
              {Array.from({length:15}).map((_,i)=>{
                const t = i===7;
                return <div key={i} className={`h-8 rounded ${t?"border-2 border-white bg-white/20":"border border-gray-700"}`} style={t?{animation:"blink-single 1.5s ease-in-out infinite"}:{}} />;
              })}
            </div>
            <p className="text-center mt-3"><span className="slide-mono font-bold text-xl">O(1)</span></p>
            <p className="text-[10px] text-gray-400 text-center">only the changed entity re-renders</p>
          </div>
        </A>
      </div>

      {/* Entity cascade */}
      <A delay={11}>
        <div className="bg-gray-900 rounded-lg p-4 w-full max-w-lg text-center">
          <p className="text-xs text-gray-500 mb-2">A task is never just a task:</p>
          <div className="flex justify-center gap-3 flex-wrap">
            {["Task","Properties (5)","Tags (~3)","Comments","Assets"].map((e,i)=>(
              <span key={e} className="text-xs px-2 py-1 border border-gray-700 rounded slide-mono" style={{animation:"popIn 0.3s ease forwards",animationDelay:`${1.4+i*0.12}s`,opacity:0}}>{e}</span>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2">1 task = ~9 entities. MobX makes each one independently observable.</p>
        </div>
      </A>

      <A delay={14} animation="fade">
        <p className="text-xs text-gray-600 text-center italic">Inspired by Linear&apos;s approach to per-entity observability at scale.</p>
      </A>
    </div>
  );
}

// ═══════════════════════════════════════
// SLIDE 15 — Why Indexes Instead of Full Entities
// (COMMENTED OUT — removed from presentation)
// ═══════════════════════════════════════

/* ═══════════════════════════════════════
   SLIDE 16 — The Hybrid Model
   ═══════════════════════════════════════ */
export function Slide16() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 max-w-4xl w-full">
      <A delay={0}><h2 className="slide-heading text-center">The Hybrid Model</h2></A>

      {/* Animated flow */}
      <div className="flex flex-col sm:flex-row items-center gap-3 mt-4">
        <A delay={2} animation="scale">
          <div className="border border-white rounded-xl p-3 sm:p-4 text-center w-28 sm:w-36">
            <DoodleDatabase className="mx-auto" delay="0.3s" />
            <p className="font-bold mt-2">IDB</p>
            <p className="text-[10px] text-gray-400 mt-1">indexes</p>
            <p className="text-[10px] text-gray-500">sequential</p>
          </div>
        </A>

        <A delay={4} animation="fade">
          <div className="flex flex-col items-center gap-1 rotate-90 sm:rotate-0">
            <DoodleArrowRight delay="0.5s" />
            <span className="text-[8px] text-gray-500 slide-mono">startup</span>
          </div>
        </A>

        <A delay={5} animation="scale">
          <div className="border-2 border-white rounded-xl p-3 sm:p-4 text-center w-32 sm:w-44">
            <p className="font-bold text-lg">EntityStore</p>
            <p className="text-[10px] text-gray-400 mt-1">25K indexes + ~150 visible</p>
          </div>
        </A>

        <A delay={7} animation="fade">
          <div className="flex flex-col items-center gap-1 rotate-90 sm:rotate-0">
            <DoodleArrowRight delay="0.8s" />
            <span className="text-[8px] text-gray-500 slide-mono">on scroll</span>
          </div>
        </A>

        <A delay={8} animation="scale">
          <div className="border border-white rounded-xl p-3 sm:p-4 text-center w-28 sm:w-36">
            <DoodleDatabase className="mx-auto" delay="0.9s" />
            <p className="font-bold mt-2">SQLite</p>
            <p className="text-[10px] text-gray-400 mt-1">full data</p>
            <p className="text-[10px] text-gray-500">WASM + OPFS</p>
          </div>
        </A>
      </div>

      <A delay={10}>
        <div className="grid grid-cols-2 gap-6 w-full max-w-lg mt-2">
          <div className="text-center">
            <p className="text-sm text-gray-400">IDB fires</p>
            <p className="text-2xl font-bold">once</p>
            <p className="text-[10px] text-gray-500">at startup</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-400">SQLite fires</p>
            <p className="text-2xl font-bold">continuously</p>
            <p className="text-[10px] text-gray-500">as user scrolls</p>
          </div>
        </div>
      </A>
    </div>
  );
}

/* ═══════════════════════════════════════
   SLIDE 17 — The Numbers (big before/after)
   ═══════════════════════════════════════ */
export function Slide17() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 max-w-5xl w-full">
      <A delay={0}><h2 className="slide-heading text-center">The Numbers</h2></A>

      {/* Big before/after */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-4">
        <A delay={2} animation="scale">
          <div className="text-center">
            <p className="text-gray-500 font-bold text-5xl sm:text-7xl md:text-8xl" style={{lineHeight:1,letterSpacing:"-0.04em"}}>545MB</p>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">IDB · 25K tasks</p>
            <p className="text-xs sm:text-sm text-gray-600">Page freezes · even with sharding</p>
          </div>
        </A>
        <A delay={4} animation="fade">
          <span className="text-2xl sm:text-4xl text-gray-600 mx-2 sm:mx-4">→</span>
        </A>
        <A delay={5} animation="scale">
          <div className="text-center">
            <p className="text-white font-bold text-5xl sm:text-7xl md:text-8xl" style={{lineHeight:1,letterSpacing:"-0.04em"}}>44MB</p>
            <p className="text-xs sm:text-sm text-gray-400 mt-2">Two-tier · 25K tasks</p>
            <p className="text-xs sm:text-sm text-gray-400">12x reduction</p>
          </div>
        </A>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-4">
        <A delay={8} animation="pop">
          <div className="text-center">
            <p className="slide-mono text-3xl sm:text-5xl font-bold text-red-400">7,600ms</p>
            <p className="text-xs sm:text-sm text-red-400/60 mt-1">IDB · to interactive</p>
          </div>
        </A>
        <A delay={10} animation="fade">
          <span className="text-xl sm:text-2xl text-gray-600">→</span>
        </A>
        <A delay={11} animation="pop">
          <div className="text-center">
            <p className="slide-mono text-3xl sm:text-5xl font-bold text-green-400">600ms</p>
            <p className="text-xs sm:text-sm text-green-400/60 mt-1">Two-tier · to interactive</p>
          </div>
        </A>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   SLIDE 18 — Memory Stays Flat (graph)
   ═══════════════════════════════════════ */
export function Slide18() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 max-w-5xl w-full">
      <A delay={0}><h2 className="slide-heading">Memory Stays Flat</h2></A>

      {/* Graph — close to heading, wide, animated via CSS so it triggers on slide active */}
      <A delay={2}>
        <div className="w-full" style={{maxWidth:"64rem"}}>
          <svg viewBox="0 0 800 320" className="w-full" style={{maxHeight:"22rem"}}>
            {/* Y axis */}
            <line x1="70" y1="10" x2="70" y2="270" stroke="#444" strokeWidth="1.5" />
            {/* X axis */}
            <line x1="70" y1="270" x2="780" y2="270" stroke="#444" strokeWidth="1.5" />

            {/* Grid lines — subtle */}
            <line x1="70" y1="140" x2="780" y2="140" stroke="#222" strokeWidth="1" strokeDasharray="4 4" />

            {/* Y labels */}
            <text x="58" y="20" textAnchor="end" fill="#666" fontSize="13" fontFamily="monospace">3GB</text>
            <text x="58" y="145" textAnchor="end" fill="#666" fontSize="13" fontFamily="monospace">1.5GB</text>
            <text x="58" y="275" textAnchor="end" fill="#666" fontSize="13" fontFamily="monospace">0</text>

            {/* X labels */}
            <text x="70" y="295" textAnchor="start" fill="#666" fontSize="13" fontFamily="monospace">25K tasks</text>
            <text x="425" y="295" textAnchor="middle" fill="#666" fontSize="13" fontFamily="monospace">50K tasks</text>
            <text x="780" y="295" textAnchor="end" fill="#666" fontSize="13" fontFamily="monospace">100K tasks</text>

            {/* IDB line — red, shooting up */}
            <path
              className="graph-line-red"
              d="M 70 224 L 425 186 L 780 18"
              fill="none" stroke="#ef4444" strokeWidth="3.5" strokeLinecap="round"
            />

            {/* Two-tier line — green, flat at bottom */}
            <path
              className="graph-line-green"
              d="M 70 266 L 425 265 L 780 262"
              fill="none" stroke="#22c55e" strokeWidth="3.5" strokeLinecap="round"
            />

            {/* IDB dot at end — red glow */}
            <circle cx="780" cy="18" r="5" fill="#ef4444" className="graph-label graph-dot-red" />

            {/* Two-tier dot at end — green glow */}
            <circle cx="780" cy="262" r="5" fill="#22c55e" className="graph-label graph-dot-green" />

            {/* Line labels — fade in */}
            <text x="750" y="12" fill="#ef4444" fontSize="15" fontWeight="bold" fontFamily="monospace" className="graph-label graph-label-red">
              IDB
            </text>
            <text x="710" y="257" fill="#22c55e" fontSize="15" fontWeight="bold" fontFamily="monospace" className="graph-label graph-label-green">
              Two-tier
            </text>
          </svg>
        </div>
      </A>

      {/* Summary boxes — green/red borders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full mt-2" style={{maxWidth:"52rem"}}>
        <A delay={6}>
          <div className="border border-green-500/30 rounded-xl p-5 text-center">
            <p className="font-medium text-green-400">Two-tier: 44MB → 60MB → 90MB</p>
            <p className="text-sm text-gray-500 mt-1">~2x growth across 4x data</p>
          </div>
        </A>
        <A delay={8}>
          <div className="border border-red-500/30 rounded-xl p-5 text-center">
            <p className="font-medium text-red-400">IDB: 545MB → 1,006MB → 3,000MB</p>
            <p className="text-sm text-gray-500 mt-1">Super-linear growth · even with sharding</p>
          </div>
        </A>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   SLIDE 19 — Closing
   ═══════════════════════════════════════ */
export function Slide19() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-8 max-w-3xl">
      <A delay={0} animation="pop"><DoodleStar size={40} /></A>
      <A delay={2}><p className="text-xl sm:text-3xl font-light leading-relaxed max-w-xl">The best sync engine in the world doesn&apos;t matter if your app takes<strong className="font-bold"> 3 seconds</strong> to load a task list.</p></A>
      <A delay={5} animation="fade"><DoodleLongUnderline delay="0.6s" /></A>
      <A delay={7}><p className="text-lg text-gray-400">This is the second part of building a local-first app. It should truly be local-first — no matter what.</p></A>
      <A delay={9}><p className="text-sm text-gray-500">And none of it required a third-party library.</p></A>
      <A delay={12} animation="fade"><DoodleSquiggle /></A>
      <A delay={13}><div className="flex items-center gap-3 mt-4"><DoodleSparkle /><span className="text-gray-400 slide-mono text-sm">Riken Shah · Founding Engineer @ Tasks</span><DoodleSparkle /></div></A>
      <A delay={15}><p className="text-2xl font-bold mt-4">Thank you.</p></A>
    </div>
  );
}

/* ═══════════════════════════════════════
   EXPORT ALL SLIDES
   ═══════════════════════════════════════ */
export const allSlides = [
  <Slide1 key={1} />,
  <SlideImpact key="impact" />,
  <Slide2 key={2} />,
  <Slide3 key={3} />,
  <Slide4 key={4} />,
  <Slide5 key={5} />,
  <Slide6 key={6} />,
  <Slide7 key={7} />,
  <Slide8 key={8} />,
  <Slide9 key={9} />,
  <Slide10 key={10} />,
  <Slide12 key={11} />,
  <SlideViewport key="viewport" />,
  <Slide13 key={12} />,
  <Slide14 key={13} />,
  <Slide11 key={14} />,
  <Slide16 key={16} />,
  <Slide17 key={17} />,
  <Slide18 key={18} />,
  <Slide19 key={19} />,
];
