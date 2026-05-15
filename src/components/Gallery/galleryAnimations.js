import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGalleryAnimations(containerRef) {
    useGSAP(() => {
        gsap.set('.gsap-gallery-header', { opacity: 0, y: 40 });
        gsap.set('.gsap-gallery-polaroid', { opacity: 0, y: 50, scale: 0.8 });

        gsap.to('.gsap-gallery-header', {
            scrollTrigger: {
                trigger: '.gsap-gallery-header',
                start: 'top 85%',
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'back.out(1.2)'
        });

        gsap.to('.gsap-gallery-polaroid', {
            scrollTrigger: {
                trigger: '.gsap-gallery-polaroid',
                start: 'top 85%',
            },
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: 'back.out(1.5)'
        });

    }, { scope: containerRef });
}