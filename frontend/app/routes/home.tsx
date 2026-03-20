import { Hero } from "~/components/Hero";
import { About } from "~/components/About";
import { Projects } from "~/components/Projects";
import { TechStack } from "~/components/TechStack";
import { Experience } from "~/components/Experience";
import { ContactMe } from "~/components/ContactMe";
import { useTranslation } from "react-i18next";

export default function Home() {
    const { i18n } = useTranslation();

    return (
        <>
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
                <ContactMe lang={i18n.language} />
            </main>
        </>
    );
}
