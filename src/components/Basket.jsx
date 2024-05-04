import BasketImg from "./../img/cart-img.png";
import "./../scss/Basket.scss";
import { getSumm } from "./../utils/functions";
import { useState, useEffect } from "react";

const Basket = (props) => {
    const { toggleShowBasket, delProdHandler } = props;
    const [ basketProducts, setBasketProducts ] = useState([]);
    const [ update, setUpData ] = useState(false);
    const hide = (basketProducts.length === 0) ? "hide" : '';
    const show = (basketProducts.length === 0) ? '' : "hide";

    useEffect(() => {
        const data = localStorage.getItem('basket');
        const basketData = (data) ? JSON.parse(data) : [];

        setBasketProducts(basketData);
        console.log(basketProducts); 
    }, []);
  
    const delProductHandler = (e) => {
        console.log(e.target);
        const delProdId = e.target.dataset.id;
        console.log(delProdId);

        const newData = basketProducts.filter(item => item.id !== delProdId)
        console.log(newData);  
        
        setBasketProducts(newData);
        setUpData(true);

        delProdHandler(newData);  
    }

    return (
      <div className="basket">
        <div className="basket__container">
       
          <div className="basket__close" onClick={ toggleShowBasket }>x</div>
          <img className="basket__img" src={ BasketImg } alt="" /> 
          <p className={`basket__text ${show}`}>Кошик порожній</p>

          <div className={`products-list ${hide}`}>
            <h2 className="products-list__title">Products</h2>
              <ul className="products-list__content"> 
                {
                  basketProducts.map(product => 
                    <li className="products-list__item" key={ product.id }>

                      { product.title } &nbsp;  
                      <span>Price: { product.price } Category: { product.category }</span>
                      
                      <button 
                        className="products-list__btn-del"
                        data-id={ product.id }
                        onClick={(e) => delProductHandler(e)}
                      > 
                        Del                                          
                      </button>

                    </li>
                  )
                }
              </ul>
              <div className="products-list__basket-total"> 
                  Total: { getSumm(basketProducts) }
              </div>
          </div>
        </div>          
      </div>
    )
}

export default Basket;