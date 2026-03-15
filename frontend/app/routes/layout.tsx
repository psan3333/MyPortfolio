import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { Outlet } from "react-router";
import { Footer } from "~/components/Footer";
import { Navbar } from "~/components/Navbar";
import { cn } from "~/lib/utils";

const Layout: React.FC<
    React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    >
> = ({ className }) => {
    return (
        <div className={cn(className, "transition-colors duration-100")}>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
