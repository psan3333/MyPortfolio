import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

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
                    className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
                >
                    Full Stack
                    <span className="text-yandex-red"> Developer</span>
                </h1>

                <p
                    ref={subtitleRef}
                    className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                    Building scalable web applications with modern technologies.
                    Passionate about creating exceptional user experiences.
                </p>

                <div
                    ref={buttonsRef}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                >
                    <a href="#projects">
                        <Button
                            variant="outline"
                            size="lg"
                            className="px-8 py-6 border-2 border-chart-2 font-bold rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-foreground hover:text-background"
                        >
                            View My Work
                        </Button>
                    </a>
                    <a href="#contact">
                        <Button
                            variant="outline"
                            size="lg"
                            className="px-8 py-6 border-2 border-chart-2 font-bold rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-foreground hover:text-background"
                        >
                            Get In Touch
                        </Button>
                    </a>
                </div>

                <div ref={socialsRef} className="flex justify-center gap-6">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-gray-100 hover:bg-gray-900 hover:text-white transition-all duration-300 group"
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
                        className="p-3 rounded-full bg-gray-100 hover:bg-yandex-blue hover:text-white transition-all duration-300 group"
                    >
                        <Linkedin
                            size={22}
                            className="group-hover:scale-110 transition-transform"
                        />
                    </a>
                    <a
                        href="mailto:hello@example.com"
                        className="p-3 rounded-full bg-gray-100 hover:bg-yandex-green hover:text-white transition-all duration-300 group"
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
