import { useState, useEffect } from "react";

const useScreenWidth = (screenwidth) => {
    const [onSmallScreen, setOnSmallScreen] = useState(false);

    

    useEffect(() => {  

        const checkScreenSize = () => {
            setOnSmallScreen(window.innerWidth < screenwidth)
        }

        checkScreenSize()
        window.addEventListener('resize', checkScreenSize)

        return () => {
            window.removeEventListener('resize', checkScreenSize)
        }
    }, [screenwidth])
    return onSmallScreen;
}

export default useScreenWidth;