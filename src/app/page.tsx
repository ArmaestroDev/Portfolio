import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Hallo, ich bin Armando Monte
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
