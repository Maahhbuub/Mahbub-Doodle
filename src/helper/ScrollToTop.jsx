import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (!hash) {
            window.scrollTo({ top: 0, left: 0, behavior: "auto" });
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