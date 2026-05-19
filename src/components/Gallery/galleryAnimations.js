import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGalleryAnimations(containerRef) {
    useGSAP(() => {
        gsap.set('.gsap-gallery-header', { opacity: 0, y: 40 });
        gsap.set('.gsap-gallery-deco', { strokeDashoffset: 1000 });
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

        gsap.to('.gsap-gallery-deco', {
            scrollTrigger: {
                trigger: '.gsap-gallery-header',
                start: 'top 85%',
            },
            strokeDashoffset: 0,
            duration: 1.5,
            ease: 'power2.inOut',
            delay: 0.3
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

        if (gsap.utils.toArray('.gsap-gallery-more').length > 0) {
            gsap.fromTo('.gsap-gallery-more',
                { opacity: 0, y: 30 },
                {
                    scrollTrigger: {
                        trigger: '.gsap-gallery-more',
                        start: 'top 95%',
                    },
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    delay: 0.2
                }
            );
        }

    }, { scope: containerRef });
}