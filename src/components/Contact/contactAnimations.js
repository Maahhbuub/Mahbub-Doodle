import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useContactAnimations(containerRef) {
    useGSAP(() => {
        // Initial states
        gsap.set('.gsap-contact-text', { opacity: 0, x: -50 });
        gsap.set('.gsap-contact-info', { opacity: 0, y: 20 });
        gsap.set('.gsap-contact-form', { opacity: 0, x: 50, rotation: 2 });
        gsap.set('.gsap-contact-plane', { opacity: 0, scale: 0, x: -50, y: 50 });

        const tlText = gsap.timeline({
            scrollTrigger: {
                trigger: '.gsap-contact-text',
                start: 'top 80%',
            }
        });

        tlText.to('.gsap-contact-text', {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
        });

        tlText.to('.gsap-contact-info', {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'back.out(1.5)',
        }, '-=0.4');

        gsap.to('.gsap-contact-form', {
            scrollTrigger: {
                trigger: '.gsap-contact-form',
                start: 'top 80%',
            },
            opacity: 1,
            x: 0,
            rotation: 0,
            duration: 1,
            ease: 'back.out(1.2)',
        });

        gsap.to('.gsap-contact-plane', {
            scrollTrigger: {
                trigger: '.gsap-contact-plane',
                start: 'top 85%',
            },
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            duration: 1.5,
            ease: 'elastic.out(1, 0.5)',
        });

    }, { scope: containerRef });
}
