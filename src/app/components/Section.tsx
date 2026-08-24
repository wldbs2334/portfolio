import type { CSSProperties, ReactNode } from "react";

export function Section({
  id,
  children,
  className = "",
  style,
}: {
  id: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <section
      id={id}
      className={`relative w-full h-screen overflow-hidden flex-shrink-0 ${className}`}
      style={style}
    >
      {children}
    </section>
  );
}
