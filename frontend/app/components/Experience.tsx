import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Calendar, MapPin } from "lucide-react";
import { cn } from "~/lib/utils";

const experiences = [
    {
        company: "StartupXYZ",
        role: "Full Stack Developer",
        period: "2021 - 2023",
        location: "Remote",
        description:
            "Built and maintained multiple client projects from scratch. Implemented real-time features and optimized application performance.",
        technologies: ["React Native", "Node.js", "MongoDB", "Firebase"],
    },
    {
        company: "Digital Agency Co.",
        role: "Frontend Developer",
        period: "2019 - 2021",
        location: "New York, NY",
        description:
            "Developed responsive websites and web applications for various clients. Collaborated with designers to implement pixel-perfect UIs.",
        technologies: ["JavaScript", "React", "CSS", "GSAP"],
    },
];

export function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const items = itemsRef.current?.children;
            if (!items) return;

            gsap.from(items, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                },
                x: -30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
            });
        },
        { scope: containerRef },
    );

    return (
        <section
            id="experience"
            ref={containerRef}
            className="py-24 bg-background"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        Work <span className="text-surface-2">Experience</span>
                    </h2>
                    <p className="text-foreground-muted mt-4 max-w-2xl mx-auto">
                        My professional journey in tech
                    </p>
                </div>

                <div className="relative">
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-secondary md:-translate-x-px" />

                    <div ref={itemsRef} className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "relative flex flex-col md:flex-row gap-8",
                                    index % 2 === 0
                                        ? "md:flex-row-reverse"
                                        : "",
                                )}
                            >
                                <div
                                    className={cn(
                                        "flex-1",
                                        index % 2 === 1
                                            ? "md:text-right"
                                            : "md:text-left",
                                    )}
                                >
                                    <div
                                        className={cn(
                                            "flex flex-col bg-secondary p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300",
                                            index % 2 === 1
                                                ? "items-end"
                                                : "items-start",
                                        )}
                                    >
                                        <h3 className="text-xl font-semibold text-foreground">
                                            {exp.role}
                                        </h3>
                                        <p className="text-surface-4 dark:text-surface-2 font-medium mt-1">
                                            {exp.company}
                                        </p>
                                        <div className="flex flex-wrap gap-4 mt-3 text-sm text-accent-foreground">
                                            <span className="flex items-center gap-1">
                                                <Calendar
                                                    size={14}
                                                    className="text-surface-4 dark:text-surface-2"
                                                />
                                                {exp.period}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MapPin
                                                    size={14}
                                                    className="text-surface-4 dark:text-surface-2"
                                                />
                                                {exp.location}
                                            </span>
                                        </div>
                                        <p className="text-muted-foreground mt-4 leading-relaxed">
                                            {exp.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mt-4 justify-end">
                                            {exp.technologies.map(
                                                (tech, techIndex) => (
                                                    <span
                                                        key={techIndex}
                                                        className="px-2 py-1 text-xs font-medium bg-background border border-muted text-foreground rounded hover:text-background hover:bg-foreground transition-colors duration-200"
                                                    >
                                                        {tech}
                                                    </span>
                                                ),
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute left-2 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-surface-2 rounded-full border-4 border-surface-4 dark:border-surface-2 shadow-lg z-10" />

                                <div className="flex-1" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
