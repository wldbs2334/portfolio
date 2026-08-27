import { projects, type Project } from "../../data/projects";
import { Geo } from "../components/Geo";
import { ProjectCard } from "../components/ProjectCard";
import { Section } from "../components/Section";

type PortfolioSectionProps = {
  onOpenProject: (project: Project) => void;
};

export function PortfolioSection({ onOpenProject }: PortfolioSectionProps) {
  return (
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
            <ProjectCard key={project.id} project={project} index={i} onOpen={onOpenProject} />
          ))}
        </div>
      </div>
    </Section>
  );
}
