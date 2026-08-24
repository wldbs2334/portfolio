export function NavDots({ active, total, onDotClick }: { active: number; total: number; onDotClick: (i: number) => void }) {
  const labels = ["INTRO", "SKILLS", "WORK", "CONTACT"];
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 items-end">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onDotClick(i)}
          className="flex items-center gap-2 group"
          aria-label={labels[i]}
        >
          <span
            className="text-xs transition-all duration-300"
            style={{
              fontFamily: "'Unbounded', sans-serif",
              fontSize: "9px",
              color: active === i ? "#2AB8DC" : "transparent",
              letterSpacing: "0.1em",
            }}
          >
            {labels[i]}
          </span>
          <span
            className="block rounded-full transition-all duration-300"
            style={{
              width: active === i ? 14 : 7,
              height: active === i ? 14 : 7,
              background: active === i ? "#2AB8DC" : "rgba(42,184,220,0.3)",
              boxShadow: active === i ? "0 0 10px #9AE3F780" : "none",
            }}
          />
        </button>
      ))}
    </div>
  );
}
