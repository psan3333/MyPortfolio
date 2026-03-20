import type { IconType } from "react-icons/lib";
import { useTheme } from "~/hooks/useTheme";

const OpenCodeIcon: IconType = ({ size, className }) => {
    const theme = useTheme((state) => state.theme);

    return (
        <img
            className={className}
            src={`/opencode-${theme}.svg`}
            width={size}
            height={size}
        />
    );
};

export default OpenCodeIcon;
