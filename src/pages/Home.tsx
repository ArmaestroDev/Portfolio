

import { Link, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import styles from './page.module.css';

export default function Home() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!titleRef.current) return;

      const rect = titleRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate angle from center of title to mouse
      // Normalize coordinates based on aspect ratio to ensure uniform rotation feel
      const normalizedX = (e.clientX - centerX) / (rect.width / 2);
      const normalizedY = (e.clientY - centerY) / (rect.height / 2);

      const angleRad = Math.atan2(normalizedY, normalizedX);
      const angleDeg = angleRad * (180 / Math.PI) + 90; // Add 90 to start from top/correct orientation if needed

      titleRef.current.style.setProperty('--gradient-angle', `${angleDeg}deg`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        // Timeout to ensure DOM is ready
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1
            ref={titleRef}
            className={styles.title}
            style={{ '--gradient-angle': '90deg' } as React.CSSProperties}
          >
            Portfolio von Armando Monte
          </h1>
          <p className={styles.subtitle}>
            Leidenschaftlicher Softwareentwickler und Informatik-Student an der Uni Potsdam.
          </p>
          <div className={styles.ctaButtons}>
            <Link to="/projects" className={styles.primaryBtn}>
              Projekte ansehen
            </Link>
             <Link to="/contact" className={styles.secondaryBtn}>
                Kontaktieren
            </Link>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img
            src="/bild.png"
            alt="Armando Monte Profilbild"
            className={styles.profileImage}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Kenntnisse</h2>
        <div className={styles.skillsGrid}>
          {[
            { name: 'Python', level: 'Intermediär' },
            { name: 'Java', level: 'Intermediär' },
            { name: 'JavaScript', level: 'Intermediär' },
            { name: 'HTML/CSS', level: 'Intermediär' },
            { name: 'C', level: 'Intermediär' },
            { name: 'Kotlin', level: 'Grundkenntnisse' },
            { name: 'SQL', level: 'Grundkenntnisse' }
          ].map((skill) => (
            <div key={skill.name} className={styles.skillItem} title={skill.level}>
              <div>{skill.name}</div>
              <div style={{ fontSize: '0.8rem', color: '#888', marginTop: '0.2rem' }}>{skill.level}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Lebenslauf</h2>
        <div className={styles.timeline} id='cv'>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot} style={{ background: 'var(--secondary-color)', boxShadow: '0 0 0 2px var(--secondary-color)' }}></div>
            <a 
              href="/CV.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.timelineContent}
              style={{ textDecoration: 'none', display: 'block', cursor: 'pointer', color: 'inherit' }}
            >
              <span className={styles.timelineDate}>Wie geht es weiter?</span>
              <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--secondary-color)' }}>Klicken Sie hier!</h3>
              <p style={{ margin: 0, fontWeight: 600 }}>Gesamter Lebenslauf</p>
            </a>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <span className={styles.timelineDate}>Seit September 2024</span>
              <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--text-primary)' }}>Universität Potsdam</h3>
              <p style={{ margin: 0, fontWeight: 600 }}>Informatik / Computational Science</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot} style={{ background: 'var(--secondary-color)', boxShadow: '0 0 0 2px var(--secondary-color)' }}></div>
            <div className={styles.timelineContent}>
              <span className={styles.timelineDate} style={{ color: 'var(--secondary-color)' }}>Abschluss: Juli 2024</span>
              <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--text-primary)' }}>Abitur</h3>
              <p style={{ margin: 0, fontWeight: 600 }}>Durchschnittsnote: 1,5</p>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
