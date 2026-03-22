export const TechBadge = ({
    tech,
    techIndex,
}: {
    tech: string;
    techIndex: number;
}) => (
    <span
        key={techIndex}
        className="px-2 py-1 text-xs font-medium bg-background border border-muted text-foreground rounded hover:text-background hover:bg-foreground transition-colors duration-200"
    >
        {tech}
    </span>
);
