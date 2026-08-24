# 기존 폴더 구조에 맞춘 HomePage 분리본

네가 보여준 VS Code 구조를 기준으로 만들었습니다.

기존:
src/
└── app/
    └── components/
        ├── figma/
        ├── ui/
        ├── HomePage.tsx
        └── PortfolioDetail.tsx

분리 후:
src/
└── app/
    ├── components/
    │   ├── figma/              ← 기존 그대로
    │   ├── ui/                 ← 기존 그대로
    │   ├── HomePage.tsx        ← 교체
    │   ├── PortfolioDetail.tsx  ← 기존 그대로
    │   ├── Geo.tsx
    │   ├── Section.tsx
    │   ├── NavDots.tsx
    │   ├── ProjectCard.tsx
    │   └── ProjectModal.tsx
    │
    └── sections/
        ├── HeroSection.tsx
        ├── SkillsSection.tsx
        ├── PortfolioSection.tsx
        └── ContactSection.tsx

중요:
- 기존 PortfolioDetail.tsx는 삭제/교체하지 않습니다.
- 기존 figma/, ui/ 폴더도 건드리지 않습니다.
- HomePage.tsx는 기존 `src/app/components/HomePage.tsx` 위치를 유지합니다.
- Contact의 formData/sent 상태는 ContactSection으로 이동했습니다.
- 프로젝트 선택 상태(selectedProject)는 HomePage에 남겨두고 PortfolioSection/ProjectModal에 props로 전달합니다.
- 스크롤 및 섹션 감지 로직은 HomePage에 남겨두었습니다.
