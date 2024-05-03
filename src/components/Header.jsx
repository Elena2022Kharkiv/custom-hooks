import Logo from "./Logo";
import BtnMenu from "./../img/button-menu.png";
import Search from "./Search";
import LanguageImg from "./../img/circle-img.png";
import OffersImg from "./../img/bell-icon.jpg";
import BasketImg from "./../img/basket-icon.png";
import CatalogIcon from "./CatalogIcon";

const Header = (props) => {
    const { toggleMenu, setShowCatalog, setShowBasket, setToggleActive } = props;

    const showBasketHandler = () => {
        setShowBasket(prev => !prev);
        setToggleActive(prev => !prev);
        setShowCatalog(false);
    } 

    const showCatalogHandler = () => {
        setShowCatalog(prev => !prev);
        setToggleActive(prev => !prev);
    }    

    return (
        <header className="header">
            <div className="burgerMenu-btn" onClick={ toggleMenu }>
                <img src={ BtnMenu } alt="" />
            </div>
            <Logo type="header"/>
            <button className="catalog" onClick={ () => showCatalogHandler() }>
                <CatalogIcon type="header"/>
                <div>
                    <p className="catalog__name">Каталог</p>
                </div>
            </button>
            <Search />
            <div className="language">
                <div className="language__icon">
                    <img src={ LanguageImg } alt="circle" />
                </div>  
                <div className="language__UA">UA</div>                 
            </div>
            <div className="header__offers">
                <img src={ OffersImg } alt="" />
            </div>
            <div className="header__basket" onClick={ () => showBasketHandler() }>
                <img src={ BasketImg } alt="" />
            </div>
        </header>
    )
}

export default Header;