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
                            href="https://github.com/psan3333"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-secondary-foreground hover:bg-secondary text-background hover:text-foreground transition-all duration-300"
                        >
                            <RiGithubLine size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B9-%D1%86%D0%B0%D1%80%D0%B5%D0%B2-138787390/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-secondary-foreground hover:bg-secondary text-background hover:text-foreground transition-all duration-300"
                        >
                            <FiLinkedin size={20} />
                        </a>
                        <a
                            href="mailto:tsarev.alexey.work@gmail.com"
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
