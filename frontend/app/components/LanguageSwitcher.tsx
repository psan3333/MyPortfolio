import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const languages = ["en", "ru"];

export function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [idx, setIdx] = useState(i18n.language === "en" ? 0 : 1);

    useEffect(() => {
        // ensure all animations were created
        const timeout = setTimeout(() => ScrollTrigger.refresh(true), 0);
        return () => clearTimeout(timeout);
    }, [i18n.language]);

    return (
        <button
            className="icon-contrast"
            onClick={async () => {
                const newIdx = (idx + 1) % 2;
                setIdx(newIdx);
                await i18n.changeLanguage(languages[newIdx]);
            }}
        >
            {languages[idx]}
        </button>
    );
}
