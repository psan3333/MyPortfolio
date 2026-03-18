import React, { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/all";
import { useTranslation } from "react-i18next";
import i18n from "~/i18n";
import { useGSAP } from "@gsap/react";

export function ContactMe() {
    const { t } = useTranslation();
    const [text, setText] = useState({
        getIn: t("contactMe.getIn", { lng: i18n.language }),
        touch: t("contactMe.touch", { lng: i18n.language }),
    });
    const getInTouchRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const newText = {
            getIn: t("contactMe.getIn", { lng: i18n.language }),
            touch: t("contactMe.touch", { lng: i18n.language }),
        };
        setText(newText);
    }, [i18n.language]);

    useGSAP(() => {
        const split = new SplitText(getInTouchRef.current, {
            type: "chars",
            aria: "none",
        });
        gsap.from(split.chars, {
            scrollTrigger: {
                trigger: getInTouchRef.current,
                start: "top 90%",
                // markers: true,
            },
            x: 30,
            opacity: 0,
            duration: 0.5,
            stagger: 0.05,
            ease: "power3.out",
        });

        gsap.from(".suggestion", {
            scrollTrigger: {
                trigger: getInTouchRef.current,
                start: "top 80%",
                markers: true,
            },
            x: 30,
            opacity: 0,
            duration: 0.3,
            ease: "power3.out",
        });

        return () => {
            split.revert();
        };
    }, [text]);

    const Contact = useCallback(() => {
        useEffect(() => {}, [i18n.language]);
        return (
            <div className="text-center mb-16">
                <h2
                    ref={getInTouchRef}
                    className="text-3xl md:text-4xl font-bold text-foreground"
                >
                    {text.getIn}{" "}
                    <span className="themed-text">{text.touch}</span>
                </h2>
                <p className="suggestion text-secondary-foreground mt-4 max-w-2xl mx-auto">
                    {t("contactMe.label", { lng: i18n.language })}
                </p>
            </div>
        );
    }, [text]);

    return (
        <section id="contact" className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Contact />
            </div>
        </section>
    );
}
