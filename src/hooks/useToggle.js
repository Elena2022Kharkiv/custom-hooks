import { useState } from "react";

// useToggle - хук открывает/закрывает бургер-меню розетки 

export const useToggle = (initialValue) => {
    const [ isShowMenu, setIsShowMenu ] = useState(initialValue);

    const toggleMenu = () => {
        setIsShowMenu(prev => !prev);
    }

    return { isShowMenu, toggleMenu };
}

// export const useToggle = (initialValue) => {
//     const [isShow, setIsShow] = useState(initialValue);

//     const toggleShow = () => {
//         setIsShow(prev => !prev);
//     }

//     return { isShow, toggleShow };
// }