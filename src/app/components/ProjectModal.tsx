import { motion, AnimatePresence } from "motion/react";
import { Github, ExternalLink, X } from "lucide-react";
import { projects } from "../PortfolioDetail";

type Project = (typeof projects)[number];

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({
  project,
  onClose,
}: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          style={{
            background: "rgba(13, 26, 42, 0.72)",
            backdropFilter: "blur(8px)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="
              relative
              w-full
              max-w-[1100px]
              h-[min(760px,90vh)]
              overflow-hidden
              rounded-[28px]
              bg-white
              flex
              flex-col
              md:flex-row
            "
            style={{
              boxShadow: "0 30px 100px rgba(13,26,42,0.4)",
            }}
          >
            {/* ========================================
                CLOSE BUTTON
            ======================================== */}
            <button
              type="button"
              onClick={onClose}
              aria-label="모달 닫기"
              className="
                absolute
                top-5
                right-5
                z-30
                w-11
                h-11
                rounded-full
                flex
                items-center
                justify-center
                bg-white/90
                backdrop-blur-sm
                border
                border-black/10
                transition-all
                duration-300
                hover:scale-105
                hover:bg-white
              "
              style={{
                color: "#0D1A2A",
              }}
            >
              <X size={20} strokeWidth={1.8} />
            </button>

            {/* ========================================
                LEFT — PROJECT IMAGE
            ======================================== */}
            <div
              className="
                relative
                w-full
                md:w-[46%]
                h-[280px]
                md:h-full
                shrink-0
                overflow-hidden
              "
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  objectPosition:
                    project.imagePosition ?? "center",
                }}
              />

              {/* 이미지 위 그라디언트 */}
              <div
                className="
                  absolute
                  inset-0
                  pointer-events-none
                "
                style={{
                  background:
                    "linear-gradient(to top, rgba(13,26,42,0.3), transparent 40%)",
                }}
              />

              {/* 프로젝트 번호 */}
              <div
                className="
                  absolute
                  bottom-7
                  left-8
                  flex
                  items-center
                  gap-3
                "
              >
                <span
                  className="text-[12px] tracking-[0.08em]"
                  style={{
                    color: "#FFFFFF",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  PROJECT
                </span>

                <span
                  className="h-px w-8"
                  style={{
                    background: "#FFFFFF80",
                  }}
                />

                <span
                  className="text-[12px]"
                  style={{
                    color: "#FFFFFF",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {project.year}
                </span>
              </div>
            </div>

            {/* ========================================
                RIGHT — PROJECT INFORMATION
            ======================================== */}
            <div
              className="
                flex-1
                min-w-0
                overflow-y-auto
                no-scrollbar
              "
            >
              <div className="px-7 py-8 md:px-10 md:py-10 lg:px-12">

                {/* Category + Year */}
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="
                      px-3
                      py-1.5
                      rounded-full
                    "
                    style={{
                      background: `${project.color}22`,
                      color: project.color,
                      fontFamily: "'Unbounded', sans-serif",
                      fontSize: "9px",
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                    }}
                  >
                    {project.category}
                  </span>

                  <span
                    style={{
                      color: "#7B8E9A",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "11px",
                    }}
                  >
                    {project.year}
                  </span>
                </div>

                {/* Title */}
                <h2
                  style={{
                    fontFamily: "'Unbounded', sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(22px, 3vw, 30px)",
                    lineHeight: 1.25,
                    color: "#0D1A2A",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {project.title}
                </h2>

                {/* Accent line */}
                <div
                  className="w-10 h-1 rounded-full mt-5 mb-5"
                  style={{
                    background: project.color,
                  }}
                />

                {/* Description */}
                <p
                  className="leading-relaxed"
                  style={{
                    color: "#405766",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "13px",
                  }}
                >
                  {project.description}
                </p>

                {project.longDescription && (
                  <p
                    className="mt-3 leading-relaxed"
                    style={{
                      color: "#718592",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "12px",
                    }}
                  >
                    {project.longDescription}
                  </p>
                )}

                {/* ========================================
                    MY CONTRIBUTION
                ======================================== */}
                <div className="mt-7">
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{
                        background: project.color,
                      }}
                    />

                    <h3
                      style={{
                        fontFamily: "'Unbounded', sans-serif",
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "#0D1A2A",
                      }}
                    >
                      핵심 포인트
                    </h3>
                  </div>

                  {/* Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {project.highlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="
                          rounded-2xl
                          p-4
                          min-h-[90px]
                          flex
                          items-center
                        "
                        style={{
                          background: `${project.color}0D`,
                          border: `1px solid ${project.color}20`,
                        }}
                      >
                        <p
                          className="leading-relaxed"
                          style={{
                            color: "#243D4A",
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "11px",
                            fontWeight: 600,
                          }}
                        >
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ========================================
                    TECH STACK
                ======================================== */}
                <div className="mt-7">
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{
                        background: project.color,
                      }}
                    />

                    <h3
                      style={{
                        fontFamily: "'Unbounded', sans-serif",
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "#0D1A2A",
                      }}
                    >
                      사용 기술
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="
                          px-3
                          py-1.5
                          rounded-full
                        "
                        style={{
                          background: "#F7FBFE",
                          color: "#2AB8DC",
                          border: "1px solid #2AB8DC30",
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "10px",
                          fontWeight: 600,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ========================================
                    LINKS
                ======================================== */}
                <div className="flex flex-wrap gap-3 mt-8">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      px-6
                      py-3
                      rounded-full
                      transition-all
                      duration-300
                      hover:scale-105
                    "
                    style={{
                      background: project.color,
                      color: "#0D1A2A",
                      fontFamily: "'Unbounded', sans-serif",
                      fontSize: "10px",
                      fontWeight: 600,
                    }}
                  >
                    <ExternalLink size={14} />
                    LIVE
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      px-6
                      py-3
                      rounded-full
                      transition-all
                      duration-300
                      hover:bg-slate-50
                    "
                    style={{
                      border: `1.5px solid ${project.color}60`,
                      color: "#0D1A2A",
                      fontFamily: "'Unbounded', sans-serif",
                      fontSize: "10px",
                      fontWeight: 600,
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