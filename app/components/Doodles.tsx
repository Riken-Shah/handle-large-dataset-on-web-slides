"use client";

/* ═══════════════════════════════════════
   DOODLE SVG COMPONENTS
   Hand-drawn style SVG elements with
   slightly imperfect paths for a sketchy look
   ═══════════════════════════════════════ */

interface DoodleProps {
  className?: string;
  delay?: string;
}

export function DoodleUnderline({ className = "", delay = "0s" }: DoodleProps & { width?: number }) {
  return (
    <svg width="200" height="12" viewBox="0 0 200 12" className={`doodle-draw ${className}`} style={{ animationDelay: delay }}>
      <path d="M2 8 Q30 2, 60 7 T120 5 T180 8 L198 6" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function DoodleLongUnderline({ className = "", delay = "0s" }: DoodleProps) {
  return (
    <svg width="400" height="12" viewBox="0 0 400 12" className={`doodle-draw ${className}`} style={{ animationDelay: delay }}>
      <path d="M2 7 Q50 3, 100 8 T200 5 T300 7 T398 5" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function DoodleArrowRight({ className = "", delay = "0s" }: DoodleProps) {
  return (
    <svg width="60" height="24" viewBox="0 0 60 24" className={`doodle-draw ${className}`} style={{ animationDelay: delay }}>
      <path d="M4 12 L48 12" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M42 6 L50 12 L42 18" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DoodleArrowDown({ className = "", delay = "0s" }: DoodleProps) {
  return (
    <svg width="24" height="50" viewBox="0 0 24 50" className={`doodle-draw ${className}`} style={{ animationDelay: delay }}>
      <path d="M12 4 L12 40" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M6 34 L12 42 L18 34" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DoodleStar({ className = "", delay = "0s", size = 24 }: DoodleProps & { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={`doodle-draw ${className}`} style={{ animationDelay: delay }}>
      <path d="M12 2 L14 9 L21 9 L15.5 14 L17.5 21 L12 17 L6.5 21 L8.5 14 L3 9 L10 9 Z" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DoodleCircle({ className = "", delay = "0s", size = 48 }: DoodleProps & { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className={`doodle-draw ${className}`} style={{ animationDelay: delay }}>
      <path d="M24 4 C36 3, 45 12, 44 24 C45 36, 36 45, 24 44 C12 45, 3 36, 4 24 C3 12, 12 3, 24 4" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function DoodleBox({ className = "", delay = "0s", width = 120, height = 80 }: DoodleProps & { width?: number; height?: number }) {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className={`doodle-draw ${className}`} style={{ animationDelay: delay }}>
      <path
        d={`M4 4 L${width - 5} 5 L${width - 4} ${height - 5} L5 ${height - 4} Z`}
        fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

export function DoodleCheckmark({ className = "", delay = "0s" }: DoodleProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" className={`doodle-draw fast ${className}`} style={{ animationDelay: delay }}>
      <path d="M4 13 L9 18 L20 6" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DoodleCross({ className = "", delay = "0s" }: DoodleProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" className={`doodle-draw fast ${className}`} style={{ animationDelay: delay }}>
      <path d="M5 5 L19 19" fill="none" stroke="#555" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M19 5 L5 19" fill="none" stroke="#555" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function DoodleCloud({ className = "", delay = "0s" }: DoodleProps) {
  return (
    <svg width="72" height="48" viewBox="0 0 72 48" className={`doodle-draw ${className}`} style={{ animationDelay: delay }}>
      <path d="M20 36 C8 36, 4 28, 10 22 C8 14, 16 8, 24 10 C28 4, 40 2, 46 8 C52 4, 64 8, 62 18 C68 22, 66 34, 54 36 Z" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function DoodleDatabase({ className = "", delay = "0s" }: DoodleProps) {
  return (
    <svg width="56" height="64" viewBox="0 0 56 64" className={`doodle-draw ${className}`} style={{ animationDelay: delay }}>
      <ellipse cx="28" cy="14" rx="24" ry="10" fill="none" stroke="white" strokeWidth="2" />
      <path d="M4 14 L4 50 C4 56, 28 62, 52 50 L52 14" fill="none" stroke="white" strokeWidth="2" />
      <ellipse cx="28" cy="50" rx="24" ry="10" fill="none" stroke="white" strokeWidth="2" opacity="0.3" />
    </svg>
  );
}

export function DoodleChip({ className = "", delay = "0s" }: DoodleProps) {
  return (
    <svg width="64" height="56" viewBox="0 0 64 56" className={`doodle-draw ${className}`} style={{ animationDelay: delay }}>
      <rect x="12" y="10" width="40" height="36" rx="3" fill="none" stroke="white" strokeWidth="2" />
      <line x1="20" y1="10" x2="20" y2="3" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="32" y1="10" x2="32" y2="3" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="44" y1="10" x2="44" y2="3" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="20" y1="46" x2="20" y2="53" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="32" y1="46" x2="32" y2="53" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="44" y1="46" x2="44" y2="53" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <text x="32" y="32" textAnchor="middle" fill="white" fontSize="10" fontFamily="monospace">RAM</text>
    </svg>
  );
}

export function DoodleBrowser({ className = "", delay = "0s" }: DoodleProps) {
  return (
    <svg width="80" height="60" viewBox="0 0 80 60" className={`doodle-draw ${className}`} style={{ animationDelay: delay }}>
      <rect x="2" y="2" width="76" height="56" rx="4" fill="none" stroke="white" strokeWidth="2" />
      <line x1="2" y1="14" x2="78" y2="14" stroke="white" strokeWidth="2" />
      <circle cx="10" cy="8" r="2.5" fill="none" stroke="white" strokeWidth="1.5" />
      <circle cx="18" cy="8" r="2.5" fill="none" stroke="white" strokeWidth="1.5" />
      <circle cx="26" cy="8" r="2.5" fill="none" stroke="white" strokeWidth="1.5" />
    </svg>
  );
}

export function DoodleSparkle({ className = "", delay = "0s" }: DoodleProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" className={`doodle-draw fast ${className}`} style={{ animationDelay: delay }}>
      <path d="M10 2 L10 18 M2 10 L18 10 M4 4 L16 16 M16 4 L4 16" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

export function DoodleSquiggle({ className = "", delay = "0s" }: DoodleProps) {
  return (
    <svg width="120" height="8" viewBox="0 0 120 8" className={`doodle-draw ${className}`} style={{ animationDelay: delay }}>
      <path d="M2 4 Q10 1, 18 4 T34 4 T50 4 T66 4 T82 4 T98 4 T114 4" fill="none" stroke="#444" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function DoodleExplosion({ className = "", delay = "0s" }: DoodleProps) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" className={`doodle-draw fast ${className}`} style={{ animationDelay: delay }}>
      <path d="M20 8 L22 16 M28 12 L24 18 M32 20 L24 20 M28 28 L22 24 M20 32 L20 24 M12 28 L16 22 M8 20 L16 20 M12 12 L18 16" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function DoodleWarning({ className = "", delay = "0s" }: DoodleProps) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" className={`doodle-draw fast ${className}`} style={{ animationDelay: delay }}>
      <path d="M16 4 L30 28 L2 28 Z" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="16" y1="12" x2="16" y2="20" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <circle cx="16" cy="24" r="1.5" fill="white" />
    </svg>
  );
}

export function DoodleLightning({ className = "", delay = "0s" }: DoodleProps) {
  return (
    <svg width="24" height="36" viewBox="0 0 24 36" className={`doodle-draw fast ${className}`} style={{ animationDelay: delay }}>
      <path d="M14 2 L6 16 L12 16 L8 34 L20 14 L13 14 Z" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DoodleCurlyBrace({ className = "", delay = "0s", height = 100 }: DoodleProps & { height?: number }) {
  const mid = height / 2;
  return (
    <svg width="16" height={height} viewBox={`0 0 16 ${height}`} className={`doodle-draw ${className}`} style={{ animationDelay: delay }}>
      <path d={`M12 4 Q4 4, 4 ${mid - 10} L4 ${mid - 5} Q4 ${mid}, 2 ${mid} Q4 ${mid}, 4 ${mid + 5} L4 ${mid + 10} Q4 ${height - 4}, 12 ${height - 4}`} fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/* ═══════════════════════════════════════
   ANIMATED WRAPPER COMPONENTS
   ═══════════════════════════════════════ */

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: "up" | "fade" | "scale" | "right" | "left" | "down" | "pop" | "bounce" | "float" | "wiggle" | "pulse";
}

const animMap: Record<string, string> = {
  up: "anim",
  fade: "anim anim-fade",
  scale: "anim anim-scale",
  right: "anim anim-right",
  left: "anim anim-left",
  down: "anim anim-down",
  pop: "anim anim-pop",
  bounce: "anim anim-bounce",
  float: "anim anim-float",
  wiggle: "anim anim-wiggle",
  pulse: "anim anim-pulse",
};

export function A({ children, className = "", delay = 0, animation = "up" }: AnimateInProps) {
  return (
    <div className={`${animMap[animation]} d${delay} ${className}`}>
      {children}
    </div>
  );
}

/* Icon components for diagrams */

export function IconCloud() {
  return (
    <div className="flex flex-col items-center gap-2">
      <DoodleCloud />
      <span className="text-xs text-gray-400 slide-mono">SERVER</span>
    </div>
  );
}

export function IconDisk() {
  return (
    <div className="flex flex-col items-center gap-2">
      <DoodleDatabase />
      <span className="text-xs text-gray-400 slide-mono">DISK</span>
    </div>
  );
}

export function IconMemory() {
  return (
    <div className="flex flex-col items-center gap-2">
      <DoodleChip />
      <span className="text-xs text-gray-400 slide-mono">MEMORY</span>
    </div>
  );
}

export function IconBrowser() {
  return (
    <div className="flex flex-col items-center gap-2">
      <DoodleBrowser />
      <span className="text-xs text-gray-400 slide-mono">UI</span>
    </div>
  );
}
