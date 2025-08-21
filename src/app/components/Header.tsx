// components/Header.jsx

import styles from "./Header.module.css";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      {/* 햄버거 메뉴 버튼 */}
      <button
        className={`${styles.menuToggle} ${isMenuOpen ? styles.active : ""}`}
        onClick={toggleMenu}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>

      {/* 내비게이션 메뉴 */}
      <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ""}`}>
        <a href="#sunny" onClick={() => setIsMenuOpen(false)}>
          Home
        </a>
        <a href="#about" onClick={() => setIsMenuOpen(false)}>
          About
        </a>
        <a href="#projects" onClick={() => setIsMenuOpen(false)}>
          Projects
        </a>
        <a href="#skills" onClick={() => setIsMenuOpen(false)}>
          Skills
        </a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)}>
          Contact
        </a>
      </nav>
    </header>
  );
}
