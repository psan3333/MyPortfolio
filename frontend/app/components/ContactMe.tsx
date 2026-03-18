import React, { useEffect, useEffectEvent, useRef, useState } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/all";
import { useTranslation } from "react-i18next";
import { useGSAP } from "@gsap/react";

// Contact is now a standard FC, using forwardedRef for h2
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
                markers: true,
            },
            x: 30,
            opacity: 0,
            duration: 0.3,
            ease: "power3.out",
        });
    });
    return (
        <div className="text-center mb-16">
            <h2
                ref={ref}
                className="text-3xl md:text-4xl font-bold text-foreground"
            >
                {text.getIn} <span className="themed-text">{text.touch}</span>
            </h2>
            <p className="suggestion text-secondary-foreground mt-4 max-w-2xl mx-auto">
                {t("contactMe.label", { lng: lang })}
            </p>
        </div>
    );
};

export function ContactMe({ lang }: { lang: string }) {
    const { t } = useTranslation();
    // Store text depending on `lang` using effect
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

    // This will ensure text updates when language changes
    useEffect(() => {
        updateText(lang);
    }, [lang, t]);

    // We use a ref for the h2 for animation
    const getInTouchRef = useRef<HTMLHeadingElement>(null);

    // Animation hook
    useGSAP(
        () => {
            const h2 = getInTouchRef.current;
            console.log(h2);
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

            return () => {
                split.revert();
            };
        },
        // Depend on text, so when language changes and text re-renders, the animation is retriggered
        [text],
    );

    // Use a `key` prop on Contact to force re-mount and ensure SplitText gets the fresh DOM after language changes
    return (
        <section id="contact" className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Contact
                    ref={getInTouchRef}
                    text={text}
                    lang={lang}
                    key={
                        lang +
                        text.getIn +
                        text.touch /* will remount when language or text changes */
                    }
                />
            </div>
        </section>
    );
}
