// src/components/ProjectModal.tsx

import React from "react";
import styles from "./ProjectModal.module.css";

interface Project {
  title: string;
  description: string;
  githubUrl: string;
}

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
        <h3>{project.title}</h3>
        <p>{project.description}</p>
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
  );
};

export default ProjectModal;
