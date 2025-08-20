// page.tsx

"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import ProjectModal from "./components/ProjectModal";
import tsimg from "../../public/ts.png";
import reactimg from "../../public/react.png";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: "polexible",
      title: "Polexible",
      description: "AI 기반 문서 편집 보조 플랫폼",
      githubUrl: "https://github.com/Media-Parser/front",
    },
    {
      id: "roomo",
      title: "Roomo",
      description: "AI 기반 공간 대여 및 추천 플랫폼",
      githubUrl: "https://github.com/sunny-money-funny/Roomo_Front",
    },
  ];

  return (
    <>
      <Header />
      <main className={styles.container}>
        {/* Sunny */}
        <section id="sunny" className={styles.sunny}>
          <h1>Welcome to Sunny World</h1>
          <p>세상에 관심 많은 프론트엔드 개발자</p>
          <p>☀️SUNNY입니다☀️</p>
        </section>

        {/* About */}
        <section id="about" className={styles.about}>
          <h2>About Me</h2>
          <p>
            사용자 경험을 중심으로 서비스를 기획하고 개발하며, AI 기술을 활용한
            혁신적인 웹서비스에도 관심이 많습니다. React, TypeScript 기반
            프론트엔드 개발 경험과 UI/UX 리서치 경험을 살려, 사람 중심의
            서비스뿐 아니라 광고·마케팅·미디어 관점까지 고려한 제품을
            만들어갑니다.
          </p>
        </section>

        {/* Projects */}
        <section id="projects" className={styles.projects}>
          <h2>Projects</h2>
          <div className={styles.projectList}>
            {projects.map((project) => (
              <div
                key={project.id}
                className={styles.projectCard}
                onClick={() => setSelectedProject(project)}
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills 섹션 추가 */}
        <section id="skills" className={styles.skills}>
          <h2>Skills</h2>
          <div className={styles.skillsList}>
            <div className={styles.skillItem}>
              <span>React</span>
              <Image src={reactimg} alt="React logo" width={50} height={50} />
            </div>
            <div className={styles.skillItem}>
              <span>TypeScript</span>
              <Image src={tsimg} alt="React logo" width={50} height={50} />
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className={styles.contact}>
          <h2>Contact</h2>
          <p>Email: this.is.js.j@gmail.com</p>
          <p>
            GitHub:{" "}
            <a href="https://github.com/sunny-money-funny" target="_blank">
              sunny-money-funny
            </a>
          </p>
        </section>
      </main>

      {/* 모달 컴포넌트를 props와 함께 렌더링 */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
