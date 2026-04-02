"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";

const languages = ["en", "ru"];

export function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [idx, setIdx] = useState(i18n.language === "en" ? 0 : 1);

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
