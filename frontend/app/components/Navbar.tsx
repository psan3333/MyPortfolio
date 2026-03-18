import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import { cn } from "~/lib/utils";
import { useTheme } from "~/hooks/useTheme";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const navItems = [
    { name: "home", href: "#home" },
    { name: "about", href: "#about" },
    { name: "techStack", href: "#tech" },
    { name: "projects", href: "#projects" },
    { name: "experience", href: "#experience" },
    { name: "contact", href: "#contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const theme = useTheme((state) => state.theme);
    const setTheme = useTheme((state) => state.setTheme);
    const toggleTheme = useTheme((state) => state.toggleTheme);
    const { t } = useTranslation();
    const { contextSafe } = useGSAP();
    const scrollToSection = contextSafe((sectionId: string) => {
        gsap.to(window, {
            duration: 0.75,
            scrollTo: {
                y: sectionId,
                offsetY: 120,
            },
            ease: "power1.inOut",
        });
    });

    useEffect(() => {
        const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)",
        ).matches;
        setTheme(prefersDark ? "dark" : "light");

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [setTheme]);

    useEffect(() => {
        // setup Tailwind CSS theming
        document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-secondary/35 backdrop-blur-md shadow-md py-3"
                    : "bg-transparent py-5",
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <Link
                        to="/"
                        className="text-2xl font-bold text-surface-4 tracking-tight"
                    >
                        psan3333
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(item.href);
                                }}
                            >
                                {t(`nav.${item.name}`)}
                            </button>
                        ))}
                        <button
                            className="icon-contrast"
                            onClick={() => toggleTheme()}
                        >
                            Theme
                        </button>
                        <LanguageSwitcher />
                    </div>

                    <button
                        className="md:hidden p-2 text-gray-700"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X size={24} />
                        ) : (
                            <Menu size={24} />
                        )}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-4 py-4 space-y-3">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="block text-base font-medium text-muted-foreground transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {t(`nav.${item.name}`)}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
