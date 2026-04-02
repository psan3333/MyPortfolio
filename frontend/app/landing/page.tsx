import { Hero } from "@/app/landing/ui/Hero";
import { About } from "@/app/landing/ui/About";
import { Projects } from "@/app/landing/ui/Projects";
import { TechStack } from "@/app/landing/ui/TechStack";
import { Experience } from "@/app/landing/ui/Experience";
import { ContactMe } from "@/app/landing/ui/ContactMe";
import { useTranslation } from "react-i18next";
import QA from "@/app/landing/ui/QA";
import { Navbar } from "@/app/landing/ui/Navbar";
import { Footer } from "@/app/landing/ui/Footer";
import { useOnMounted } from "../hooks/useMounted";
import { useLanguageUpdate } from "../hooks/useLanguageUpdate";
import { useThemeToggle } from "../hooks/useThemeToggle";
import { onMounted } from "../lib/utils";

export default function Home() {
    const { i18n } = useTranslation();

    const mounted = useOnMounted(onMounted);
    useLanguageUpdate();
    useThemeToggle();

    if (!mounted) return null;

    return (
        <div className="transition-colors duration-100">
            <Navbar />
            <title>Alexey Tsarev</title>
            <meta
                name="page description"
                content="On this page you can find information about Alexey Tsarev - Fullstack Developer from Russia, Barnaul. Right now I'm in search for a new job in development."
            />
            <main>
                <Hero />
                <About />
                <TechStack />
                <Projects />
                <Experience />
                <QA />
                <ContactMe lang={i18n.language} />
            </main>
            <Footer />
        </div>
    );
}
