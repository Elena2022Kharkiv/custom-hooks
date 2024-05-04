const MenuItems = (props) => {
    const { menuItems } = props;
   
    return (
        <ul className="burgerMenu__items">   
            { 
                menuItems.map((item, index) =>
                    <li className={ item.className } key={ index }>
                        <img src={ item.icon}  alt="" />
                        <p>{ item.name }</p>
                    </li>
                )
            }
        </ul>
    )
}

export default MenuItems;