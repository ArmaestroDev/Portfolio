
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import styles from './page.module.css';
import SkillCard from '../components/SkillCard';

// Helper component for individual letter with hover effect
const AnimatedLetter = ({ char, index }: { char: string; index: number }) => {
  if (char === ' ') {
    return <span>&nbsp;</span>;
  }
  return (
    <span 
      className={styles.animatedLetter}
      style={{ animationDelay: `${index * 0.03}s` }}
    >
      {char}
    </span>
  );
};

// Skills data with descriptions and experience
const skills = [
  {
    name: 'Python',
    level: 'Intermediär',
    description: 'Datenanalyse, Scripting und Automatisierung',
    experience: '2+ Jahre Erfahrung',
    icon: 'python' as const
  },
  {
    name: 'Java',
    level: 'Intermediär',
    description: 'OOP, Android-Entwicklung, Backend-Systeme',
    experience: '2+ Jahre Erfahrung',
    icon: 'java' as const
  },
  {
    name: 'JavaScript',
    level: 'Intermediär',
    description: 'Web-Entwicklung, React, Node.js',
    experience: '1+ Jahr Erfahrung',
    icon: 'javascript' as const
  },
  {
    name: 'HTML/CSS',
    level: 'Intermediär',
    description: 'Web-Design, Responsive Layouts',
    experience: '2+ Jahre Erfahrung',
    icon: 'html' as const
  },
  {
    name: 'C',
    level: 'Intermediär',
    description: 'Systemprogrammierung, Algorithmen',
    experience: '1+ Jahr Erfahrung',
    icon: 'c' as const
  },
  {
    name: 'Kotlin',
    level: 'Grundkenntnisse',
    description: 'Android-Entwicklung',
    experience: '<1 Jahr Erfahrung',
    icon: 'kotlin' as const
  },
  {
    name: 'SQL',
    level: 'Grundkenntnisse',
    description: 'Datenbankabfragen, MySQL',
    experience: '<1 Jahr Erfahrung',
    icon: 'sql' as const
  },
  {
    name: 'Flutter',
    level: 'Grundkenntnisse',
    description: 'Cross-Platform App-Entwicklung',
    experience: '<1 Jahr Erfahrung',
    icon: 'flutter' as const
  }
];

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
            Portfolio von{' '}
            <span 
              className={styles.nameWrapper}
              onMouseEnter={() => {
                const img = document.querySelector(`.${styles.imageContainer}`);
                if (img) img.classList.add(styles.imageHovered);
              }}
              onMouseLeave={() => {
                const img = document.querySelector(`.${styles.imageContainer}`);
                if (img) img.classList.remove(styles.imageHovered);
              }}
            >
              {'Armando Monte'.split('').map((char, index) => (
                <AnimatedLetter key={index} char={char} index={index} />
              ))}
            </span>
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
        <div 
          className={styles.imageContainer}
          onMouseEnter={() => {
            const name = document.querySelector(`.${styles.nameWrapper}`);
            if (name) name.classList.add(styles.nameHovered);
          }}
          onMouseLeave={() => {
            const name = document.querySelector(`.${styles.nameWrapper}`);
            if (name) name.classList.remove(styles.nameHovered);
          }}
        >
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
        <div className={styles.skillsWrapper}>
          <button 
            className={styles.scrollBtn} 
            onClick={() => {
              const container = document.getElementById('skillsContainer');
              if (container) container.scrollBy({ left: -200, behavior: 'smooth' });
            }}
            aria-label="Nach links scrollen"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <div className={styles.skillsContainer}>
            <div id="skillsContainer" className={styles.skillsGrid}>
              {skills.map((skill) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  description={skill.description}
                  experience={skill.experience}
                  icon={skill.icon}
                />
              ))}
            </div>
          </div>
          <button 
            className={styles.scrollBtn} 
            onClick={() => {
              const container = document.getElementById('skillsContainer');
              if (container) container.scrollBy({ left: 200, behavior: 'smooth' });
            }}
            aria-label="Nach rechts scrollen"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
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
              className={`${styles.timelineContent} ${styles.timelineCta}`}
              style={{ textDecoration: 'none', cursor: 'pointer', color: 'inherit' }}
            >
              <div className={styles.timelineLogo}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '28px', height: '28px', color: '#ff6b9d' }}>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <div className={styles.timelineText}>
                <span className={styles.timelineDate} style={{ color: '#ff6b9d' }}>Vollständiger Lebenslauf</span>
                <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--text-primary)', fontSize: '1.2rem' }}>
                  Jetzt entdecken <span className={styles.ctaArrow}>→</span>
                </h3>
                <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>PDF herunterladen & mehr erfahren</p>
              </div>
            </a>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <div className={styles.timelineLogo}>
                {/* Replace with actual University Potsdam logo */}
                <img src="/uni-potsdam-logo.png" alt="Universität Potsdam" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              </div>
              <div className={styles.timelineText}>
                <span className={styles.timelineDate}>Seit September 2024</span>
                <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--text-primary)' }}>Universität Potsdam</h3>
                <p style={{ margin: 0, fontWeight: 600 }}>Informatik / Computational Science</p>
              </div>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot} style={{ background: 'var(--secondary-color)', boxShadow: '0 0 0 2px var(--secondary-color)' }}></div>
            <div className={styles.timelineContent}>
              <div className={styles.timelineLogo}>
                {/* Replace with actual Abitur/School logo */}
                <img src="/schule-logo.jpg" alt="Schule" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              </div>
              <div className={styles.timelineText}>
                <span className={styles.timelineDate} style={{ color: 'var(--secondary-color)' }}>Abschluss: Juli 2024</span>
                <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--text-primary)' }}>Abitur</h3>
                <p style={{ margin: 0, fontWeight: 600 }}>Durchschnittsnote: 1,5</p>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
