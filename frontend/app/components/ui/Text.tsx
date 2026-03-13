import React from "react";
import { cn } from "~/lib/utils";

const Text: React.FC<
    React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLParagraphElement>,
        HTMLParagraphElement
    >
> = ({ className, children, ...props }) => {
    return (
        <p
            className={cn(
                "text-xl md:text-2xl text-foreground mb-10 max-w-2xl mx-auto leading-relaxed",
                className,
            )}
            {...props}
        >
            {children}
        </p>
    );
};

export default Text;
