import type { Route } from "./+types/home";
import { Hero } from "~/components/Hero";
import { Navbar } from "~/components/Navbar";
import { About } from "~/components/About";
import { Projects } from "~/components/Projects";
import { TechStack } from "~/components/TechStack";
import { Experience } from "~/components/Experience";
import { Contact } from "~/components/Contact";
import { Footer } from "~/components/Footer";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <About />
                <TechStack />
                <Projects />
                <Experience />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
