import { useState } from "react";

export const useToggleCatalog = (initialValue) => {
    const [ isShowCatalog, setIsShowCatalog ] = useState(initialValue);

    const toggleShowCatalog = () => {
        setIsShowCatalog(prev => !prev);
    }

    return { isShowCatalog, toggleShowCatalog };
}
