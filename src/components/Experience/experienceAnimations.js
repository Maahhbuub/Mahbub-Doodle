import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useExperienceAnimations(containerRef) {
    useGSAP(() => {
        // Initial states to avoid FOUC
        gsap.set('.gsap-exp-header', { opacity: 0, y: 40 });
        gsap.set('.gsap-exp-line', { scaleY: 0, transformOrigin: 'top center' });
        gsap.set('.gsap-exp-item', { opacity: 0, y: 50 });
        gsap.set('.gsap-exp-endpoint', { opacity: 0, scale: 0, rotation: -90 });

        // Animate Header
        gsap.to('.gsap-exp-header', {
            scrollTrigger: {
                trigger: '.gsap-exp-header',
                start: 'top 85%',
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
        });

        // Animate the vertical timeline line growing down
        gsap.to('.gsap-exp-line', {
            scrollTrigger: {
                trigger: '.gsap-exp-timeline',
                start: 'top 80%',
            },
            scaleY: 1,
            duration: 2,
            ease: 'power2.inOut',
        });

        // Animate experiences items staggered
        gsap.to('.gsap-exp-item', {
            scrollTrigger: {
                trigger: '.gsap-exp-timeline',
                start: 'top 75%',
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.4,
            ease: 'back.out(1.2)',
        });

        // Animate Endpoint 'X' spinning/scaling in
        gsap.to('.gsap-exp-endpoint', {
            scrollTrigger: {
                trigger: '.gsap-exp-endpoint',
                start: 'top 95%',
            },
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            ease: 'back.out(2)',
        });

    }, { scope: containerRef });
}
