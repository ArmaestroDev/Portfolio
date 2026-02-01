import { useEffect, useRef, useCallback } from 'react';
import styles from './BackgroundOrbs.module.css';

const BackgroundOrbs = () => {
    const orbRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!orbRef.current) return;
            
            // Smooth follow with slight delay using CSS transition
            orbRef.current.style.left = `${e.clientX}px`;
            orbRef.current.style.top = `${e.clientY}px`;
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Spawn a ripple wave on each click - independent of other clicks
    const spawnRipple = useCallback((e: MouseEvent) => {
        if (!containerRef.current) return;

        const ripple = document.createElement('div');
        ripple.className = styles.ripple;
        ripple.style.left = `${e.clientX}px`;
        ripple.style.top = `${e.clientY}px`;
        
        containerRef.current.appendChild(ripple);

        // Remove ripple after animation completes
        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });
    }, []);

    useEffect(() => {
        window.addEventListener('click', spawnRipple);
        return () => window.removeEventListener('click', spawnRipple);
    }, [spawnRipple]);

    return (
        <div ref={containerRef} className={styles.container}>
            <div ref={orbRef} className={styles.orb} />
        </div>
    );
};

export default BackgroundOrbs;
