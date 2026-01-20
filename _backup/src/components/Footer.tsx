import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>&copy; {new Date().getFullYear()} Armando Monte. Alle Rechte vorbehalten.</p>
            <div className={styles.socials}>
                <a href="https://github.com/ArmaestroDev" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                    GitHub
                </a>
                <a href="https://linkedin.com/in/armando-monte-86b882353" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                    LinkedIn
                </a>
            </div>
        </footer>
    );
};

export default Footer;
