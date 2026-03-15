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
    const cardsRef = useRef<HTMLDivElement>(null);

    const { contextSafe } = useGSAP(
        (context, contextSafe) => {
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

    const onMouseEnter = contextSafe!((card: Element) => {
        gsap.to(card, {
            scale: 1.02,
            duration: 0.3,
            ease: "power3.out",
        });
    });
    const onMouseLeave = contextSafe!((card: Element) => {
        gsap.to(card, {
            scale: 1,
            duration: 0.3,
            ease: "power3.out",
        });
    });

    return (
        <section id="about" className="py-24 bg-background">
            <div className="mx-auto px-8 sm:px-16 lg:px-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        About <span className="text-surface-3">Me</span>
                    </h2>
                    <p className="text-secondary-foreground mt-4 max-w-2xl mx-auto">
                        Get to know more about me and what I do
                    </p>
                </div>

                <div
                    ref={cardsRef}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-12"
                >
                    {aboutItems.map((item, index) => (
                        <div
                            key={index}
                            onMouseEnter={(e) => onMouseEnter(e.currentTarget)}
                            onMouseLeave={(e) => onMouseLeave(e.currentTarget)}
                            className="p-6 rounded-2xl bg-accent hover:bg-background hover:shadow-xl transition-colors duration-300 border border-accent-foreground/10 group"
                        >
                            <div className="w-14 h-14 rounded-xl bg-surface-4/10 flex items-center justify-center mb-4 group-hover:bg-surface-3/10 transition-colors duration-300">
                                <item.icon
                                    size={28}
                                    className="text-surface-4 dark:text-surface-1 group-hover:text-foreground transition-colors duration-300"
                                />
                            </div>
                            <h4 className="text-accent-foreground mb-3">
                                {item.title}
                            </h4>
                            <p className="text-accent-foreground/70 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
