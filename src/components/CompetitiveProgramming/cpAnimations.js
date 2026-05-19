import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useCPAnimations(containerRef) {
    useGSAP(() => {
        // Initial state setup to prevent FOUC
        gsap.set('.gsap-cp-header', { opacity: 0, y: 40 });
        gsap.set('.gsap-cp-deco', { strokeDashoffset: 1000 });
        gsap.set('.gsap-cp-card', { opacity: 0, scale: 0.8, y: 30 });
        gsap.set('.gsap-cp-wrapper-deco', { opacity: 0, scaleX: 0 });

        // Header fade and slide up
        gsap.to('.gsap-cp-header', {
            scrollTrigger: {
                trigger: '.gsap-cp-header',
                start: 'top 85%',
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
        });

        // Title underline decoration
        gsap.to('.gsap-cp-deco', {
            scrollTrigger: {
                trigger: '.gsap-cp-header',
                start: 'top 85%',
            },
            strokeDashoffset: 0,
            duration: 1.5,
            ease: 'power2.inOut',
            delay: 0.3
        });

        // Cards pop in staggered
        gsap.to('.gsap-cp-card', {
            scrollTrigger: {
                trigger: '.gsap-cp-grid',
                start: 'top 80%',
            },
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'back.out(1.4)',
        });

        // Bottom decoration reveal
        gsap.to('.gsap-cp-wrapper-deco', {
            scrollTrigger: {
                trigger: '.gsap-cp-wrapper-deco',
                start: 'top 90%',
            },
            opacity: 1,
            scaleX: 1,
            duration: 1,
            ease: 'elastic.out(1, 0.5)',
        });

    }, { scope: containerRef });
}
