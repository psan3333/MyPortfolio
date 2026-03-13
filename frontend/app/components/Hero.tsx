import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router";
import Text from "./ui/Text";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);
    const socialsRef = useRef<HTMLDivElement>(null);

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
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <p className="text-sm font-medium text-yandex-red mb-4 tracking-widest uppercase">
                    Hello, I'm
                </p>

                <h1
                    ref={titleRef}
                    className="text-5xl md:text-7xl font-bold text-secondary-foreground mb-6"
                >
                    Full Stack
                    <span className="text-surface-4"> Developer</span>
                </h1>

                <Text
                    ref={subtitleRef}
                    className="text-secondary-foreground/50"
                >
                    Building scalable web applications with modern technologies.
                    Passionate about creating exceptional user experiences.
                </Text>

                <div
                    ref={buttonsRef}
                    className="flex flex-row gap-4 justify-center items-center mb-12"
                >
                    <Link to="#projects" className="btn-default">
                        View My Work
                    </Link>
                    <Link to="#contact" className="btn-outline">
                        Get in Touch
                    </Link>
                </div>

                <div ref={socialsRef} className="flex justify-center gap-6">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-contrast group"
                    >
                        <Github
                            size={22}
                            className="group-hover:scale-110 transition-transform"
                        />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-contrast group"
                    >
                        <Linkedin
                            size={22}
                            className="group-hover:scale-110 transition-transform text-surface-4"
                        />
                    </a>
                    <a
                        href="mailto:hello@example.com"
                        className="icon-contrast group"
                    >
                        <Mail
                            size={22}
                            className="group-hover:scale-110 transition-transform"
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
