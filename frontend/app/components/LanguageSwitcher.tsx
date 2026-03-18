import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const languages = ["en", "ru"];

export function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [idx, setIdx] = useState(i18n.language === "en" ? 0 : 1);

    useGSAP(
        () => {
            gsap.globalTimeline.revert();
            gsap.globalTimeline.restart(true, false);
            ScrollTrigger.refresh(true);
        },
        { dependencies: [i18n.language] },
    );

    const toggleLanguage = () => {
        const newIdx = (idx + 1) % 2;
        setIdx(newIdx);
        i18n.changeLanguage(languages[newIdx]);
    };

    return (
        <button className="icon-contrast" onClick={() => toggleLanguage()}>
            {languages[idx]}
        </button>
    );
}
