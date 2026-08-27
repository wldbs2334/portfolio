import { useEffect, useRef, useState } from "react";
import { projects } from "../data/projects";
import { NavDots } from "./components/NavDots";
import { ProjectModal } from "./components/ProjectModal";
import { ContactSection } from "./sections/ContactSection";
import { HeroSection } from "./sections/HeroSection";
import { PortfolioSection } from "./sections/PortfolioSection";
import { SkillsSection } from "./sections/SkillsSection";

export function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);

  // 스크롤 애니메이션 진행 중 여부 (휠 이벤트 디바운스용)
  const isAnimating = useRef(false);
  const animTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // 트랙패드 관성 스크롤이 끝날 때까지 추가 휠 입력을 막기 위한 잠금
  const wheelCooldown = useRef(false);
  const wheelEndTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sections = container.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Array.from(sections).indexOf(entry.target as HTMLElement);

            if (idx >= 0) {
              setActiveSection((prev) => (prev === idx ? prev : idx));
            }
          }
        });
      },
      { root: container, threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollTo = (i: number) => {
    const container = containerRef.current;
    if (!container) return;

    const sections = container.querySelectorAll("section");
    if (i < 0 || i >= sections.length) return;

    isAnimating.current = true;
    sections[i]?.scrollIntoView({ behavior: "smooth" });

    if (animTimeout.current) clearTimeout(animTimeout.current);

    animTimeout.current = setTimeout(() => {
      isAnimating.current = false;
    }, 800);
  };

  // 휠 스크롤을 네비게이션 클릭과 동일한 방식(섹션 단위 이동)으로 처리
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      // 휠 이벤트가 들어올 때마다 "제스처 종료 감지" 타이머를 리셋
      // 관성 스크롤이 계속되는 동안은 잠금이 풀리지 않음
      if (wheelEndTimer.current) clearTimeout(wheelEndTimer.current);

      wheelEndTimer.current = setTimeout(() => {
        wheelCooldown.current = false;
      }, 150);

      if (isAnimating.current || wheelCooldown.current) return;

      wheelCooldown.current = true;

      const next = e.deltaY > 0
        ? activeSection + 1
        : activeSection - 1;

      scrollTo(next);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [activeSection]);

  return (
    <div className="relative w-full h-screen">
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <NavDots
        active={activeSection}
        total={4}
        onDotClick={scrollTo}
      />

      <div
        ref={containerRef}
        className="w-full h-full overflow-y-hidden no-scrollbar"
      >
        <HeroSection onNavigate={scrollTo} />
        <SkillsSection />
        <PortfolioSection onOpenProject={setSelectedProject} />
        <ContactSection />
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
