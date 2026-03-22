import { useEffect } from "react";
import { useTheme } from "./useTheme";

export const useThemeToggle = () => {
    const theme = useTheme((state) => state.theme);
    const setTheme = useTheme((state) => state.setTheme);

    useEffect(() => {
        const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)",
        ).matches;
        const savedTheme = localStorage.getItem("theme");
        setTheme(savedTheme ? savedTheme : prefersDark ? "dark" : "light");
    }, [setTheme]);

    useEffect(() => {
        // setup Tailwind CSS theming
        document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);
}