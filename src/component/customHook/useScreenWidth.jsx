import { useState, useEffect, useCallback } from "react";

const useScreenWidth = (screenwidth) => {
    const [onSmallScreen, setOnSmallScreen] = useState(false);

    const checkScreenSize = useCallback(() => {
        setOnSmallScreen(window.innerWidth < screenwidth)
    }, [screenwidth])

    useEffect(() => {  
        checkScreenSize()
        window.addEventListener('resize', checkScreenSize)

        return () => {
            window.removeEventListener('resize', checkScreenSize)
        }
    }, [checkScreenSize])
    return onSmallScreen;
}

export default useScreenWidth;