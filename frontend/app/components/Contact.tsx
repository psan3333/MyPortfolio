import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Github,
    Linkedin,
    Twitter,
} from "lucide-react";

const socials = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "hello@example.com",
        href: "mailto:hello@example.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+1 (555) 123-4567",
        href: "tel:+15551234567",
    },
    { icon: MapPin, label: "Location", value: "San Francisco, CA", href: "#" },
];

export function Contact() {
    const containerRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const infoRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.from(formRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                },
                x: -30,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
            });

            gsap.from(infoRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                },
                x: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
            });
        },
        { scope: containerRef },
    );

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <section id="contact" ref={containerRef} className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Get In <span className="text-yandex-red">Touch</span>
                    </h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Have a project in mind or want to collaborate? Feel free
                        to reach out!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="bg-white p-8 rounded-2xl shadow-lg"
                    >
                        <div className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yandex-red focus:ring-2 focus:ring-yandex-red/20 outline-none transition-all duration-200"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yandex-red focus:ring-2 focus:ring-yandex-red/20 outline-none transition-all duration-200"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yandex-red focus:ring-2 focus:ring-yandex-red/20 outline-none transition-all duration-200"
                                    placeholder="Project inquiry"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yandex-red focus:ring-2 focus:ring-yandex-red/20 outline-none transition-all duration-200 resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-yandex-red text-white font-semibold rounded-lg hover:bg-[#d62a12] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                            >
                                Send Message
                                <Send size={20} />
                            </button>
                        </div>
                    </form>

                    <div ref={infoRef} className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h3 className="text-xl font-semibold text-gray-900 mb-6">
                                Contact Information
                            </h3>
                            <div className="space-y-4">
                                {contactInfo.map((info, index) => (
                                    <a
                                        key={index}
                                        href={info.href}
                                        className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-yandex-red/10 flex items-center justify-center group-hover:bg-yandex-red transition-colors duration-200">
                                            <info.icon
                                                size={22}
                                                className="text-yandex-red group-hover:text-white transition-colors duration-200"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">
                                                {info.label}
                                            </p>
                                            <p className="font-medium text-gray-900">
                                                {info.value}
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h3 className="text-xl font-semibold text-gray-900 mb-6">
                                Follow Me
                            </h3>
                            <div className="flex gap-4">
                                {socials.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-yandex-red hover:text-white transition-all duration-300 group"
                                        aria-label={social.label}
                                    >
                                        <social.icon size={22} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
