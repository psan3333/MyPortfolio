import { zustandIcon } from "public/images";
import type { IconType } from "react-icons/lib";

const ZustandIcon: IconType = ({ size, className }) => {
    return (
        <img
            className={className}
            src={zustandIcon}
            width={size}
            height={size}
        />
    );
};

export default ZustandIcon;
