import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export function useHeroAnimations(containerRef) {
    useGSAP(() => {
        // Initial setup to prevent flash of unstyled content during load
        gsap.set('.gsap-text', { opacity: 0, y: 30 });
        gsap.set('.gsap-doodle', { opacity: 0, scale: 0.5 });
        gsap.set('.gsap-doodle-svg', { opacity: 0, scale: 0.5 });
        gsap.set('.gsap-avatar', { opacity: 0, x: 50 });
        gsap.set('.gsap-wave', { opacity: 0, y: 50 });

        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        // 1. Animate doodles springing in
        tl.to('.gsap-doodle', {
            opacity: 0.04, // or whatever original opacity you want to approach
            scale: 1,
            duration: 1.5,
            stagger: 0.1,
            ease: 'elastic.out(1, 0.7)'
        }, 0);

        // Specifically for SVG doodles that have different native opacity
        tl.to('.gsap-doodle-svg', {
            opacity: 0.4,
            scale: 1,
            duration: 1.2,
            stagger: 0.2,
            ease: 'back.out(1.7)'
        }, 0.2);

        // 2. Animate main text elements sliding up
        tl.to('.gsap-text', {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
        }, 0.2);

        // 3. Slide in the avatar
        tl.to('.gsap-avatar', {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: 'power4.out',
        }, 0.4);

        // 4. Slide up the bottom wave
        tl.to('.gsap-wave', {
            opacity: 1,
            y: 0,
            duration: 1,
        }, 0.6);

    }, { scope: containerRef });
}
