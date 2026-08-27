export type Projects = {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  longDescription: string;
  tech: string[];
  color: string;
  accent: string;
  image: string;
  imagePosition?: string;
  github: string;
  live: string;
  highlights: string[];
  contribution: number;
  role: string;
  responsibilities: string[];
};

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

    tech: ["HTML5", "CSS3", "JavaScript", "React", "Figma", "Git/GitHub"],

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

    tech: ["Next.js", "TypeScript", "React", "TMDB API", "CSS", "Figma"],

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
] as const;

export type Project = (typeof projects)[number];