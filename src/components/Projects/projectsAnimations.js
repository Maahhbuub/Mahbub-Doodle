import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useProjectsAnimations(containerRef) {
    useGSAP(() => {
        // Initial states
        gsap.set('.gsap-project-header', { opacity: 0, y: 30 });
        gsap.set('.gsap-project-card', { opacity: 0, y: 50, rotation: 2 });
        gsap.set('.gsap-project-more', { opacity: 0, scale: 0.8 });

        // Animate Header
        gsap.to('.gsap-project-header', {
            scrollTrigger: {
                trigger: '.gsap-project-header',
                start: 'top 85%',
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
        });

        // Animate Project Cards (staggered)
        gsap.to('.gsap-project-card', {
            scrollTrigger: {
                trigger: '.gsap-project-grid',
                start: 'top 80%',
            },
            opacity: 1,
            y: 0,
            rotation: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'back.out(1.2)',
        });

        // Animate More Projects button
        gsap.to('.gsap-project-more', {
            scrollTrigger: {
                trigger: '.gsap-project-more',
                start: 'top 95%',
            },
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: 'elastic.out(1, 0.7)',
        });

    }, { scope: containerRef });
}
