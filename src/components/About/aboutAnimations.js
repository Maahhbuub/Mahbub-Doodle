import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useAboutAnimations(containerRef) {
    useGSAP(() => {
        // Initial state fixes to avoid FOUC before scroll trigger triggers
        gsap.set('.gsap-about-header', { opacity: 0, y: 40 });
        gsap.set('.gsap-about-notepad', { opacity: 0, x: -60, rotation: -3 });
        gsap.set('.gsap-about-postit', { opacity: 0, scale: 0.5, y: 40 });
        gsap.set('.gsap-about-doodles', { opacity: 0, scale: 0 });

        // Top Squiggle drawing animation
        gsap.to('.gsap-about-squiggle path', {
            scrollTrigger: {
                trigger: '.gsap-about-squiggle',
                start: 'top 85%',
            },
            strokeDasharray: 2000,
            strokeDashoffset: 0,
            duration: 2,
            ease: 'power2.out',
        });

        // Header fade and slide up
        gsap.to('.gsap-about-header', {
            scrollTrigger: {
                trigger: '.gsap-about-header',
                start: 'top 85%',
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
        });

        // Notepad entry
        gsap.to('.gsap-about-notepad', {
            scrollTrigger: {
                trigger: '.gsap-about-notepad',
                start: 'top 80%',
            },
            opacity: 1,
            x: 0,
            rotation: 0,
            duration: 1,
            ease: 'back.out(1.2)',
        });

        // Post-it notes pop in
        gsap.to('.gsap-about-postit', {
            scrollTrigger: {
                trigger: '.gsap-about-postit',
                start: 'top 85%',
            },
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'back.out(1.7)',
        });

        // Doodles scale in
        gsap.to('.gsap-about-doodles', {
            scrollTrigger: {
                trigger: '.gsap-about-doodles',
                start: 'top 80%',
            },
            opacity: 1,
            scale: 1,
            duration: 1,
            stagger: 0.2,
            ease: 'elastic.out(1, 0.5)',
        });

    }, { scope: containerRef });
}