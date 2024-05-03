import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import CatalogImg from "./img/catalog-img.jpg";
import Basket from "./components/Basket";
import { useToggle } from "./hooks/useToggle";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { getProducts } from "./API/getProducts";

const App = () => {
  const [isShowCatalog, setIsShowCatalog] = useState(false);
  const [isShowBasket, setIsShowBasket] = useState(false);
  const [isToggleActive, setisToggleActive] = useState(false);
  const { isShowMenu, toggleMenu } = useToggle(false);
  // const { dataLocalStorage, setDataLocalStorage } = useLocalStorage([], 'basket');
  const [products, setProducts] = useState([]);
  // const url = 'http://localhost:3000';

  useEffect(() => {
    (async () => {
      try {
        const data = await getProducts();
        // setProducts(data);
        console.log(data);

      } catch( error ) {
        console.log('Fetch error !!!');
      }
    })();
  }, []);

  // useEffect(() => {
    // fetch('http://localhost:5000/products')
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(error => console.error(error));
  // }, []);

  return (
    <div className={`container ${ isToggleActive && "active" }`}>

      <Header 
        toggleMenu={ toggleMenu } 
        setShowCatalog={ setIsShowCatalog } 
        setShowBasket={ setIsShowBasket } 
        setToggleActive={ setisToggleActive } 
      />

      <BurgerMenu isShowMenu={ isShowMenu } toggleMenu={ toggleMenu } />

      {
        isShowCatalog && 
          <div className="catalog-menu">
              <img src={ CatalogImg } alt="" />
          </div>
      }

      {
        isShowBasket && <Basket 
          setShowBasket={ setIsShowBasket } 
          setToggleActive={ setisToggleActive } 
          setShowCatalog={ setIsShowCatalog }
        />
      }

    </div>
  )
}  

export default App;


