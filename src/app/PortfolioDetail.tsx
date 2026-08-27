import { useParams, useNavigate } from "react-router";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";
import { projects } from "../data/projects";

export function PortfolioDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: "#F7FBFE" }}
      >
        <div className="text-center">
          <p
            style={{ color: "#5A7A8A" }}
            className="mb-4"
          >
            프로젝트를 찾을 수 없습니다.
          </p>

          <button
            onClick={() => navigate("/")}
            style={{ color: "#2AB8DC" }}
            className="underline"
          >
            돌아가기
          </button>
        </div>
      </div>
    );
  }

  const idx = projects.findIndex((p) => p.id === id);

  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "'DM Sans', sans-serif",
        background: "#F7FBFE",
      }}
    >
      {/* Back */}
      <motion.button
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        onClick={() => navigate("/")}
        className="fixed top-8 left-8 z-50 flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300"
        style={{
          border: "1.5px solid #2AB8DC50",
          color: "#0D1A2A",
          background: "#FFFFFFCC",
          backdropFilter: "blur(8px)",
          fontFamily: "'Unbounded', sans-serif",
          fontSize: "11px",
        }}
      >
        <ArrowLeft size={14} />
        BACK
      </motion.button>

      {/* Number stamp */}
      <div
        className="fixed bottom-8 right-12 z-40 select-none"
        style={{
          fontFamily: "'Unbounded', sans-serif",
          fontWeight: 900,
          fontSize: "120px",
          color: project.color,
          opacity: 0.07,
          lineHeight: 1,
        }}
      >
        0{idx + 1}
      </div>

      {/* Hero split layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden"
          style={{ minHeight: "50vh" }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            style={{
              minHeight: "50vh",
              objectPosition: project.imagePosition ?? "center",
            }}
          />

          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${project.color}30, transparent 60%)`,
            }}
          />

          <div className="absolute top-24 left-8">
            <span
              className="px-4 py-2 rounded-full text-sm"
              style={{
                background: project.color,
                color: "#0D1A2A",
                fontFamily: "'Unbounded', sans-serif",
                fontSize: "10px",
                letterSpacing: "0.1em",
              }}
            >
              {project.category}
            </span>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col justify-center px-16 py-24"
          style={{ background: "#FFFFFF" }}
        >
          <p
            className="mb-3"
            style={{
              fontFamily: "'Unbounded', sans-serif",
              fontSize: "10px",
              color: "#5A7A8A",
              letterSpacing: "0.2em",
            }}
          >
            {project.year} · {project.category}
          </p>

          <h1
            style={{
              fontFamily: "'Unbounded', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              lineHeight: 1.05,
              color: "#0D1A2A",
            }}
          >
            {project.title}
          </h1>

          <div
            className="w-16 h-1.5 rounded-full mt-6 mb-6"
            style={{ background: project.color }}
          />

          <p
            className="text-lg leading-relaxed mb-8"
            style={{ color: "#2A4A5A" }}
          >
            {project.description}
          </p>

          <p
            className="text-sm leading-relaxed mb-10"
            style={{ color: "#5A7A8A" }}
          >
            {project.longDescription}
          </p>

          <div className="grid grid-cols-3 gap-3 mb-10">
            {project.highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
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
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
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

          <div className="flex gap-3">
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
        </motion.div>
      </div>
    </div>
  );
}