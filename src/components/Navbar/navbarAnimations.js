import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export function useNavbarAnimations(containerRef) {
    useGSAP(() => {
        if (!containerRef.current) return;

        gsap.from(containerRef.current, {
            y: -100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            delay: 0.1,
            clearProps: 'all'
        });
    }, { scope: containerRef });
}
