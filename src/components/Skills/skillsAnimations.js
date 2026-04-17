import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useSkillsAnimations(containerRef) {
    useGSAP(() => {
        // Initial setup to prevent FOUC
        gsap.set('.gsap-skills-header', { opacity: 0, y: 40 });
        gsap.set('.gsap-skill-badge', { opacity: 0, scale: 0, rotation: () => gsap.utils.random(-15, 15) });
        gsap.set('.gsap-skills-deco', { opacity: 0, scaleX: 0 });

        // Header fade and slide up
        gsap.to('.gsap-skills-header', {
            scrollTrigger: {
                trigger: '.gsap-skills-header',
                start: 'top 80%',
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
        });

        // Skill badges random staggering pop
        gsap.to('.gsap-skill-badge', {
            scrollTrigger: {
                trigger: '.gsap-skills-grid',
                start: 'top 80%',
            },
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            stagger: {
                amount: 1,
                from: 'random'
            },
            ease: 'back.out(2)'
        });

        // Bottom decoration reveal
        gsap.to('.gsap-skills-deco', {
            scrollTrigger: {
                trigger: '.gsap-skills-deco',
                start: 'top 90%',
            },
            opacity: 1,
            scaleX: 1,
            duration: 1,
            ease: 'elastic.out(1, 0.5)'
        });
    }, { scope: containerRef });
}
