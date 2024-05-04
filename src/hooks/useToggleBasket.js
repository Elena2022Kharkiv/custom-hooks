import { useState } from "react";

export const useToggleBasket = (initialValue) => {
    const [isShowBasket, setIsShowBasket] = useState(initialValue);

    const toggleShowBasket = () => {
        setIsShowBasket(prev => !prev);
    }

    return { isShowBasket, toggleShowBasket };
}