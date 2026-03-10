import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const technologies = [
    "TypeScript",
    "React",
    "GSAP",
    "Zustand",
    "Expo",
    "React Native",
    "Next.js",
    "JavaScript",
    "TailwindCSS",
    "CSS",
    "Go",
    "Drizzle",
    "Mongoose",
    "PostgreSQL",
    "MongoDB",
    "SQLite",
];

export function TechStack() {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const track = trackRef.current;
            if (!track) return;

            const totalWidth = track.scrollWidth / 2;

            gsap.to(track, {
                x: -totalWidth,
                duration: 20,
                repeat: -1,
                ease: "none",
                modifiers: {
                    x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
                },
            });
        },
        { scope: containerRef },
    );

    return (
        <section
            id="tech"
            ref={containerRef}
            className="py-20 bg-gray-900 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
                    Tech <span className="text-yandex-red">Stack</span>
                </h2>
                <p className="text-gray-400 text-center mt-4 max-w-xl mx-auto">
                    Technologies I work with to build amazing applications
                </p>
            </div>

            <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-gray-900 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-gray-900 to-transparent z-10 pointer-events-none" />

                <div
                    ref={trackRef}
                    className="flex gap-8 whitespace-nowrap"
                    style={{ width: "max-content" }}
                >
                    {[...technologies, ...technologies].map((tech, index) => (
                        <div
                            key={index}
                            className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                        >
                            <span className="w-2 h-2 bg-yandex-red rounded-full" />
                            <span className="text-white font-medium">
                                {tech}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
