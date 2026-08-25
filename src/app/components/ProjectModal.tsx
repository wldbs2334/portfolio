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
  const projectIndex = project
    ? projects.findIndex((item) => item.id === project.id)
    : -1;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            p-4
            md:p-8
          "
          style={{
            background: "rgba(13,26,42,0.68)",
            backdropFilter: "blur(7px)",
          }}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
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
              boxShadow:
                "0 30px 100px rgba(13,26,42,0.4)",
            }}
          >
            {/* =====================================
                CLOSE
            ====================================== */}
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
                border
                border-black/10
                transition-all
                duration-300
                hover:scale-105
              "
              style={{
                color: "#0D1A2A",
              }}
            >
              <X
                size={19}
                strokeWidth={1.8}
              />
            </button>

            {/* =====================================
                LEFT IMAGE
            ====================================== */}
            <div
              className="
                relative
                w-full
                md:w-[45%]
                h-[280px]
                md:h-full
                shrink-0
                overflow-hidden
              "
            >
              <img
                src={project.image}
                alt={project.title}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                "
                style={{
                  objectPosition:
                    project.imagePosition ?? "center",
                }}
              />

              {/* 이미지 그라디언트 */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(13,26,42,0.38), transparent 45%)",
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
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "11px",
                    color: "#FFFFFF",
                    letterSpacing: "0.08em",
                  }}
                >
                  {String(projectIndex + 1).padStart(2, "0")}
                </span>

                <span
                  className="w-10 h-[1px]"
                  style={{
                    background: "#FFFFFF80",
                  }}
                />

                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "11px",
                    color: "#FFFFFF",
                    letterSpacing: "0.08em",
                  }}
                >
                  {String(projects.length).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* =====================================
                RIGHT CONTENT
            ====================================== */}
            <div
              className="
                flex-1
                min-w-0
                overflow-y-auto
                no-scrollbar
              "
            >
              <div className="px-7 py-8 md:px-10 md:py-9 lg:px-11">

                {/* Year / Category */}
                <p
                  className="mb-3"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "11px",
                    color: "#718592",
                    letterSpacing: "0.03em",
                  }}
                >
                  {project.year} · {project.category}
                </p>

                {/* Title */}
                <h2
                  style={{
                    fontFamily: "'Unbounded', sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(22px, 3vw, 30px)",
                    lineHeight: 1.25,
                    color: "#0D1A2A",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {project.title}
                </h2>

                {/* Accent */}
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
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "13px",
                    color: "#405766",
                  }}
                >
                  {project.description}
                </p>

                <p
                  className="mt-2 leading-relaxed"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "12px",
                    color: "#718592",
                  }}
                >
                  {project.longDescription}
                </p>

                {/* =================================
                    MY CONTRIBUTION
                ================================== */}
                <div className="mt-6">

                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{
                        background: project.color,
                      }}
                    />

                    <h3
                      style={{
                        fontFamily: "'Unbounded', sans-serif",
                        fontSize: "10px",
                        fontWeight: 700,
                        color: "#0D1A2A",
                      }}
                    >
                      나의 기여도
                    </h3>
                  </div>

                  <div className="flex items-center gap-5">

                    {/* Circle */}
                    <div
                      className="relative w-[82px] h-[82px] shrink-0 rounded-full flex items-center justify-center"
                      style={{
                        background: `conic-gradient(
                          ${project.color} 0% ${project.contribution}%,
                          #EDF2F5 ${project.contribution}% 100%
                        )`,
                      }}
                    >
                      <div
                        className="
                          absolute
                          inset-[7px]
                          rounded-full
                          bg-white
                          flex
                          items-center
                          justify-center
                        "
                      >
                        <span
                          style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "19px",
                            fontWeight: 700,
                            color: "#0D1A2A",
                          }}
                        >
                          {project.contribution}%
                        </span>
                      </div>
                    </div>

                    {/* Role */}
                    <div>
                      <p
                        style={{
                          fontFamily: "'Unbounded', sans-serif",
                          fontSize: "11px",
                          fontWeight: 700,
                          color: "#0D1A2A",
                        }}
                      >
                        {project.role}
                      </p>

                      <p
                        className="mt-1"
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "11px",
                          color: "#718592",
                        }}
                      >
                        프로젝트 내 담당 역할 및 구현 영역
                      </p>
                    </div>
                  </div>
                </div>

                {/* =================================
                    RESPONSIBILITIES
                ================================== */}
                <div className="mt-6">

                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{
                        background: project.color,
                      }}
                    />

                    <h3
                      style={{
                        fontFamily: "'Unbounded', sans-serif",
                        fontSize: "10px",
                        fontWeight: 700,
                        color: "#0D1A2A",
                      }}
                    >
                      담당 영역
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-x-5 gap-y-2">
                    {project.responsibilities.map(
                      (item, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-2"
                        >
                          <span
                            className="mt-[6px] w-1 h-1 rounded-full shrink-0"
                            style={{
                              background:
                                project.color,
                            }}
                          />

                          <p
                            style={{
                              fontFamily:
                                "'DM Sans', sans-serif",
                              fontSize: "11px",
                              lineHeight: 1.5,
                              color: "#405766",
                            }}
                          >
                            {item}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* =================================
                    HIGHLIGHTS
                ================================== */}
                <div className="mt-6">

                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{
                        background: project.color,
                      }}
                    />

                    <h3
                      style={{
                        fontFamily: "'Unbounded', sans-serif",
                        fontSize: "10px",
                        fontWeight: 700,
                        color: "#0D1A2A",
                      }}
                    >
                      핵심 개선 포인트
                    </h3>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {project.highlights.map(
                      (highlight, index) => (
                        <motion.div
                          key={index}
                          initial={{
                            opacity: 0,
                            y: 10,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            delay:
                              0.25 +
                              index * 0.08,
                          }}
                          className="
                            min-h-[72px]
                            p-3
                            rounded-2xl
                            flex
                            items-center
                          "
                          style={{
                            background:
                              `${project.color}0D`,
                            border:
                              `1px solid ${project.color}25`,
                          }}
                        >
                          <p
                            className="leading-snug"
                            style={{
                              fontFamily:
                                "'DM Sans', sans-serif",
                              fontSize: "10px",
                              fontWeight: 600,
                              color: "#243D4A",
                            }}
                          >
                            {highlight}
                          </p>
                        </motion.div>
                      )
                    )}
                  </div>
                </div>

                {/* =================================
                    TECH STACK
                ================================== */}
                <div className="mt-6">

                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{
                        background: project.color,
                      }}
                    />

                    <h3
                      style={{
                        fontFamily: "'Unbounded', sans-serif",
                        fontSize: "10px",
                        fontWeight: 700,
                        color: "#0D1A2A",
                      }}
                    >
                      사용 기술
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
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
                          border:
                            "1px solid #2AB8DC30",
                          fontFamily:
                            "'DM Sans', sans-serif",
                          fontSize: "10px",
                          fontWeight: 600,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* =================================
                    LINKS
                ================================== */}
                <div className="flex gap-2.5 mt-7 pb-2">

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      items-center
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
                      fontFamily:
                        "'Unbounded', sans-serif",
                      fontSize: "10px",
                      fontWeight: 600,
                    }}
                  >
                    <ExternalLink size={13} />
                    LIVE
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      items-center
                      gap-2
                      px-6
                      py-3
                      rounded-full
                      transition-all
                      duration-300
                      hover:bg-slate-50
                    "
                    style={{
                      border:
                        `1.5px solid ${project.color}60`,
                      color: "#0D1A2A",
                      fontFamily:
                        "'Unbounded', sans-serif",
                      fontSize: "10px",
                      fontWeight: 600,
                    }}
                  >
                    <Github size={13} />
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