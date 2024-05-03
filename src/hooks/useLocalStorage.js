import { useState, useEffect } from "react";

// если данные есть, то получить их,
// если данных нет - то записать данные

export const useLocalStorage = (initialValue, key) => {
    // initialValue - если LocalStorage пустой

    const getDataLocalStorage = () => {

        let data = localStorage.getItem(key); // data ? Null

        if(data) {
            return JSON.parse(data); // data
        } else {
            return initialValue; //  если LocalStorage пустой
        }
    }

    const [dataLocalStorage, setDataLocalStorage] = useState(getDataLocalStorage);

    // useEffect(() => {
    //     localStorage.setItem(key, JSON.stringify(dataLocalStorage));
    // }, [dataLocalStorage]);

    return { dataLocalStorage, setDataLocalStorage };
}