import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import {
    SiNextdotjs,
    SiGsap,
    SiExpo,
    SiJavascript,
    SiTailwindcss,
    SiDrizzle,
    SiMongodb,
    SiSqlite,
} from "react-icons/si";
import { FaReact, FaCss3Alt } from "react-icons/fa";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { FaGolang } from "react-icons/fa6";
import type { IconType } from "react-icons/lib";
import ZustandIcon from "./icons/ZustandIcon";

type StackItem = {
    tech: string;
    className: string;
    Icon: IconType;
};

const technologies: StackItem[] = [
    { className: "text-[#3178C6]", tech: "TypeScript", Icon: BiLogoTypescript },
    { className: "text-[#61DAFB]", tech: "React", Icon: FaReact },
    { className: "text-[#0AE448]", tech: "GSAP", Icon: SiGsap },
    { className: "", tech: "Zustand", Icon: ZustandIcon },
    { className: "text-foreground", tech: "Expo", Icon: SiExpo },
    { className: "text-foreground", tech: "Next.js", Icon: SiNextdotjs },
    {
        className:
            "text-[#dac614] bg-foreground dark:bg-transparent dark:text-[#F7E018]",
        tech: "JavaScript",
        Icon: SiJavascript,
    },
    { className: "text-[#35BEF8]", tech: "TailwindCSS", Icon: SiTailwindcss },
    { className: "text-[#3158e4]", tech: "CSS", Icon: FaCss3Alt },
    { className: "text-[#00ACD7]", tech: "Go", Icon: FaGolang },
    { className: "text-[#C5F74F]", tech: "Drizzle", Icon: SiDrizzle },
    { className: "text-[#2F6792]", tech: "PostgreSQL", Icon: BiLogoPostgresql },
    {
        className: "text-[#00684A] dark:text-[#00ED64]",
        tech: "MongoDB",
        Icon: SiMongodb,
    },
    { className: "text-[#057AC9]", tech: "SQLite", Icon: SiSqlite },
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

    const RollingList = () => {
        return (
            <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-secondary to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-secondary to-transparent z-10 pointer-events-none" />

                <div
                    ref={trackRef}
                    className="flex gap-8 whitespace-nowrap w-max"
                >
                    {[...technologies, ...technologies].map((item, index) => {
                        const { Icon, tech, className } = item;
                        return (
                            <div
                                key={`${tech}-${index}`}
                                className="inline-flex items-center gap-3 px-6 py-3 backdrop-blur-sm rounded-full"
                            >
                                <Icon size={64} className={className} />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    };

    return (
        <section
            id="tech"
            ref={containerRef}
            className="py-20 bg-secondary overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
                    Tech <span className="text-">Stack</span>
                </h2>
                <p className="text-surface-1 text-center mt-4 max-w-xl mx-auto">
                    Technologies I work with to build amazing applications
                </p>
            </div>

            <RollingList />
        </section>
    );
}
