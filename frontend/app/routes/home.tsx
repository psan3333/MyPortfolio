import type { Route } from "./+types/home";
import { Hero } from "~/components/Hero";
import { About } from "~/components/About";
import { Projects } from "~/components/Projects";
import { TechStack } from "~/components/TechStack";
import { Experience } from "~/components/Experience";
import { Contact } from "~/components/Contact";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Alexey Tsarev" },
        {
            name: "page description",
            content:
                "On this page you can find information about Alexey Tsarev - Fullstack Developer from Russia, Barnaul. Right now I'm in search for a new job in development.",
        },
    ];
}

export default function Home() {
    return (
        <main>
            <Hero />
            <About />
            <TechStack />
            <Projects />
            <Experience />
            <Contact />
        </main>
    );
}
