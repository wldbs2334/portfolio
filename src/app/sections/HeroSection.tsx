import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { Geo } from "../components/Geo";
import { Section } from "../components/Section";

type HeroSectionProps = {
  onNavigate: (sectionIndex: number) => void;
};

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
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
            onClick={() => onNavigate(2)}
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
            onClick={() => onNavigate(3)}
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
        onClick={() => onNavigate(1)}
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
  );
}
