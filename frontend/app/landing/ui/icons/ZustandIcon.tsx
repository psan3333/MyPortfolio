"use client";

import Image from "next/image";
import type { IconType } from "react-icons/lib";

const ZustandIcon: IconType = ({ size, className }) => {
    return (
        <Image
            className={className}
            src="/Zustand.svg"
            width={size as number}
            height={size as number}
            alt="Zustand brand Icon"
        />
    );
};

export default ZustandIcon;
