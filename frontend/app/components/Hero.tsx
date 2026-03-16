import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowDown, Mail } from "lucide-react";
import { FiLinkedin } from "react-icons/fi";
import { RiGithubLine } from "react-icons/ri";
import { Link } from "react-router";
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
                <p className="mb-10 mx-auto text-sm font-medium text-yandex-red tracking-widest uppercase">
                    {t("hero.hello")}{" "}
                    <span className="text-surface-4 dark:text-surface-3 font-extrabold">
                        {t("hero.me")}
                    </span>
                </p>

                <h1
                    ref={titleRef}
                    className="text-5xl md:text-7xl font-bold text-secondary-foreground mb-6"
                >
                    {t("hero.fullstack")}
                    <span className="text-surface-4 dark:text-surface-3">
                        {" "}
                        {t("hero.dev")}
                    </span>
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
                    <Link to="#projects" className="btn-default">
                        {t("hero.viewWork")}
                    </Link>
                    <Link to="#contact" className="btn-outline">
                        {t("hero.getInTouch")}
                    </Link>
                </div>

                <div ref={socialsRef} className="flex justify-center gap-6">
                    <a
                        href="https://github.com"
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
                        href="https://linkedin.com"
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
                        href="mailto:hello@example.com"
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
