import { motion } from "motion/react";
import {
  SiHtml5,
  SiCss,
  SiSass,
  SiJavascript,
  SiJquery,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiFigma,
  SiGit,
} from "react-icons/si";
import {
  Lightbulb,
  MessageCircle,
  Search,
  BookOpen,
  User,
} from "lucide-react";
import { Geo } from "../components/Geo";
import { Section } from "../components/Section";

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

export function SkillsSection() {
  return (
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
  );
}
