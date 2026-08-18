import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ArrowDown, Mail, Github, Linkedin, Send, ExternalLink, X, Lightbulb, MessageCircle, Search, BookOpen, User } from "lucide-react";
import { projects } from "./PortfolioDetail";
import {
  SiHtml5,
  SiCss,
  SiSass,
  SiJavascript,
  SiJquery,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiFigma,
  SiGit,
} from "react-icons/si";

/* ─── Geometric shape decoration ─── */
function Geo({
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

/* ─── Section wrapper ─── */
function Section({
  id,
  children,
  className = "",
  style,
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <section
      id={id}
      className={`relative w-full h-screen overflow-hidden flex-shrink-0 ${className}`}
      style={{ scrollSnapAlign: "start", ...style }}
    >
      {children}
    </section>
  );
}

/* ─── Nav dot indicator ─── */
function NavDots({ active, total, onDotClick }: { active: number; total: number; onDotClick: (i: number) => void }) {
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

/* ─── Skills data ─── */
const skillIcons = [
  { name: "HTML5", Icon: SiHtml5, color: "#E44D26" },
  { name: "CSS3", Icon: SiCss, color: "#2965F1" },
  { name: "Sass/SCSS", Icon: SiSass, color: "#CC6699" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F0DB4F" },
  { name: "jQuery", Icon: SiJquery, color: "#0769AD" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "React.js", Icon: SiReact, color: "#61DAFB" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
  // { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Figma", Icon: SiFigma, color: "#A259FF" },
  { name: "Git", Icon: SiGit, color: "#F1502F" },
];

const softSkills = [
  { title: "문제 해결력", desc: "문제의 원인을 분석하고\n해결책을 찾아 해결합니다.", Icon: Lightbulb },
  { title: "커뮤니케이션", desc: "의견을 명확하게 전달하고\n팀원과 원활히 협업합니다.", Icon: MessageCircle },
  { title: "꼼꼼함 / 디테일", desc: "작은 디테일까지 놓치지 않고\n완성도 높은 결과를 만듭니다.", Icon: Search },
  { title: "학습력 / 자기주도성", desc: "새로운 기술을 빠르게 학습하고\n스스로 성장해 나갑니다.", Icon: BookOpen },
  { title: "사용자 중심 사고", desc: "사용자의 입장에서 생각하고\n더 나은 경험을 고민합니다.", Icon: User },
];

/* ─── Portfolio Row Card ─── */
function ProjectCard({
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

/* ─── Main HomePage ─── */
export function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const sections = container.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Array.from(sections).indexOf(entry.target as HTMLElement);
            if (idx >= 0) setActiveSection(idx);
          }
        });
      },
      { root: container, threshold: 0.5 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (i: number) => {
    const container = containerRef.current;
    if (!container) return;
    const sections = container.querySelectorAll("section");
    sections[i]?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="relative w-full h-screen">
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      <NavDots active={activeSection} total={4} onDotClick={scrollTo} />

      <div
        ref={containerRef}
        className="w-full h-full overflow-y-scroll no-scrollbar"
        style={{ scrollSnapType: "y mandatory", scrollBehavior: "smooth" }}
      >
        {/* ══════════ SECTION 1 — HERO ══════════ */}
        <Section id="hero" style={{ background: "#F7FBFE" }}>
          {/* Decorative blobs */}
          <Geo shape="circle" size={520} color="#9AE3F7" opacity={0.18} className="top-[-120px] right-[-120px]" />
          <Geo shape="circle" size={300} color="#FDE991" opacity={0.22} className="bottom-[-60px] left-[-80px]" />
          <Geo shape="ring" size={220} color="#2AB8DC" opacity={0.18} className="top-24 right-1/4" />
          <Geo shape="circle" size={60} color="#FDE991" opacity={0.7} className="top-1/3 right-1/3" />
          <Geo shape="square" size={70} color="#9AE3F7" opacity={0.25} className="bottom-1/4 right-24" />
          <Geo shape="ring" size={100} color="#FDE991" opacity={0.4} className="top-16 left-1/4" />

          <div className="relative z-10 flex flex-col justify-center h-full px-12 md:px-24 max-w-[1400px] mx-auto w-full">
            {/* Top badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
                style={{
                  border: "1.5px solid #2AB8DC",
                  background: "#2AB8DC18",
                  fontFamily: "'Unbounded', sans-serif",
                  fontSize: "10px",
                  color: "#2AB8DC",
                  letterSpacing: "0.12em",
                }}
              >
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#2AB8DC" }} />
                OPEN TO WORK
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{
                fontFamily: "'Unbounded', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(3.2rem, 8vw, 7.5rem)",
                lineHeight: 1.0,
                color: "#0D1A2A",
              }}
            >
              LEE
              <br />
              <span style={{ color: "#2AB8DC" }}>JI</span>
              <br />
              YOON
            </motion.h1>

            {/* Divider + role */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 mb-8 flex items-center gap-4"
            >
              <div className="w-14 h-1 rounded-full" style={{ background: "#FDE991" }} />
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "#0D1A2A",
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                }}
              >
                웹 퍼블리셔 · UI 마크업 전문가
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="max-w-md text-lg leading-relaxed mb-10"
              style={{ color: "#5A7A8A", fontFamily: "'DM Sans', sans-serif" }}
            >
              픽셀 단위의 정확한 마크업과 부드러운 인터랙션으로 디자인을 웹에 생동감 있게 구현합니다.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 flex-wrap"
            >
              <button
                onClick={() => scrollTo(2)}
                className="px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  background: "#2AB8DC",
                  color: "#FFFFFF",
                  fontFamily: "'Unbounded', sans-serif",
                  fontSize: "12px",
                  boxShadow: "0 4px 20px #2AB8DC40",
                }}
              >
                작업물 보기
              </button>
              <button
                onClick={() => scrollTo(3)}
                className="px-8 py-4 rounded-full border-2 transition-all duration-300 hover:bg-secondary"
                style={{
                  borderColor: "#FDE991",
                  color: "#0D1A2A",
                  fontFamily: "'Unbounded', sans-serif",
                  fontSize: "12px",
                  background: "transparent",
                }}
              >
                연락하기
              </button>
            </motion.div>
          </div>

          {/* Scroll hint */}
          <motion.button
            onClick={() => scrollTo(1)}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            style={{ color: "#2AB8DC80" }}
          >
            <span style={{ fontFamily: "'Unbounded', sans-serif", fontSize: "9px", letterSpacing: "0.25em", color: "#2AB8DC" }}>
              SCROLL
            </span>
            <ArrowDown size={16} color="#2AB8DC" />
          </motion.button>
        </Section>

        {/* ══════════ SECTION 2 — SKILLS ══════════ */}
        <Section id="skills" style={{ background: "#FDE991" }}>
          <Geo shape="circle" size={380} color="#2AB8DC" opacity={0.1} className="top-[-60px] right-[-60px]" />
          <Geo shape="ring" size={180} color="#0D1A2A" opacity={0.07} className="bottom-16 left-20" />
          <Geo shape="square" size={90} color="#9AE3F7" opacity={0.18} className="bottom-24 right-20" />

          <div className="relative z-10 flex flex-col justify-center h-full px-12 md:px-24 max-w-[1400px] mx-auto w-full">
            {/* Header */}
            <div className="flex items-end justify-between mb-10">
              <div>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{ fontFamily: "'Unbounded', sans-serif", fontSize: "10px", color: "#0D1A2A60", letterSpacing: "0.2em" }}
                  className="mb-2"
                >
                  02 / SKILLS
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.08 }}
                  style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 900, fontSize: "clamp(2.2rem, 4vw, 3.8rem)", lineHeight: 1.05, color: "#0D1A2A" }}
                >
                  내가 잘하는 것들
                </motion.h2>
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="hidden md:block text-sm"
                style={{ color: "#0D1A2A70", fontFamily: "'DM Sans', sans-serif" }}
              >
                시맨틱 HTML · 모던 CSS · 픽셀 퍼펙트 마크업
              </motion.p>
            </div>

            {/* Technical skills */}
            <div className="flex items-center gap-2 mb-5">
              <span className="w-4 h-px" style={{ background: "#0D1A2A" }} />
              <span style={{ fontFamily: "'Unbounded', sans-serif", fontSize: "11px", letterSpacing: "0.15em", color: "#0D1A2A" }}>
                TECHNICAL SKILLS
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-10">
              {skillIcons.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="flex flex-col items-center justify-center gap-3 rounded-2xl py-7 px-3"
                  style={{ background: "#FBEEC1", border: "1px solid #EBDFA3" }}
                >
                  <skill.Icon size={32} color={skill.color} />
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#0D1A2A" }}>
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Soft skills */}
            <div className="flex items-center gap-2 mb-5">
              <span className="w-4 h-px" style={{ background: "#0D1A2A" }} />
              <span style={{ fontFamily: "'Unbounded', sans-serif", fontSize: "11px", letterSpacing: "0.15em", color: "#0D1A2A" }}>
                SOFT SKILLS
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
              {softSkills.map((skill, i) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex flex-col items-center text-center gap-3 rounded-2xl py-8 px-4"
                  style={{ background: "#FBEEC1", border: "1px solid #EBDFA3" }}
                >
                  <skill.Icon size={26} color="#3F8F3F" />
                  <span style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: "15px", color: "#0D1A2A" }}>
                    {skill.title}
                  </span>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "#5A5433", lineHeight: 1.6, whiteSpace: "pre-line" }}>
                    {skill.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* ══════════ SECTION 3 — PORTFOLIO ══════════ */}
        <Section id="portfolio" style={{ background: "#F7FBFE" }}>
          {/* Accent blob */}
          <Geo shape="circle" size={440} color="#9AE3F7" opacity={0.12} className="top-[-100px] right-[-100px]" />
          <Geo shape="square" size={80} color="#FDE991" opacity={0.25} className="bottom-20 left-20" />

          <div className="relative z-10 h-full flex flex-col justify-center px-12 md:px-24 max-w-[1400px] mx-auto w-full gap-0">
            {/* Header row */}
            <div className="flex items-end justify-between mb-10">
              <div>
                <p style={{ fontFamily: "'Unbounded', sans-serif", fontSize: "10px", color: "#2AB8DC", letterSpacing: "0.22em" }} className="mb-2">
                  03 / PORTFOLIO
                </p>
                <h2 style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 4.5vw, 3.8rem)", lineHeight: 1.05, color: "#0D1A2A" }}>
                  작업물
                </h2>
              </div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#5A7A8A", fontSize: "13px" }} className="hidden md:block">
                카드 클릭 → 상세 보기
              </p>
            </div>

            {/* Cards — stacked rows */}
            <div className="flex flex-col gap-5">
              {projects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} onOpen={setSelectedProject} />
              ))}
            </div>
          </div>
        </Section>

        {/* ══════════ SECTION 4 — CONTACT ══════════ */}
        <Section id="contact" style={{ background: "#F7FBFE" }}>
          <Geo shape="circle" size={500} color="#9AE3F7" opacity={0.2} className="bottom-[-150px] right-[-150px]" />
          <Geo shape="circle" size={280} color="#FDE991" opacity={0.35} className="top-[-80px] left-[-80px]" />
          <Geo shape="ring" size={200} color="#2AB8DC" opacity={0.15} className="top-20 right-1/3" />
          <Geo shape="square" size={70} color="#FDE991" opacity={0.3} className="bottom-1/3 left-1/3" />

          <div className="relative z-10 flex flex-col justify-center h-full px-12 md:px-24 max-w-[1400px] mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              {/* Left */}
              <div>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{ fontFamily: "'Unbounded', sans-serif", fontSize: "10px", color: "#2AB8DC", letterSpacing: "0.2em" }}
                  className="mb-3"
                >
                  04 / CONTACT
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  style={{
                    fontFamily: "'Unbounded', sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                    lineHeight: 1.1,
                    color: "#0D1A2A",
                  }}
                >
                  함께
                  <br />
                  <span style={{ color: "#2AB8DC" }}>일해요</span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 }}
                  className="mt-5 text-base leading-relaxed"
                  style={{ color: "#5A7A8A", fontFamily: "'DM Sans', sans-serif" }}
                >
                  새로운 프로젝트, 콜라보, 또는 그냥 안녕이라도 — 언제든 환영합니다.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 }}
                  className="mt-8 flex flex-col gap-4"
                >
                  {[
                    { icon: <Mail size={17} />, label: "hello@leejiyoon.dev" },
                    { icon: <Github size={17} />, label: "github.com/leejiyoon" },
                    { icon: <Linkedin size={17} />, label: "linkedin.com/in/leejiyoon" },
                  ].map(({ icon, label }) => (
                    <div key={label} className="flex items-center gap-3 cursor-pointer group">
                      <span
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{ background: "#2AB8DC20", color: "#2AB8DC", border: "1.5px solid #2AB8DC40" }}
                      >
                        {icon}
                      </span>
                      <span
                        className="group-hover:text-primary transition-colors duration-300"
                        style={{ fontFamily: "'DM Sans', sans-serif", color: "#5A7A8A" }}
                      >
                        {label}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Right — form */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                {sent ? (
                  <div
                    className="flex flex-col items-center justify-center h-72 rounded-3xl text-center"
                    style={{ background: "#2AB8DC12", border: "1.5px solid #2AB8DC30" }}
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                      style={{ background: "#2AB8DC" }}
                    >
                      <Send size={24} color="#FFFFFF" />
                    </div>
                    <p style={{ fontFamily: "'Unbounded', sans-serif", color: "#2AB8DC", fontSize: "16px", fontWeight: 700 }}>
                      메시지 전송 완료!
                    </p>
                    <p className="mt-2" style={{ color: "#5A7A8A", fontFamily: "'DM Sans', sans-serif" }}>
                      곧 연락드리겠습니다.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSend} className="flex flex-col gap-4">
                    {[
                      { key: "name", placeholder: "이름", type: "text" },
                      { key: "email", placeholder: "이메일", type: "email" },
                    ].map(({ key, placeholder, type }) => (
                      <input
                        key={key}
                        type={type}
                        placeholder={placeholder}
                        required
                        value={formData[key as keyof typeof formData]}
                        onChange={(e) => setFormData((prev) => ({ ...prev, [key]: e.target.value }))}
                        className="w-full px-5 py-4 rounded-2xl outline-none transition-all duration-300"
                        style={{
                          background: "#FFFFFF",
                          border: "1.5px solid #2AB8DC25",
                          color: "#0D1A2A",
                          fontFamily: "'DM Sans', sans-serif",
                          boxShadow: "0 2px 8px rgba(42,184,220,0.06)",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "#2AB8DC")}
                        onBlur={(e) => (e.target.style.borderColor = "#2AB8DC25")}
                      />
                    ))}
                    <textarea
                      placeholder="메시지"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                      className="w-full px-5 py-4 rounded-2xl outline-none resize-none transition-all duration-300"
                      style={{
                        background: "#FFFFFF",
                        border: "1.5px solid #2AB8DC25",
                        color: "#0D1A2A",
                        fontFamily: "'DM Sans', sans-serif",
                        boxShadow: "0 2px 8px rgba(42,184,220,0.06)",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#2AB8DC")}
                      onBlur={(e) => (e.target.style.borderColor = "#2AB8DC25")}
                    />
                    <button
                      type="submit"
                      className="w-full py-4 rounded-full flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02]"
                      style={{
                        background: "#2AB8DC",
                        color: "#FFFFFF",
                        fontFamily: "'Unbounded', sans-serif",
                        fontSize: "12px",
                        boxShadow: "0 4px 20px #2AB8DC35",
                      }}
                    >
                      <Send size={15} />
                      메시지 보내기
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>

          {/* Footer */}
          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center"
            style={{ fontFamily: "'Unbounded', sans-serif", fontSize: "9px", color: "#0D1A2A40", letterSpacing: "0.2em" }}
          >
            © 2024 LEE JI YOON · WEB PUBLISHER
          </div>
        </Section>
      </div>

      {/* ══════════ PROJECT MODAL ══════════ */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6"
            style={{ background: "rgba(13,26,42,0.65)", backdropFilter: "blur(6px)" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl rounded-3xl overflow-hidden"
              style={{ background: "#FFFFFF", boxShadow: "0 24px 80px rgba(13,26,42,0.35)" }}
            >
              {/* Close button — always visible, outside scroll area */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                style={{ background: "#FFFFFFE0", color: "#0D1A2A" }}
              >
                <X size={18} />
              </button>

              {/* Scrollable content */}
              <div className="max-h-[85vh] overflow-y-auto no-scrollbar">
                {/* Image */}
                <div className="relative w-full h-64">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="px-3 py-1 rounded-full"
                      style={{
                        background: selectedProject.color + "22",
                        color: selectedProject.color,
                        fontFamily: "'Unbounded', sans-serif",
                        fontSize: "10px",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {selectedProject.category}
                    </span>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "#5A7A8A" }}>
                      {selectedProject.year}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Unbounded', sans-serif",
                      fontWeight: 800,
                      fontSize: "28px",
                      color: "#0D1A2A",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {selectedProject.title}
                  </h3>

                  {/* Color bar */}
                  <div className="w-14 h-1.5 rounded-full mt-5 mb-5" style={{ background: selectedProject.color }} />

                  <p
                    className="leading-relaxed"
                    style={{ color: "#2A4A5A", fontFamily: "'DM Sans', sans-serif", fontSize: "15px" }}
                  >
                    {selectedProject.description}
                  </p>
                  <p
                    className="mt-3 leading-relaxed"
                    style={{ color: "#5A7A8A", fontFamily: "'DM Sans', sans-serif", fontSize: "13px" }}
                  >
                    {selectedProject.longDescription}
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-3 gap-3 mt-7">
                    {selectedProject.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-2xl text-center"
                        style={{ background: selectedProject.color + "18", border: `1.5px solid ${selectedProject.color}35` }}
                      >
                        <p className="text-xs font-semibold leading-snug" style={{ color: "#0D1A2A" }}>{h}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {selectedProject.tech.map((t) => (
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
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-full text-sm transition-all duration-300 hover:scale-105"
                      style={{
                        background: selectedProject.color,
                        color: "#0D1A2A",
                        fontFamily: "'Unbounded', sans-serif",
                        fontSize: "11px",
                      }}
                    >
                      <ExternalLink size={14} />
                      LIVE
                    </a>
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-full text-sm transition-all duration-300"
                      style={{
                        border: `1.5px solid ${selectedProject.color}60`,
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
    </div>
  );
}