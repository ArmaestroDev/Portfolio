import styles from './ProjectCard.module.css';

interface ProjectProps {
    title: string;
    description: string;
    tags: string[];
    link: string;
    imageUrl?: string;
}

const ProjectCard = ({ title, description, tags, link, imageUrl }: ProjectProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
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

            {/* Animated background effects */}
            <div className={styles.shine}></div>
            <div className={styles.background}>
                <div className={styles.tiles}>
                    <div className={`${styles.tile} ${styles.tile1}`}></div>
                    <div className={`${styles.tile} ${styles.tile2}`}></div>
                    <div className={`${styles.tile} ${styles.tile3}`}></div>
                    <div className={`${styles.tile} ${styles.tile4}`}></div>
                    <div className={`${styles.tile} ${styles.tile5}`}></div>
                    <div className={`${styles.tile} ${styles.tile6}`}></div>
                    <div className={`${styles.tile} ${styles.tile7}`}></div>
                    <div className={`${styles.tile} ${styles.tile8}`}></div>
                    <div className={`${styles.tile} ${styles.tile9}`}></div>
                    <div className={`${styles.tile} ${styles.tile10}`}></div>
                </div>
                <div className={`${styles.line} ${styles.line1}`}></div>
                <div className={`${styles.line} ${styles.line2}`}></div>
                <div className={`${styles.line} ${styles.line3}`}></div>
            </div>
        </div>
    );
};

export default ProjectCard;
