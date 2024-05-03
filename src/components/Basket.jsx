import BasketImg from "./../img/cart-img.png";
import "./Basket.css";

const Basket = (props) => {
    const { setShowBasket, setToggleActive } = props;

    const showBasketHandler = () => {
        setShowBasket(prev => !prev);
        setToggleActive(false);
    }  

    return (
        <div className="basket">
            <div className="basket__close" onClick={ () => showBasketHandler() }>x</div>
            <img className="basket__img" src={ BasketImg } alt="" />
            <p className="basket__text">Кошик порожній</p>
        </div>
    )
}

export default Basket;