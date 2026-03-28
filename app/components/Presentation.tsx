"use client";

import { useCallback, useEffect, useState } from "react";

interface PresentationProps {
  slides: React.ReactNode[];
}

export default function Presentation({ slides }: PresentationProps) {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
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

  return (
    <div className="presentation" tabIndex={0}>
      {/* Slides */}
      {slides.map((slide, i) => (
        <div key={i} className={`slide ${i === current ? "active" : ""}`}>
          {slide}
        </div>
      ))}

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
          Arrow keys or Enter to navigate &middot; F for fullscreen
        </div>
      )}
    </div>
  );
}
