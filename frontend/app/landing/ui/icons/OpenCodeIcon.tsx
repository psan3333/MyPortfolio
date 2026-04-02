"use client";

import type { IconType } from "react-icons/lib";
import { useTheme } from "@/app/hooks/useTheme";
import Image from "next/image";

const OpenCodeIcon: IconType = ({ size, className }) => {
    const theme = useTheme((state) => state.theme);

    return (
        <Image
            className={className}
            src={`/opencode-${theme}.svg`}
            width={size as number}
            height={size as number}
            alt="OpenCode brand Icon"
        />
    );
};

export default OpenCodeIcon;
