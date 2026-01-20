"use client";

import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.logo}>
                Armando Monte
            </Link>
            <ul className={styles.navLinks}>
                <li>
                    <Link href="/" className={styles.navLink}>
                        Startseite
                    </Link>
                </li>
                <li>
                    <Link href="/projects" className={styles.navLink}>
                        Projekte
                    </Link>
                </li>
                <li>
                    {/* Provisorischer Link für Lebenslauf */}
                    <a href="#" className={styles.navLink} onClick={(e) => e.preventDefault()}>
                        Lebenslauf
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
