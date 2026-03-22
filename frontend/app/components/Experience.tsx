import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Calendar, MapPin } from "lucide-react";
import { cn } from "~/lib/utils";
import { useTranslation } from "react-i18next";
import { TechBadge } from "./TechBadge";

const technologies = [
    {
        period: "09.2024 - 06.2025",
        tech: ["PyTorch", "Python", "Genesis", "Deep Learning"],
    },
    {
        period: "02.2023 - 12.2023",
        tech: ["Python", "C++", "C#", "OpenCV"],
    },
];

export function Experience() {
    const itemsRef = useRef<HTMLDivElement>(null);
    const { t } = useTranslation();

    useGSAP(() => {
        const items = itemsRef.current?.children;
        if (!items) return;

        gsap.from(items, {
            scrollTrigger: {
                trigger: itemsRef.current,
                start: "top 70%",
                // markers: true,
            },
            x: -30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
        });
    });

    return (
        <section id="experience" className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2>
                        {t("experience.work")}{" "}
                        <span className="themed-text">
                            {t("experience.experience")}
                        </span>
                    </h2>
                    <p className="text-foreground-muted mt-4 max-w-2xl mx-auto">
                        {t("experience.label")}
                    </p>
                </div>

                <div className="relative">
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-secondary md:-translate-x-px" />

                    <div ref={itemsRef} className="space-y-12">
                        {technologies.map(({ period, tech }, index) => (
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
                                        <h4>
                                            {t(
                                                `experience.jobsList.${index}.title`,
                                            )}
                                        </h4>
                                        <p className="themed-text font-medium mt-1">
                                            {t(
                                                `experience.jobsList.${index}.company`,
                                            )}
                                        </p>
                                        <div className="flex flex-wrap gap-4 mt-3 text-sm text-accent-foreground">
                                            <span className="flex items-center gap-1">
                                                <Calendar
                                                    size={14}
                                                    className="themed-text"
                                                />
                                                {period}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MapPin
                                                    size={14}
                                                    className="themed-text"
                                                />
                                                {t(
                                                    `experience.jobsList.${index}.location`,
                                                )}
                                            </span>
                                        </div>
                                        <p className="text-muted-foreground mt-4 leading-relaxed">
                                            {t(
                                                `experience.jobsList.${index}.desc`,
                                            )}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mt-4 justify-end">
                                            {tech.map((tech, techIndex) => (
                                                <TechBadge
                                                    tech={tech}
                                                    techIndex={techIndex}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute left-2 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-surface-4 dark:border-surface-2 shadow-lg z-10" />

                                <div className="flex-1" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
