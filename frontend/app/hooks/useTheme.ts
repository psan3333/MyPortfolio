import { create } from "zustand";

interface ThemeStore {
    theme: string;
    toggleTheme: () => void;
    setTheme: (theme: string) => void;
}

export const useTheme = create<ThemeStore>((set) => ({
    theme: "light",
    toggleTheme: () =>
        set((state) => ({
            ...state,
            theme: state.theme === "dark" ? "light" : "dark",
        })),
    setTheme: (theme) => set((state) => ({ ...state, theme: theme })),
}));
