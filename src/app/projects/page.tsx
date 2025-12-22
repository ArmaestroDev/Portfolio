import ProjectCard from '@/components/ProjectCard';
import styles from './projects.module.css';

// Projektdaten
const projects = [
    {
        id: 1,
        title: 'Kalorientracker',
        description: 'Mein bisher größtes Projekt: Eine umfassende Anwendung zum Tracken von Kalorien und Nährwerten. Entwickelt mit Kotlin.',
        tags: ['Kotlin', 'Android', 'Databases'],
        link: 'https://github.com/ArmaestroDev/Kalorientracker',
        imageUrl: 'https://private-user-images.githubusercontent.com/125290661/502216713-e2c36eda-d5c5-457c-8380-2fe6071a2222.jpg?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjYzNjcwMzcsIm5iZiI6MTc2NjM2NjczNywicGF0aCI6Ii8xMjUyOTA2NjEvNTAyMjE2NzEzLWUyYzM2ZWRhLWQ1YzUtNDU3Yy04MzgwLTJmZTYwNzFhMjIyMi5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMjIyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTIyMlQwMTI1MzdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05ZWIwODRjZDVmOGNlMjg4NTQxOWMzZTJlMjQ0ZTY3NWI0N2ZjNDA1NWI1Mzg1YTdhNjQ1MTQzNGUwNWEwOGEzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.rFb0T4Qsr_58It3afn0EDPy0wH9V8WXwe4aIcsdED0E'
    },
    {
        id: 2,
        title: 'Finanzplaner',
        description: 'Ein Tool zur Verwaltung persönlicher Finanzen, Einnahmen und Ausgaben.',
        tags: ['Java', 'SQL', 'Desktop'],
        link: '#',
    },
    {
        id: 3,
        title: 'Java Quiz-App',
        description: 'Eine interaktive Quiz-Anwendung, um Java-Kenntnisse spielerisch zu testen und zu erweitern.',
        tags: ['Java', 'Swing', 'OOP'],
        link: '#',
    },
];

export default function ProjectsPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Meine Projekte</h1>
            <div className={styles.grid}>
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        tags={project.tags}
                        link={project.link}
                        imageUrl={project.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
}
