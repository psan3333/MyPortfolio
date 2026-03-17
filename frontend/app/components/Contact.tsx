import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

export function Contact() {
    const getInTouchRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        let split = SplitText.create(getInTouchRef.current, {
            type: "words, chars",
        });
        gsap.from(split.chars, {
            scrollTrigger: {
                trigger: getInTouchRef.current,
                start: "top 80%",
                markers: true,
            },
            x: 30,
            opacity: 0,
            duration: 0.5,
            stagger: 0.05,
            ease: "power3.out",
        });
        gsap.from(".suggestion", {
            scrollTrigger: {
                trigger: getInTouchRef.current,
                start: "top 80%",
            },
            x: 30,
            opacity: 0,
            duration: 0.3,
            ease: "power3.out",
        });
    });

    return (
        <section id="contact" className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2
                        ref={getInTouchRef}
                        className="text-3xl md:text-4xl font-bold text-foreground"
                    >
                        Get In <span className="text-yandex-red">Touch</span>
                    </h2>
                    <p className="suggestion text-secondary-foreground mt-4 max-w-2xl mx-auto">
                        Have a project in mind or want to collaborate? Feel free
                        to reach out!
                    </p>
                </div>
            </div>
        </section>
    );
}
