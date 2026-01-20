import styles from './BackgroundOrbs.module.css';

const BackgroundOrbs = () => {
    return (
        <div className={styles.container}>
            <div className={`${styles.orb} ${styles.orb1}`} />
            <div className={`${styles.orb} ${styles.orb2}`} />
            <div className={`${styles.orb} ${styles.orb3}`} />
        </div>
    );
};

export default BackgroundOrbs;
