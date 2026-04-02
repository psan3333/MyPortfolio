export const TechBadge = ({ tech }: { tech: string }) => (
    <span className="px-2 py-1 text-xs font-medium bg-background border border-muted text-foreground rounded hover:text-background hover:bg-foreground transition-colors duration-200">
        {tech}
    </span>
);
