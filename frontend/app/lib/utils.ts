import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText, ScrollToPlugin } from "gsap/all";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function onMounted() {
    const plugins = [useGSAP, ScrollTrigger, SplitText, ScrollToPlugin];
    gsap.registerPlugin(...plugins);
}
