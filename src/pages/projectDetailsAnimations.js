import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export function useProjectDetailsAnimations(containerRef) {
    useGSAP(() => {
        // Initial states
        gsap.set('.gsap-pd-back', { opacity: 0, x: -20 });
        gsap.set('.gsap-pd-header', { opacity: 0, y: 30 });
        gsap.set('.gsap-pd-section', { opacity: 0, y: 20 });
        gsap.set('.gsap-pd-feature', { opacity: 0, x: -15 });
        gsap.set('.gsap-pd-sidebar', { opacity: 0, scale: 0.95 });

        // Back button
        gsap.to('.gsap-pd-back', {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: 'power2.out',
        });

        // Content animation timeline
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.to('.gsap-pd-header', {
            opacity: 1,
            y: 0,
            duration: 0.7,
        }, 0.1)

            .to('.gsap-pd-section', {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.2,
            }, 0.3)

            .to('.gsap-pd-feature', {
                opacity: 1,
                x: 0,
                duration: 0.4,
                stagger: 0.05,
            }, 0.5)

            .to('.gsap-pd-sidebar', {
                opacity: 1,
                scale: 1,
                duration: 0.6,
                stagger: 0.15,
                ease: 'back.out(1.2)',
            }, 0.4);

    }, { scope: containerRef });
}
