import { useParams, useNavigate } from "react-router";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";

export const projects = [
  {
    id: "1",
    title: "primevideo 퍼블리싱",
    category: "Landing Page",
    year: "2026",

    description:
      "OTT 사이트 prime video 퍼블리싱. 반응형 레이아웃과 스무스한 인터랙션으로 모바일·데스크탑 대응.",

    longDescription:
      "HTML5, CSS3를 활용해 디자인 시안을 기반으로 웹 페이지를 구현하고, 다양한 화면 크기에서도 자연스럽게 보이도록 반응형 레이아웃을 구성했습니다.",

    tech: ["HTML5", "CSS3", "Figma"],

    color: "#9AE3F7",
    accent: "#FDE991",

    image: "/images/primevideo.png",
    imagePosition: "top",

    github: "https://github.com",
    live: "https://ott-primevideo.netlify.app/",

    highlights: [
      "픽셀 퍼펙트 구현",
      "반응형 레이아웃 구현",
      "크로스브라우저 대응",
    ],

    // 모달용 정보
    contribution: 100,

    role: "UI 구성 및 웹 퍼블리싱",

    responsibilities: [
      "Figma 디자인 시안 기반 UI 구현",
      "HTML5 시맨틱 마크업",
      "CSS3를 활용한 반응형 레이아웃 구현",
      "모바일·데스크탑 화면 대응",
    ],
  },

  {
    id: "2",
    title: "CASETiFY 리뉴얼",
    category: "E-Commerce",
    year: "2026",

    description:
      "CASETiFY의 상품 탐색 및 구매 경험을 개선하기 위한 UX/UI 리뉴얼 프로젝트입니다.",

    longDescription:
      "사용자가 원하는 상품을 빠르게 탐색할 수 있도록 카테고리와 필터 구조를 개선하고, 주요 구매 정보를 직관적으로 확인할 수 있도록 UI를 재구성했습니다.",

    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Figma",
      "Git/GitHub",
    ],

    color: "#FDE991",
    accent: "#2AB8DC",

    image: "/images/casetify.png",
    imagePosition: "top",

    github: "https://github.com/wldbs2334/CASETiFY",
    live: "https://jiyoon-casetify.netlify.app/",

    highlights: [
      "상품 탐색 단계 간소화",
      "필터 및 카테고리 UX 개선",
      "구매 정보 접근성 강화",
    ],

    // 모달용 정보
    contribution: 70,

    role: "UI 구성 및 퍼블리싱 담당",

    responsibilities: [
      "메인·카테고리·상품 상세 페이지 퍼블리싱",
      "장바구니 및 결제 페이지 UI 구현",
      "반응형 레이아웃 및 모바일 최적화",
      "JavaScript를 활용한 인터랙션 구현",
      "접근성 및 크로스 브라우징 대응",
    ],
  },

  {
    id: "3",
    title: "NETFLIX 리뉴얼",
    category: "OTT",
    year: "2026",

    description:
      "Netflix의 콘텐츠 탐색과 사용자 경험을 중심으로 구성한 OTT 리뉴얼 프로젝트입니다.",

    longDescription:
      "Next.js와 TypeScript를 활용해 TMDB API 기반의 영화·드라마 콘텐츠를 구현하고, 스트리밍·커뮤니티·마이페이지·구독 UI 등 OTT 서비스의 주요 화면을 구성했습니다.",

    tech: [
      "Next.js",
      "TypeScript",
      "React",
      "TMDB API",
      "CSS",
      "Figma",
    ],

    color: "#2AB8DC",
    accent: "#FDE991",

    image: "/images/netflix.png",
    imagePosition: "top",

    github: "https://github.com",
    live: "https://neo-flix-jy.netlify.app/",

    highlights: [
      "TMDB API 콘텐츠 구현",
      "반응형 OTT UI 구성",
      "React 컴포넌트 기반 개발",
    ],

    // 모달용 정보
    contribution: 70,

    role: "UI 구성 및 프론트엔드 구현",

    responsibilities: [
      "OTT 메인 및 콘텐츠 탐색 UI 구현",
      "TMDB API를 활용한 콘텐츠 데이터 연동",
      "React 컴포넌트 기반 UI 구성",
      "반응형 레이아웃 구현",
      "마이페이지 및 커뮤니티 UI 구현",
    ],
  },
];

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