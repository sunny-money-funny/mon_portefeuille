// data/projects.ts

import { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "polexible",
    title: "Polexible",
    subtitle: "중립적 문서 작성 보조 플랫폼 (한컴 AI 아카데미)",
    githubUrl: "https://github.com/Media-Parser/front",
    content: [
      {
        type: "headline",
        data: "중립적이면서도 boring 하지 않은 UI를 만들어라!",
      },
      {
        type: "image",
        data: {
          src: "/images/polexible_01.png",
          alt: "Polexible 로고 디자인1",
          width: 100,
        },
      },
      {
        type: "image",
        data: {
          src: "/images/polexible_02.png",
          alt: "Polexible 로고 디자인2",
          width: 200,
        },
      },
      {
        type: "list",
        data: [
          "브랜드 아이덴티티에 맞춘 색상 및 로고 디자인: 중립적인 서비스 성격을 고려해 회색·검정·흰색을 메인 컬러로 설정하고, 곡선형 서체로 부드러운 로고를 디자인했습니다.",
        ],
      },
      {
        type: "image",
        data: {
          src: "/images/polexible_03.png",
          alt: "문서 대시보드",
          width: 300,
        },
      },
      {
        type: "image",
        data: {
          src: "/images/polexible_04.png",
          alt: "문서 편집 및 챗봇 화면",
          width: 300,
        },
      },
      {
        type: "list",
        data: [
          "사용자 친화적인 UI 플로우 구성: 기존 플랫폼들을 분석해 직관적인 화면 구성을 설계하고, 문서 업로드 시 자동 전환되도록 UX를 최적화했습니다.",
          "페이지 전환 및 인증 상태 유지 설계: React Router로 라우팅을 구조화하고, Zustand와 localStorage를 활용해 인증 상태를 유지하도록 구현했습니다.",
        ],
      },
      {
        type: "about",
        data: {
          duration: "2025.06.05~2025.07.24",
          goal: "사용자가 중립적인 문서를 작성할 수 있도록 보조하는 AI 기반 플랫폼 UI/UX 설계 및 개발",
          stack: "Notion, Figma / React, Typescript",
          contribution:
            "기획(30%), 디자인(90%), 프론트(50%), AI 라벨링(30%) (6인)",
        },
      },
      {
        type: "whatIDid",
        data: [
          "사용자 흐름에 맞춘 UI/UX 설계 및 인터랙션 구성",
          "인증 유지, 라우팅 등 핵심 기능 구현과 상태 관리",
          "AI 챗봇 기능 개발 및 자체 RAG 모델 라벨링 주도",
        ],
      },
      {
        type: "whatILearned",
        data: "기획과 개발을 넘나들며 UI 흐름을 유기적으로 연결하는 경험을 했습니다. 사용자 맥락을 고려해 화면을 구성하고, UX 개선을 위한 기술적 접근을 병행하며 단순한 기능 구현을 넘어 사용 경험 중심의 사고방식을 익혔습니다. 또한 직접적인 AI 구현 파트는 아니었지만, AI 기반 기능의 이해를 돕기 위해 라벨링을 주도해 참여하고 관련 지식을 따로 학습하며 협업의 폭을 넓혔습니다.",
      },
    ],
  },
  {
    id: "roomo",
    title: "Roomo",
    subtitle:
      "멀티에이전트 시스템을 활용한 AI 기반 공간대여 및 추천 플랫폼 (서강대융합기술경진대회)",
    githubUrl: "https://github.com/sunny-money-funny/Roomo_Front",
    content: [
      {
        type: "headline",
        data: "공간 제공자와 대여자 모두의 니즈를 고려하라!",
      },
      {
        type: "image",
        data: {
          src: "/images/roomo_01.png",
          alt: "공간 제공자 에이전트 대화 화면",
          width: 300,
        },
      },
      {
        type: "image",
        data: {
          src: "/images/roomo_02.png",
          alt: "공간 대여자 예약 히스토리 화면",
          width: 300,
        },
      },
      {
        type: "list",
        data: [
          "두 사용자 역할을 고려한 UI/UX 설계: 공간 대여자와 제공자의 니즈를 반영해 직관적인 화면 구성을 설계하고, 역할 전환 시 혼란을 최소화했습니다.",
          "AI 기반 추천 및 예약 기능과 연동된 사용자 친화적 인터페이스: LLM 멀티 에이전트 시스템과 연동되는 대화형 UI를 구현하여 사용자 요청과 AI 응답이 원활히 연결되도록 설계했습니다.",
          "효율적인 상태 관리와 비동기 데이터 처리: React의 useState와 useEffect를 활용해 API 호출과 상태 관리를 체계적으로 구현했습니다.",
          "client-side routing을 통해 새로고침 없이 자연스러운 화면 전환 구현",
        ],
      },
      {
        type: "about",
        data: {
          duration: "2024.11.01~2024.12.03",
          goal: "AI 기반 공간 대여 및 추천 플랫폼 Roomo의 프론트엔드 개발",
          stack: "Notion, Figma / React, Next.js, Firebase",
          contribution: "디자인(20%), 프론트(90%) (4인)",
        },
      },
      {
        type: "whatIDid",
        data: [
          "사용자 입력 처리 및 챗봇-에이전트 간 대화 기능 구현",
          "예약 내역 조회, 예약 취소, 리뷰 작성 기능 포함 UI 및 로직 개발",
          "useEffect와 useState를 활용한 API 연동 및 상태 관리",
          "client-side routing을 통해 새로고침 없이 자연스러운 화면 전환 구현",
        ],
      },
      {
        type: "whatILearned",
        data: "처음으로 프론트엔드 개발에 참여한 프로젝트로, React를 활용한 UI 구현과 API 연동을 경험했습니다. 백엔드와 AI 엔지니어들과의 협업을 통해 데이터 흐름과 추천 로직을 이해하게 되었고, 기능이 UI에 자연스럽게 반영되도록 고민하며 설계했습니다. 이를 통해 HTTP 비동기 통신에 대한 이해도를 높였으며, 사용자 흐름과 화면 전환에 대한 설계 감각을 키울 수 있었습니다.",
      },
    ],
  },
];
