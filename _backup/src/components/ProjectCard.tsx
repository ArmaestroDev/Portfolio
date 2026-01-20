import styles from './ProjectCard.module.css';

interface ProjectProps {
    title: string;
    description: string;
    tags: string[];
    link: string;
    imageUrl?: string; // Optional for now
}

const ProjectCard = ({ title, description, tags, link, imageUrl }: ProjectProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                {/* Placeholder for actual image or use next/image */}
                {imageUrl ? (
                    <img src={imageUrl} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555' }}>
                        No Image
                    </div>
                )}
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <div className={styles.tags}>
                    {tags.map((tag) => (
                        <span key={tag} className={styles.tag}>
                            {tag}
                        </span>
                    ))}
                </div>
                <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    Projekt ansehen
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
