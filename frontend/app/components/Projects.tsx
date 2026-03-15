import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "E-Commerce Platform",
        description:
            "A full-featured online store built with Next.js, featuring cart management, user authentication, and payment integration.",
        tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
        image: "bg-gradient-to-br from-[#FC3215] to-[#FF6B35]",
    },
    {
        title: "Task Management App",
        description:
            "A collaborative task management application with real-time updates, team workspaces, and drag-and-drop interface.",
        tags: ["React", "Firebase", "GSAP", "TailwindCSS"],
        image: "bg-gradient-to-br from-[#0077FF] to-[#00D4FF]",
    },
    {
        title: "Social Media Dashboard",
        description:
            "Analytics dashboard for social media management with charts, scheduling, and engagement tracking features.",
        tags: ["React Native", "Expo", "MongoDB", "Node.js"],
        image: "bg-gradient-to-br from-[#00B341] to-[#7ED957]",
    },
    {
        title: "Portfolio Generator",
        description:
            "A tool that helps developers create beautiful portfolio websites with customizable themes and templates.",
        tags: ["TypeScript", "Go", "Drizzle", "SQLite"],
        image: "bg-gradient-to-br from-[#9B59B6] to-[#E74C3C]",
    },
];

export function Projects() {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const cards = cardsRef.current?.children;
            if (!cards) return;

            gsap.from(cards, {
                scrollTrigger: {
                    trigger: cardsRef.current,
                    start: "top 70%",
                    markers: true,
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
        <section id="projects" className="py-24 bg-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2
                        ref={titleRef}
                        className="text-3xl md:text-4xl font-bold"
                    >
                        Featured <span>Projects</span>
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto">
                        Here are some of the projects I've worked on
                    </p>
                </div>

                <div ref={cardsRef} className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-500 group"
                        >
                            <div
                                className={`h-56 ${project.image} relative overflow-hidden`}
                            >
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-4">
                                    <a
                                        href="#"
                                        className="p-3 bg-white rounded-full hover:bg-yandex-red hover:text-white transition-colors duration-300"
                                    >
                                        <Github size={20} />
                                    </a>
                                    <a
                                        href="#"
                                        className="p-3 bg-white rounded-full hover:bg-yandex-red hover:text-white transition-colors duration-300"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-yandex-red transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
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
                        <Github size={20} />
                        View More on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}
