import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { User, Code, Lightbulb, Rocket } from "lucide-react";
import { useTranslation } from "react-i18next";

const aboutIcons = [User, Code, Lightbulb, Rocket];

export function About() {
    const cardsRef = useRef<HTMLDivElement>(null);
    const { t } = useTranslation();

    const { contextSafe } = useGSAP(
        (context, contextSafe) => {
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
                        {t("aboutMe.about")}{" "}
                        <span className="text-surface-3">
                            {t("aboutMe.me")}
                        </span>
                    </h2>
                    <p className="text-secondary-foreground mt-4 max-w-2xl mx-auto">
                        {t("aboutMe.title")}
                    </p>
                </div>

                <div
                    ref={cardsRef}
                    className="grid md:grid-cols-2 2xl:grid-cols-4 gap-12"
                >
                    {aboutIcons.map((Icon, index) => (
                        <div
                            key={index}
                            onMouseEnter={(e) => onMouseEnter(e.currentTarget)}
                            onMouseLeave={(e) => onMouseLeave(e.currentTarget)}
                            className="p-6 rounded-2xl bg-accent hover:bg-background hover:shadow-xl transition-colors duration-300 border border-accent-foreground/10 group"
                        >
                            <div className="w-14 h-14 rounded-xl bg-surface-4/10 flex items-center justify-center mb-4 group-hover:bg-surface-3/10 transition-colors duration-300">
                                <Icon
                                    size={28}
                                    className="themed-text group-hover:text-foreground transition-colors duration-300"
                                />
                            </div>
                            <h4 className="text-accent-foreground mb-3">
                                {t(`aboutMe.${index}.title`)}
                            </h4>
                            <p className="text-[18px] lg:text-[22px] text-accent-foreground/70 leading-relaxed">
                                {t(`aboutMe.${index}.text`)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
