export function Geo({
  shape,
  size,
  color,
  opacity = 0.15,
  className = "",
}: {
  shape: "circle" | "square" | "triangle" | "ring";
  size: number;
  color: string;
  opacity?: number;
  className?: string;
}) {
  const base = { width: size, height: size, opacity };
  if (shape === "circle")
    return <div className={`rounded-full absolute ${className}`} style={{ ...base, background: color }} />;
  if (shape === "ring")
    return (
      <div
        className={`rounded-full absolute ${className}`}
        style={{ ...base, background: "transparent", border: `3px solid ${color}`, opacity: opacity * 2 }}
      />
    );
  if (shape === "square")
    return <div className={`absolute rotate-45 ${className}`} style={{ ...base, background: color }} />;
  return (
    <div
      className={`absolute ${className}`}
      style={{
        width: 0,
        height: 0,
        borderLeft: `${size / 2}px solid transparent`,
        borderRight: `${size / 2}px solid transparent`,
        borderBottom: `${size}px solid ${color}`,
        opacity,
      }}
    />
  );
}
