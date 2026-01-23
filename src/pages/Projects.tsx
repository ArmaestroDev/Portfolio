import ProjectCard from '../components/ProjectCard';
import styles from './projects.module.css';

// Projektdaten
const projects = [
    {
        id: 1,
        title: 'Kalorientracker',
        description: 'Mein bisher größtes Projekt: Eine umfassende Anwendung zum Tracken von Kalorien und Nährwerten. Entwickelt mit Kotlin und erfolgreich zu Flutter übertragen.',
        tags: ['Kotlin', 'Android', 'Datenbanken', 'KI-Integration', 'Flutter'],
        link: 'https://github.com/ArmaestroDev/Kalorientracker_Flutter',
        imageUrl: '/kalorientracker.png'
    },
    {
        id: 2,
        title: 'Finanzplaner - Kommt Bald',
        description: 'Ein Tool zur Verwaltung persönlicher Finanzen, Einnahmen und Ausgaben.',
        tags: ['React Native', 'SQL', 'Desktop'],
        link: '#',
    },
    {
        id: 3,
        title: 'Java Quiz-App',
        description: 'Eine interaktive Quiz-Anwendung, um jegliche Kenntnisse spielerisch zu testen und zu erweitern. Ein Uni-Projekt.',
        tags: ['Java', 'Swing', 'Projektstruktur: MVC'],
        link: 'https://github.com/ArmaestroDev/QuizMaster',
        imageUrl: '/quizapp.png',
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
