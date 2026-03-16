import { useState } from "react";
import { useTranslation } from "react-i18next";

const languages = ["en", "ru"];

export function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [idx, setIdx] = useState(i18n.language === "en" ? 0 : 1);
    console.log(i18n.language);

    const toggleLanguage = () => {
        let newIdx = (idx + 1) % 2;
        setIdx(newIdx);
        i18n.changeLanguage(languages[newIdx]);
    };

    return (
        <button className="icon-contrast" onClick={() => toggleLanguage()}>
            {languages[idx]}
        </button>
    );
}
