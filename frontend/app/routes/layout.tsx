import { Outlet } from "react-router";
import { Footer } from "~/components/Footer";
import { Navbar } from "~/components/Navbar";
import { useOnMounted } from "~/hooks/useMounted";
import { cn } from "~/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText, ScrollToPlugin } from "gsap/all";

const Layout: React.FC<
    React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    >
> = ({ className }) => {
    const mounted = useOnMounted(() => {
        const plugins = [useGSAP, ScrollTrigger, SplitText, ScrollToPlugin];
        gsap.registerPlugin(...plugins);
    });

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
