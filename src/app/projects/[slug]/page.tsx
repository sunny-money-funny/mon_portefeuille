// src/app/projects/[slug]/page.tsx

import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";

// 이 코드는 TypeScript 환경에서 잘 작동하도록 작성되었습니다.
// 프로젝트 상세 데이터를 객체로 정의합니다.
interface ProjectData {
  title: string;
  subtitle: string;
  overview: {
    duration: string;
    goal: string;
    stack: string;
    contribution: string;
  };
  whatIDid: string[];
  whatILearned: string;
}

const allProjectData: { [key: string]: ProjectData } = {
  polexible: {
    title: "Polexible",
    subtitle: "AI 기반 문서 편집 보조 플랫폼",
    overview: {
      duration: "2025.06.05 ~ 2025.07.24",
      goal: "사용자가 중립적인 문서를 작성할 수 있도록 보조하는 AI 기반 플랫폼 UI/UX 설계 및 개발",
      stack: "Notion, Figma / React, Typescript",
      contribution: "기획(30%), 디자인(90%), 프론트(50%), AI 라벨링(30%) (6인)",
    },
    whatIDid: [
      "사용자 흐름에 맞춘 UI/UX 설계 및 인터랙션 구성",
      "인증 유지, 라우팅 등 핵심 기능 구현과 상태 관리",
      "AI 챗봇 기능 개발 및 자체 RAG 모델 라벨링 주도",
    ],
    whatILearned: `기획과 개발을 넘나들며 UI 흐름을 유기적으로 연결하는 경험을 했습니다. 사용자 맥락을 고려해 화면을 구성하고, UX 개선을 위한 기술적 접근을 병행하며 단순한 기능 구현을 넘어 사용 경험 중심의 사고방식을 익혔습니다. 또한 직접적인 AI 구현 파트는 아니었지만, AI 기반 기능의 이해를 돕기 위해 라벨링을 주도해 참여하고 관련 지식을 따로 학습하며 협업의 폭을 넓혔습니다.`,
  },
  roomo: {
    title: "Roomo",
    subtitle: "AI 기반 공간 대여 및 추천 플랫폼",
    overview: {
      duration: "2025.01.10 ~ 2025.02.25",
      goal: "개인 취향과 선호도를 분석하여 맞춤형 공간 대여를 추천하는 서비스 개발",
      stack: "Figma, Miro / React, Next.js, Firebase",
      contribution: "기획(40%), 디자인(60%), 프론트엔드(80%) (4인)",
    },
    whatIDid: [
      "사용자 리서치를 통한 페르소나 및 핵심 기능 정의",
      "Firebase 기반 데이터베이스 구축 및 실시간 데이터 연동",
      "사용자 취향 기반의 AI 추천 알고리즘 연동 및 UI 구현",
      "지도 API를 활용한 위치 기반 검색 및 예약 기능 개발",
    ],
    whatILearned: `Next.js의 서버 컴포넌트와 클라이언트 컴포넌트의 개념을 명확히 이해하고, 각 기능에 맞는 기술 스택을 선택하는 경험을 했습니다. 또한, 팀원들과의 정기적인 코드 리뷰를 통해 코드 품질을 높이고, 서비스의 전체적인 아키텍처를 설계하는 능력을 길렀습니다. 사용자 리서치부터 개발, 배포까지 전 과정을 경험하며 제품 개발 생태계에 대한 이해도를 넓혔습니다.`,
  },
};

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = allProjectData[params.slug];

  if (!project) {
    notFound();
  }

  return (
    <div style={{ padding: "2rem" }}>
      {" "}
      {/* 임시 스타일 */}
      <header>
        <h1>{project.title}</h1>
        <p>{project.subtitle}</p>
      </header>
      <section>
        <h2>About</h2>
        <div>
          <div>
            <strong>진행 기간</strong>
            <p>{project.overview.duration}</p>
          </div>
          <div>
            <strong>목표</strong>
            <p>{project.overview.goal}</p>
          </div>
          <div>
            <strong>사용 툴/스택</strong>
            <p>{project.overview.stack}</p>
          </div>
          <div>
            <strong>기여도</strong>
            <p>{project.overview.contribution}</p>
          </div>
        </div>
      </section>
      <section>
        <h2>What I Did</h2>
        <ul>
          {project.whatIDid.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>What I Learned</h2>
        <p>{project.whatILearned}</p>
      </section>
      <Link href="/#projects">&larr; 돌아가기</Link>
    </div>
  );
}
