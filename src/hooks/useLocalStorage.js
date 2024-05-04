import { useState, useEffect } from "react";

export const useLocalStorage = (key, initialValue) => {

    const [ dataLocalStorage, setDataLocalStorage ] = useState(() => {
      const data = localStorage.getItem(key);
      console.log(data);  
      return (data) ? JSON.parse(data) : initialValue;
    });
    
    console.log(dataLocalStorage);
  
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(dataLocalStorage));
    }, [key, dataLocalStorage]);
  
    return [ dataLocalStorage, setDataLocalStorage ] ;
  }
  