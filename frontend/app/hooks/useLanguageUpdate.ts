import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const useLanguageUpdate = () => {
    const { i18n } = useTranslation();
    useEffect(() => {
        // ensure all animations were created
        const timeout = setTimeout(() => ScrollTrigger.refresh(true), 0);
        return () => clearTimeout(timeout);
    }, [i18n.language]);
}