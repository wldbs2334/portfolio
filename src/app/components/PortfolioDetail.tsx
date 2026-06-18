import { useParams, useNavigate } from "react-router";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";

export const projects = [
  {
    id: "1",
    title: "NEON STORE",
    category: "E-Commerce",
    year: "2024",
    description:
      "패션 브랜드 공식 온라인 쇼핑몰 퍼블리싱. 반응형 레이아웃과 스무스한 인터랙션으로 모바일·데스크탑 완벽 대응. 크로스브라우저 QA까지 담당했습니다.",
    longDescription:
      "HTML5, CSS3(Sass), jQuery를 활용해 디자인 시안을 100% 픽셀 퍼펙트로 구현했습니다. 모바일 퍼스트 반응형 설계와 웹 접근성(WCAG 2.1 AA) 기준을 충족했으며, IE11~최신 브라우저 전 범위 크로스브라우저 대응을 완료했습니다.",
    tech: ["HTML5", "Sass/SCSS", "jQuery", "Figma", "Zeplin"],
    color: "#9AE3F7",
    accent: "#FDE991",
    image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=1200&h=700&fit=crop&auto=format",
    github: "https://github.com",
    live: "https://example.com",
    highlights: ["픽셀 퍼펙트 구현", "크로스브라우저 완벽 대응", "WCAG 2.1 AA 준수"],
  },
  {
    id: "2",
    title: "MINDFLOW",
    category: "Landing Page",
    year: "2024",
    description:
      "SaaS 서비스 랜딩 페이지 퍼블리싱. 스크롤 애니메이션과 인터랙티브 요소로 전환율을 높이는 랜딩 페이지를 구현했습니다.",
    longDescription:
      "CSS 애니메이션과 Intersection Observer API를 활용한 스크롤 인터랙션 구현, SVG 아이콘 최적화, 이미지 레이지 로딩, Core Web Vitals 점수 최적화(LCP 90점 이상)까지 성능 개선을 담당했습니다.",
    tech: ["HTML5", "CSS3", "JavaScript", "GSAP", "Webpack"],
    color: "#FDE991",
    accent: "#2AB8DC",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=700&fit=crop&auto=format",
    github: "https://github.com",
    live: "https://example.com",
    highlights: ["Core Web Vitals LCP 90+", "스크롤 인터랙션 구현", "SVG 최적화"],
  },
  {
    id: "3",
    title: "DATAVIZ PRO",
    category: "Admin Dashboard",
    year: "2023",
    description:
      "기업용 관리자 대시보드 UI 마크업. 복잡한 테이블·차트 레이아웃을 시맨틱하고 접근성 높게 구현했습니다.",
    longDescription:
      "Figma 시안을 기반으로 반응형 그리드 시스템, 다크/라이트 테마 전환, 복잡한 테이블 UI의 시맨틱 마크업을 담당했습니다. React 컴포넌트 기반으로 Storybook을 활용해 UI 컴포넌트를 문서화했습니다.",
    tech: ["HTML5", "Sass", "React", "Storybook", "Figma"],
    color: "#2AB8DC",
    accent: "#FDE991",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=700&fit=crop&auto=format",
    github: "https://github.com",
    live: "https://example.com",
    highlights: ["다크/라이트 테마 전환", "Storybook 컴포넌트 문서화", "반응형 그리드 설계"],
  },
];

export function PortfolioDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#F7FBFE" }}>
        <div className="text-center">
          <p style={{ color: "#5A7A8A" }} className="mb-4">프로젝트를 찾을 수 없습니다.</p>
          <button onClick={() => navigate("/")} style={{ color: "#2AB8DC" }} className="underline">
            돌아가기
          </button>
        </div>
      </div>
    );
  }

  const idx = projects.findIndex((p) => p.id === id);

  return (
    <div className="min-h-screen" style={{ fontFamily: "'DM Sans', sans-serif", background: "#F7FBFE" }}>
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
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background = "#2AB8DC";
          (e.currentTarget as HTMLElement).style.color = "#FFFFFF";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = "#FFFFFFCC";
          (e.currentTarget as HTMLElement).style.color = "#0D1A2A";
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
        {/* Left — image */}
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
            style={{ minHeight: "50vh" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(135deg, ${project.color}30, transparent 60%)` }}
          />
          {/* Category pill on image */}
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

        {/* Right — content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col justify-center px-16 py-24"
          style={{ background: "#FFFFFF" }}
        >
          <p
            className="mb-3"
            style={{ fontFamily: "'Unbounded', sans-serif", fontSize: "10px", color: "#5A7A8A", letterSpacing: "0.2em" }}
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

          {/* Color bar */}
          <div className="w-16 h-1.5 rounded-full mt-6 mb-6" style={{ background: project.color }} />

          <p className="text-lg leading-relaxed mb-8" style={{ color: "#2A4A5A" }}>
            {project.description}
          </p>
          <p className="text-sm leading-relaxed mb-10" style={{ color: "#5A7A8A" }}>
            {project.longDescription}
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-3 gap-3 mb-10">
            {project.highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="p-3 rounded-2xl text-center"
                style={{ background: project.color + "18", border: `1.5px solid ${project.color}35` }}
              >
                <p className="text-xs font-semibold leading-snug" style={{ color: "#0D1A2A" }}>{h}</p>
              </motion.div>
            ))}
          </div>

          {/* Tech stack */}
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

          {/* Links */}
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
