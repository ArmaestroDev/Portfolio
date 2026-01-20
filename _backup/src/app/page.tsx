'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
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
            <Link href="/projects" className={styles.primaryBtn}>
              Projekte ansehen
            </Link>
            <a href="mailto:marmando@gmx.de" className={styles.secondaryBtn}>
              Kontaktieren
            </a>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/bild.png"
            alt="Armando Monte Profilbild"
            fill
            className={styles.profileImage}
            priority
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Kenntnisse</h2>
        <div className={styles.skillsGrid}>
          {[
            { name: 'Python', level: 'Intermediär' },
            { name: 'Java', level: 'Intermediär' },
            { name: 'Kotlin', level: 'Grundkenntnisse' },
            { name: 'C', level: 'Grundkenntnisse' },
            { name: 'SQL', level: 'Grundkenntnisse' },
            { name: 'JavaScript', level: 'Grundkenntnisse' }
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className={styles.resumeItem}>
            <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--primary-color)' }}>Universität Potsdam</h3>
            <p style={{ margin: 0, fontWeight: 600 }}>Informatik / Computational Science</p>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Seit September 2024</p>
          </div>
          <div className={styles.resumeItem}>
            <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--primary-color)' }}>Abitur</h3>
            <p style={{ margin: 0, fontWeight: 600 }}>Durchschnittsnote: 1,5</p>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Abschluss: Juli 2024</p>
          </div>
        </div>
      </section>
    </div>
  );
}
