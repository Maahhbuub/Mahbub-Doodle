import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useAchievementsAnimations(containerRef) {
    useGSAP(() => {
        // Initial setup
        gsap.set('.gsap-achievements-header', { opacity: 0, y: 30 });
        gsap.set('.gsap-achievement-card', { opacity: 0, y: 50, rotation: () => gsap.utils.random(-3, 3) });
        gsap.set('.gsap-achievements-deco', { strokeDashoffset: 1000 });

        // Header animation
        gsap.to('.gsap-achievements-header', {
            scrollTrigger: {
                trigger: '.gsap-achievements-header',
                start: 'top 85%',
            },
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "back.out(1.7)"
        });

        // Decoration animation
        gsap.to('.gsap-achievements-deco', {
            scrollTrigger: {
                trigger: '.gsap-achievements-header',
                start: 'top 85%',
            },
            strokeDashoffset: 0,
            duration: 1.5,
            ease: "power2.inOut"
        });

        // Cards stagger animation
        gsap.to('.gsap-achievement-card', {
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 75%',
            },
            opacity: 1,
            y: 0,
            rotation: (i, target) => {
                // Keep the odd/even css rotations mostly but center a bit
                return i % 2 === 0 ? 1 : -1;
            },
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.5)"
        });

    }, { scope: containerRef });
}
