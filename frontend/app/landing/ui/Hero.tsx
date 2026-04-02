"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowDown, Mail } from "lucide-react";
import { FiLinkedin } from "react-icons/fi";
import { RiGithubLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);
    const socialsRef = useRef<HTMLDivElement>(null);

    const { t } = useTranslation();

    useGSAP(
        () => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.from(titleRef.current, {
                y: 100,
                opacity: 0,
                duration: 1,
                delay: 0.3,
            })
                .from(
                    subtitleRef.current,
                    {
                        y: 50,
                        opacity: 0,
                        duration: 0.8,
                    },
                    "-=0.5",
                )
                .from(
                    buttonsRef.current,
                    {
                        y: 30,
                        opacity: 0,
                        duration: 0.6,
                    },
                    "-=0.4",
                )
                .from(
                    socialsRef.current,
                    {
                        y: 20,
                        opacity: 0,
                        duration: 0.5,
                    },
                    "-=0.3",
                );
        },
        { scope: containerRef, dependencies: [] },
    );

    return (
        <section
            id="home"
            ref={containerRef}
            className="min-h-screen flex items-center justify-center"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                <p className="mb-10 mx-auto text-lg font-medium tracking-widest uppercase">
                    {t("hero.hello")}{" "}
                    <span className="themed-text font-extrabold">
                        {t("hero.me")}
                    </span>
                </p>

                <h1
                    ref={titleRef}
                    className="font-bold text-secondary-foreground mb-6"
                >
                    {t("hero.fullstack")}
                    <span className="themed-text"> {t("hero.dev")}</span>
                </h1>

                <p
                    ref={subtitleRef}
                    className="text-xl md:text-2xl mx-auto mb-10 text-secondary-foreground/50"
                >
                    {t("hero.desc")}
                </p>

                <div
                    ref={buttonsRef}
                    className="flex flex-row gap-4 justify-center items-center mb-12"
                >
                    <a href="#projects" className="btn-default">
                        {t("hero.viewWork")}
                    </a>
                    <a href="#contact" className="btn-outline">
                        {t("hero.getInTouch")}
                    </a>
                </div>

                <div ref={socialsRef} className="flex justify-center gap-6">
                    <a
                        href="https://github.com/psan3333"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-contrast group"
                    >
                        <RiGithubLine
                            size={22}
                            className="scale-110 group-hover:scale-120"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B9-%D1%86%D0%B0%D1%80%D0%B5%D0%B2-138787390/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-contrast group"
                    >
                        <FiLinkedin
                            size={22}
                            className="group-hover:scale-110 group-hover:text-surface-4"
                        />
                    </a>
                    <a
                        href="mailto:tsarev.alexey.work@gmail.com"
                        className="icon-contrast group"
                    >
                        <Mail
                            size={22}
                            className="group-hover:scale-110 group-hover:text-blue-400"
                        />
                    </a>
                </div>
            </div>

            <a
                href="#about"
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
            >
                <ArrowDown size={28} className="text-gray-400" />
            </a>
        </section>
    );
}
