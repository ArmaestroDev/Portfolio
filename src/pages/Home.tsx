import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import styles from "./page.module.css";

export default function Home() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const location = useLocation();

  useEffect(() => {
    // Scroll handling
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className={styles.templeContainer}>
      {/* 1. PEDIMENT (The Roof) - Name and Image */}
      <section className={styles.pedimentWrapper}>
        <div className={styles.pedimentTriangle}>
          <div className={styles.pedimentContent}>
            <div className={styles.imageContainer}>
              <img
                src="/bild.png"
                alt="Armando Monte Profilbild"
                className={styles.profileImage}
              />
            </div>
            <div className={styles.titleGroup}>
              <h1 ref={titleRef} className={styles.title}>
                Armando Monte
              </h1>
              <p className={styles.subtitle}>Softwareentwickler & Student</p>
              <div className={styles.ctaButtons}>
                <Link to="/projects" className={styles.templeBtn}>
                  Projekte
                </Link>
                <Link to="/contact" className={styles.templeBtn}>
                  Kontakt
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.entablature}>
          {/* Frieze / decorative strip below roof */}
          <div className={styles.triglyphs}></div>
        </div>
      </section>

      {/* 2. COLONNADE (The Columns) - Skills */}
      <section className={styles.stylobate}>
        <div className={styles.colonnade}>
          {[
            { name: "Python", level: "Intermediär" },
            { name: "Java", level: "Intermediär" },
            { name: "JS/TS", level: "Intermediär" },
            { name: "HTML/CSS", level: "Intermediär" },
            { name: "C", level: "Intermediär" },
            { name: "Kotlin", level: "Basis" },
            { name: "SQL", level: "Basis" },
          ].map((skill) => (
            <div key={skill.name} className={styles.columnContainer}>
              <div className={styles.capital}></div>
              <div className={styles.columnShaft}>
                <span className={styles.skillName}>{skill.name}</span>
                <span className={styles.skillLevel}>{skill.level}</span>
              </div>
              <div className={styles.base}></div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CREPIDOMA (The Foundation) - Resume */}
      <section className={styles.crepidoma} id="cv">
        <div className={styles.stepTop}>
          <h2 className={styles.foundationTitle}>Lebenslauf - Das Fundament</h2>
        </div>

        <div className={styles.stepMiddle}>
          <div className={styles.timelineEntry}>
            <span className={styles.date}>Seit 09/2024</span>
            <span className={styles.entryTitle}>Uni Potsdam - Informatik</span>
          </div>
          <div className={styles.timelineEntry}>
            <span className={styles.date}>07/2024</span>
            <span className={styles.entryTitle}>Abitur (1,5)</span>
          </div>
        </div>

        <div className={styles.stepBottom}>
          <a
            href="/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.fullCvLink}
          >
            <span className={styles.cvIcon}>📜</span>
            Gesamten Lebenslauf öffnen
          </a>
        </div>
      </section>
    </div>
  );
}
