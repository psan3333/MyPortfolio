import type { IconType } from "react-icons/lib";

const ZustandIcon: IconType = ({ size, className }) => {
    return (
        <img
            className={className}
            src="/Zustand.svg"
            width={size}
            height={size}
        />
    );
};

export default ZustandIcon;
