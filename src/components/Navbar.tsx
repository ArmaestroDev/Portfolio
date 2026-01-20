"use client";

import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const scrollToCv = (e: React.MouseEvent) => {
        e.preventDefault();
        if (location.pathname === '/') {
            const element = document.getElementById('cv');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate('/#cv');
        }
    };

    return (
        <nav className={styles.navbar}>
            <Link to="/" className={styles.logo}>
                Armando Monte
            </Link>
            <ul className={styles.navLinks}>
                <li>
                    <Link to="/" className={styles.navLink}>
                        Startseite
                    </Link>
                </li>
                <li>
                    <Link to="/projects" className={styles.navLink}>
                        Projekte
                    </Link>
                </li>
                <li>
                    <a href="/#cv" onClick={scrollToCv} className={styles.navLink}>
                        Lebenslauf
                    </a>
                </li>
                <li>
                    <Link to="/contact" className={styles.navLink}>
                        Kontakt
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
