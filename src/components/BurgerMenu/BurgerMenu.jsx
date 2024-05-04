import Logo from "../Logo";
import BurgerMenuItems from "./BurgerMenuItems";
import MenuItems from "./MenuItems";
import CatalogIcon from "../CatalogIcon";
import OffersImg from "./../../img/bell.png";
import OrdersImg from "./../../img/orders-icon.png";
import AppStoreImg from "./../../img/img-app-store.png";
import GoogleImg from "./../../img/img-google.png";
import BasketImg from "./../../img/basket.png";
import CloseImg from "./../../img/close.png";
import "./../../scss/BurgerMenu.scss";

const BurgerMenu = (props) => {
    const { isShowMenu, toggleMenu } = props;

    const burgerMenuItems = [
        { name: 'Персональні пропозиції', link: '/offers', icon: OffersImg, className: "burgerMenu__offers" },
        { name: 'Moї замовлення', link: '/orders', icon: OrdersImg, className: "burgerMenu__orders" },
        { name: 'Кошик', link: '/basket', icon: BasketImg, className: "burgerMenu__basket" },
    ];

    const burgerMenuInfo = [
        { name: 'Про нас', link: '/about'},
        { name: 'Контакти', link: '/contacts'},
        { name: 'Вакансії', link: '/vacancies'},
    ];

    const burgerMenuHelp = [
        { name: 'Доставка та оплата', link: '/payment',},
        { name: 'Кредит', link: '/credit'},
        { name: 'Гарантія', link: '/guarantee'},
    ];

    return (
        <div className={`burgerMenu ${ isShowMenu && "activeMenu" }`}> 
            <Logo type="burgerMenu"/>
            <div className="burgerMenu__catalog">
                <div className="burgerMenu__catalog-icon"> 
                    <CatalogIcon type="burgerMenu"/>
                </div>    
                <div className="burgerMenu__catalog-name">Каталог товарів</div>
            </div>

            <MenuItems menuItems={burgerMenuItems} />

            <BurgerMenuItems title={"Інформація про компанію"} nameClass={"burgerMenu-info"} array={ burgerMenuInfo } />

            <BurgerMenuItems title={"Допомога"} nameClass={"burgerMenu-help"} array={ burgerMenuHelp } />

            <div className="burgerMenu__apps">
                <h4>Завантажуйте наші застосунки</h4>
                <div className="burgerMenu__apps-imgs">
                    <div>
                        <img src={ AppStoreImg } alt="Google" />
                    </div>
                    <div>
                        <img src={ GoogleImg } alt="App Store" />
                    </div>
                </div>                
            </div>
            <div className="burgerMenu__close" onClick={ toggleMenu }>
                <img src={ CloseImg } alt="Close" />
            </div>           
        </div>        
    )
}

export default BurgerMenu;