import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ExternalLink } from "lucide-react";
import { projects } from "../PortfolioDetail";

export function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: (typeof projects)[0];
  index: number;
  onOpen: (project: (typeof projects)[0]) => void;
}) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onClick={() => onOpen(project)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex items-stretch cursor-pointer overflow-hidden rounded-2xl"
      style={{
        background: hovered ? "#FFFFFF" : "#FAFCFE",
        border: `1.5px solid ${hovered ? project.color : "rgba(42,184,220,0.15)"}`,
        transition: "all 0.32s ease",
        boxShadow: hovered ? `0 12px 40px ${project.color}22` : "0 1px 6px rgba(42,184,220,0.05)",
      }}
    >
      {/* Left — big number */}
      <div
        className="flex items-center justify-center flex-shrink-0 w-28"
        style={{
          background: hovered ? project.color : project.color + "18",
          transition: "background 0.32s ease",
        }}
      >
        <span
          style={{
            fontFamily: "'Unbounded', sans-serif",
            fontWeight: 900,
            fontSize: "42px",
            color: hovered ? "#0D1A2A" : project.color,
            transition: "color 0.32s ease",
          }}
        >
          0{index + 1}
        </span>
      </div>

      {/* Middle — image thumbnail */}
      <div className="relative flex-shrink-0 overflow-hidden" style={{ width: "280px" }}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: hovered ? "scale(1.08)" : "scale(1)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(to right, transparent 70%, ${hovered ? "#FFFFFF" : "#FAFCFE"})` }}
        />
      </div>

      {/* Right — info */}
      <div className="flex flex-col justify-center px-10 py-6 flex-1 min-w-0">
        <div className="flex items-center gap-3 mb-3">
          <span
            className="px-3 py-1 rounded-full"
            style={{
              background: project.color + "22",
              color: project.color,
              fontFamily: "'Unbounded', sans-serif",
              fontSize: "10px",
              letterSpacing: "0.08em",
            }}
          >
            {project.category}
          </span>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "#5A7A8A" }}>
            {project.year}
          </span>
        </div>
        <h3
          style={{
            fontFamily: "'Unbounded', sans-serif",
            fontWeight: 800,
            fontSize: "26px",
            color: "#0D1A2A",
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
          }}
        >
          {project.title}
        </h3>
        <p
          className="mt-3 leading-relaxed"
          style={{ color: "#5A7A8A", fontFamily: "'DM Sans', sans-serif", fontSize: "14px" }}
        >
          {project.description}
        </p>
      </div>

      {/* Arrow */}
      <div
        className="flex items-center pr-10 flex-shrink-0 transition-all duration-300"
        style={{ opacity: hovered ? 1 : 0.2 }}
      >
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
          style={{ background: hovered ? project.color : project.color + "20" }}
        >
          <ExternalLink size={20} style={{ color: hovered ? "#0D1A2A" : project.color }} />
        </div>
      </div>
    </motion.div>
  );
}
