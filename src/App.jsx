import "./scss/App.scss";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import CatalogImg from "./img/catalog-img.jpg";
import Basket from "./components/Basket";
import { getProducts } from "./API/getProducts";
import { getCategory } from "./API/getCategory";
import { Products } from "./components/Products";
import { useToggleMenu } from "./hooks/useToggleMenu";
import { useToggleCatalog } from "./hooks/useToggleCatalog";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useToggleBasket } from "./hooks/useToggleBasket";

const App = () => {
  const [ products, setProducts ] = useState([]);
  const [ selectCategory, setSelectCategory ] = useState(3); 
  const [ categoryData, setCategoryData ] = useState([]); 
  const { isShowMenu, toggleMenu } = useToggleMenu(false);
  const { isShowBasket, toggleShowBasket } = useToggleBasket(false);
  const { isShowCatalog, toggleShowCatalog } = useToggleCatalog(false);
  const [ dataLocalStorage, setDataLocalStorage ] = useLocalStorage('basket', []);
  console.log(dataLocalStorage);

  useEffect(() => {
    (async () => {
      try {
        const data = await getProducts(selectCategory);
        console.log(selectCategory);
        setProducts(data);
        console.log(data);

      } catch( error ) {
        console.log('Fetch error !!!');
      }
    })();
  }, [selectCategory]);

  useEffect(() => {
    (async () => {
      try {
        const dataCat = await getCategory();
        setCategoryData(dataCat);
        console.log(dataCat);

      } catch( error ) {
        console.log('Fetch error !!!');
      }
    })();
  }, []);

  const buyProdHandler = (e) => {
    const buyProdId = e.target.dataset.id;
    console.log(buyProdId);
    const buyProd = products.find(item => item.id === buyProdId)
    console.log(buyProd);

    setDataLocalStorage([...dataLocalStorage, buyProd]); 
  }

  const delProdHandler = (newData) => {
    console.log(newData);

    setDataLocalStorage(newData); 
  }

  return (
    <div className="container">

      <Header 
        toggleMenu={ toggleMenu } 
        toggleShowCatalog={ toggleShowCatalog } 
        toggleShowBasket={ toggleShowBasket } 
      />

      <BurgerMenu isShowMenu={ isShowMenu } toggleMenu={ toggleMenu } />

      <Products 
        products={products} 
        categoryData={ categoryData }
        selectCategory={ selectCategory }
        setSelectCategory={ setSelectCategory } 
        buyProdHandler={ buyProdHandler }
      />

      {
        isShowCatalog && 
          <div className="catalog-menu">
            <div className="catalog-menu__content">
              <img src={ CatalogImg } alt="" />
            </div>
          <div className="catalog-menu__close" onClick={ toggleShowCatalog }>x</div>
        </div>
      }

      {
        isShowBasket && <Basket 
          isShowBasket={ isShowBasket }
          toggleShowBasket={ toggleShowBasket } 
          delProdHandler={ delProdHandler }
        />
      }

    </div>
  )
}  

export default App;


