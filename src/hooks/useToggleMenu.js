import { useState } from "react";

export const useToggleMenu = (initialValue) => {
    const [ isShowMenu, setIsShowMenu ] = useState(initialValue);

    const toggleMenu = () => {
        setIsShowMenu(prev => !prev);
    }

    return { isShowMenu, toggleMenu };
}
