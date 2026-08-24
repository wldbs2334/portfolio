import { motion, AnimatePresence } from "motion/react";
import { Github, ExternalLink, X } from "lucide-react";
import { projects } from "../PortfolioDetail";

type Project = (typeof projects)[number];

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center p-6"
          style={{
            background: "rgba(13,26,42,0.65)",
            backdropFilter: "blur(6px)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl rounded-3xl overflow-hidden"
            style={{
              background: "#FFFFFF",
              boxShadow: "0 24px 80px rgba(13,26,42,0.35)",
            }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                background: "#FFFFFFE0",
                color: "#0D1A2A",
              }}
            >
              <X size={18} />
            </button>

            {/* Scrollable content */}
            <div className="max-h-[85vh] overflow-y-auto no-scrollbar">

              {/* Image */}
              <div className="relative w-full h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: project.imagePosition ?? "center",
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-10">

                {/* Category + Year */}
                <div className="flex items-center gap-3 mb-4">
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

                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "12px",
                      color: "#5A7A8A",
                    }}
                  >
                    {project.year}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "'Unbounded', sans-serif",
                    fontWeight: 800,
                    fontSize: "28px",
                    color: "#0D1A2A",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {project.title}
                </h3>

                {/* Color bar */}
                <div
                  className="w-14 h-1.5 rounded-full mt-5 mb-5"
                  style={{
                    background: project.color,
                  }}
                />

                {/* Description */}
                <p
                  className="leading-relaxed"
                  style={{
                    color: "#2A4A5A",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "15px",
                  }}
                >
                  {project.description}
                </p>

                <p
                  className="mt-3 leading-relaxed"
                  style={{
                    color: "#5A7A8A",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "13px",
                  }}
                >
                  {project.longDescription}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-3 gap-3 mt-7">
                  {project.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-2xl text-center"
                      style={{
                        background: project.color + "18",
                        border: `1.5px solid ${project.color}35`,
                      }}
                    >
                      <p
                        className="text-xs font-semibold leading-snug"
                        style={{ color: "#0D1A2A" }}
                      >
                        {h}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-full text-xs"
                      style={{
                        background: "#F7FBFE",
                        color: "#2AB8DC",
                        border: "1.5px solid #2AB8DC30",
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-8">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-full text-sm transition-all duration-300 hover:scale-105"
                    style={{
                      background: project.color,
                      color: "#0D1A2A",
                      fontFamily: "'Unbounded', sans-serif",
                      fontSize: "11px",
                    }}
                  >
                    <ExternalLink size={14} />
                    LIVE
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-full text-sm transition-all duration-300"
                    style={{
                      border: `1.5px solid ${project.color}60`,
                      color: "#0D1A2A",
                      fontFamily: "'Unbounded', sans-serif",
                      fontSize: "11px",
                      background: "transparent",
                    }}
                  >
                    <Github size={14} />
                    GITHUB
                  </a>
                </div>

              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}