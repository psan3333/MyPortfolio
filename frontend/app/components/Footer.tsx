import { Mail } from "lucide-react";
import { FiLinkedin } from "react-icons/fi";
import { RiGithubLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";

export function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="bg-foreground py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex gap-4">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-secondary-foreground hover:bg-secondary text-background hover:text-foreground transition-all duration-300"
                        >
                            <RiGithubLine size={20} />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-secondary-foreground hover:bg-secondary text-background hover:text-foreground transition-all duration-300"
                        >
                            <FiLinkedin size={20} />
                        </a>
                        <a
                            href="mailto:hello@example.com"
                            className="p-3 rounded-full bg-secondary-foreground hover:bg-secondary text-background hover:text-foreground transition-all duration-300"
                        >
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div className="border-t border-background mt-8 pt-8 text-center">
                    <span className="text-muted flex items-center justify-center gap-2">
                        {t("footer.made")} {t("footer.with")} React,
                        TailwindCSS, GSAP, i18next {t("footer.and")} React
                        Router v7
                    </span>
                </div>
            </div>
        </footer>
    );
}
