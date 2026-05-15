import { useLayoutEffect, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useLayoutEffect(() => {
        // Disable browser's default scroll restoration
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        if (!hash) {
            window.scrollTo({ top: 0, left: 0, behavior: "instant" });
            return;
        }

        const id = hash.slice(1);
        const timer = setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }, 100);

        return () => clearTimeout(timer);
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;