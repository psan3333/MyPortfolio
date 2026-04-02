"use client";

import {
    useCallback,
    useEffect,
    useEffectEvent,
    useRef,
    useState,
} from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/all";
import { useTranslation } from "react-i18next";
import { useGSAP } from "@gsap/react";

const Contact = ({
    text,
    lang,
    ref,
}: {
    ref: React.RefObject<HTMLHeadingElement | null>;
    text: {
        getIn: string;
        touch: string;
    };
    lang: string;
}) => {
    const { t } = useTranslation();

    useGSAP(() => {
        if (!ref) return;
        gsap.from(".suggestion", {
            scrollTrigger: {
                trigger: ref.current,
                start: "top 80%",
                // markers: true,
            },
            x: 30,
            opacity: 0,
            duration: 0.3,
            ease: "power3.out",
        });
    });
    return (
        <div className="text-center mb-16">
            <h2 ref={ref}>
                {text.getIn} <span className="themed-text">{text.touch}</span>
            </h2>
            <p className="suggestion text-secondary-foreground mt-4 max-w-2xl mx-auto">
                {t("contactMe.label", { lng: lang })}
            </p>
        </div>
    );
};

export function ContactMe({ lang }: { lang: string }) {
    const getInTouchRef = useRef<HTMLHeadingElement>(null);
    const { t } = useTranslation();
    const [text, setText] = useState(() => ({
        getIn: t("contactMe.getIn", { lng: lang }),
        touch: t("contactMe.touch", { lng: lang }),
    }));
    const updateText = useEffectEvent((language: string) => {
        setText({
            getIn: t("contactMe.getIn", { lng: language }),
            touch: t("contactMe.touch", { lng: language }),
        });
    });

    useEffect(() => {
        updateText(lang);
    }, [lang, t]);

    const onFontLoaded = useCallback(() => {
        const h2 = getInTouchRef.current;
        if (!h2) return;

        const split = new SplitText(h2, {
            type: "chars",
            aria: "none",
        });

        gsap.from(split.chars, {
            scrollTrigger: {
                trigger: h2,
                start: "top 90%",
                // markers: true,
            },
            x: 30,
            opacity: 0,
            duration: 0.5,
            stagger: 0.05,
            ease: "power3.out",
        });
    }, []);

    useGSAP(
        () => {
            if (document.fonts.status === "loaded") onFontLoaded();
            document.fonts.addEventListener("loadingdone", onFontLoaded);
        },
        { dependencies: [text], revertOnUpdate: true },
    );

    return (
        <section id="contact" className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Contact
                    ref={getInTouchRef}
                    text={text}
                    lang={lang}
                    key={lang + text.getIn + text.touch}
                />
            </div>
        </section>
    );
}
