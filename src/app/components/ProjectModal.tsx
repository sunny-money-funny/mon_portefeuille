// src/components/ProjectModal.tsx

import React from "react";
import Image from "next/image";
import styles from "./ProjectModal.module.css";
import {
  Project,
  ProjectContent,
  HeadlineBlock,
  ListBlock,
  ImageBlock,
  DividerBlock,
  AboutBlock,
  WhatIDidBlock,
  WhatILearnedBlock,
} from "../../../types/project";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className={styles.modalCloseButton}>
          &times;
        </button>

        <h3 className={styles.modalTitle}>{project.title}</h3>
        <p className={styles.modalSubtitle}>{project.subtitle}</p>

        {project.content.map((block, index) => {
          switch (block.type) {
            case "headline":
              return (
                <h4 key={index} className={styles.headline}>
                  {block.data}
                </h4>
              );

            case "list":
              return (
                <ul key={index} className={styles.pointList}>
                  {block.data.map((item, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              );

            case "image":
              return (
                <div key={index} className={styles.imageWrapper}>
                  <Image
                    src={block.data.src}
                    alt={block.data.alt}
                    width={block.data.width}
                    height={300}
                    className={styles.modalImage}
                  />
                  <p className={styles.imageAltText}>{block.data.alt}</p>
                </div>
              );

            case "divider":
              return <hr key={index} className={styles.divider} />;

            case "about":
              return (
                <div key={index} className={styles.aboutWrapper}>
                  <h4 className={styles.subSectionTitle}>About</h4>
                  <div className={styles.aboutGrid}>
                    <div>
                      <strong>진행 기간</strong>
                      <p>{block.data.duration}</p>
                    </div>
                    <div>
                      <strong>목표</strong>
                      <p>{block.data.goal}</p>
                    </div>
                    <div>
                      <strong>사용 툴/스택</strong>
                      <p>{block.data.stack}</p>
                    </div>
                    <div>
                      <strong>기여도</strong>
                      <p>{block.data.contribution}</p>
                    </div>
                  </div>
                </div>
              );

            case "whatIDid":
              return (
                <div key={index} className={styles.didWrapper}>
                  <h4 className={styles.subSectionTitle}>What I Did</h4>
                  <ul className={styles.didList}>
                    {block.data.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              );

            case "whatILearned":
              return (
                <div key={index}>
                  <h4 className={styles.subSectionTitle}>What I Learned</h4>
                  <p className={styles.learnedText}>{block.data}</p>
                </div>
              );

            default:
              return null;
          }
        })}
        <div className={styles.linkContainer}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
