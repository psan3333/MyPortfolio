import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { User, Code, Lightbulb, Rocket } from "lucide-react";

const aboutItems = [
    {
        icon: User,
        title: "About Me",
        description:
            "I am a passionate full-stack developer with expertise in building modern web and mobile applications. I love turning complex problems into simple, beautiful solutions.",
    },
    {
        icon: Code,
        title: "Development",
        description:
            "Specialized in React, Next.js, and TypeScript. I write clean, maintainable code and follow best practices for scalability and performance.",
    },
    {
        icon: Lightbulb,
        title: "Problem Solving",
        description:
            "I approach challenges with analytical thinking and creative solutions. Always eager to learn new technologies and improve existing skills.",
    },
    {
        icon: Rocket,
        title: "Innovation",
        description:
            "Constantly exploring new frontiers in web development. I stay updated with the latest trends and bring modern solutions to every project.",
    },
];

export function About() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const cards = cardsRef.current?.children;
            if (!cards) return;

            gsap.from(cards, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
                y: 60,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
            });
        },
        { scope: containerRef },
    );

    return (
        <section id="about" ref={containerRef} className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        About <span className="text-yandex-red">Me</span>
                    </h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Get to know more about me and what I do
                    </p>
                </div>

                <div
                    ref={cardsRef}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {aboutItems.map((item, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                        >
                            <div className="w-14 h-14 rounded-xl bg-yandex-red/10 flex items-center justify-center mb-4 group-hover:bg-yandex-red transition-colors duration-300">
                                <item.icon
                                    size={28}
                                    className="text-yandex-red group-hover:text-white transition-colors duration-300"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
