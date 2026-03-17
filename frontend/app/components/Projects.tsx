import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ExternalLink } from "lucide-react";
import { RiGithubLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";

const projects = [
    {
        title: "FLAT",
        tags: ["Next.js", "TypeScript", "MongoDB", "Prisma ORM", "Yandex Maps"],
        image: "bg-gradient-to-br from-[#e9ac3b] to-[#e0cb0e]",
    },
    {
        title: "Schedule",
        tags: ["Expo", "Drizzle ORM", "Expo-SQLite", "Zustand"],
        image: "bg-gradient-to-br from-[#0aad46] to-[#93e76f]",
    },
    {
        title: "Collab Bot",
        tags: ["Python", "Telegram API", "Mongo DB", "Docker"],
        image: "bg-gradient-to-br from-[#0077FF] to-[#45d5f1]",
    },
    {
        title: "Secret Project",
        tags: ["Typescript", "Go", "Next.js", "PostgreSQL", "Yandex Maps"],
        image: "bg-gradient-to-br from-[#fd54a3] to-[#bd0360]",
    },
];

export function Projects() {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);
    const { t } = useTranslation();

    useGSAP(
        () => {
            const cards = cardsRef.current?.children;
            if (!cards) return;

            gsap.from(cards, {
                scrollTrigger: {
                    trigger: cardsRef.current,
                    start: "top 70%",
                    // markers: true,
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
            });
        },
        { scope: cardsRef },
    );

    return (
        <section id="projects" className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2
                        ref={titleRef}
                        className="text-3xl md:text-4xl font-bold"
                    >
                        {t("projects.featured")}{" "}
                        <span>{t("projects.projects")}</span>
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto">
                        {t("projects.label")}
                    </p>
                </div>

                <div ref={cardsRef} className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="flex flex-col bg-secondary rounded-2xl overflow-hidden shadow-muted-foreground shadow-md hover:shadow-lg transition-shadow duration-500 group"
                        >
                            <div
                                className={`h-56 ${project.image} relative overflow-hidden`}
                            >
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-4">
                                    <a
                                        href="#"
                                        className="icon-contrast bg-foreground/5 backdrop-blur-md"
                                    >
                                        <RiGithubLine size={20} />
                                    </a>
                                    <a
                                        href="#"
                                        className="icon-contrast bg-foreground/5 backdrop-blur-md"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col justify-between items-start">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-yandex-red transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {t(`projects.projList.${project.title}`)}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-3 py-1 text-xs font-medium bg-background text-foreground rounded hover:bg-foreground hover:text-background transition-colors duration-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 font-medium rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300"
                    >
                        <RiGithubLine size={20} />
                        View More on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}
