import { useEffect, useEffectEvent, useState } from "react";

export const useOnMounted = (func: () => void) => {
    const [mounted, setMounted] = useState(false);
    const updateIsMounted = useEffectEvent(() => {
        setMounted(true);
    });

    useEffect(() => {
        updateIsMounted();
        func();
    }, [func]);

    return mounted;
}