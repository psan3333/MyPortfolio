import { Outlet } from "react-router";
import { Footer } from "~/components/Footer";
import { Navbar } from "~/components/Navbar";
import { useOnMounted } from "~/hooks/useMounted";
import { cn, onMounted } from "~/lib/utils";
import { useLanguageUpdate } from "~/hooks/useLanguageUpdate";
import { useThemeToggle } from "~/hooks/useThemeToggle";

const Layout: React.FC<
    React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    >
> = ({ className }) => {
    const mounted = useOnMounted(onMounted);
    useLanguageUpdate();
    useThemeToggle();

    if (!mounted) return null;

    return (
        <div className={cn(className, "transition-colors duration-100")}>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
