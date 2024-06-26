const BurgerMenuItems = (props) => {
    const { title, nameClass, array } = props;
   
    return (
        <ul className={nameClass}>
            <h4 className={`${nameClass}__title`}>{title}</h4>
            {
                array.map((item, index) =>
                    <li className={`${nameClass}__item`} key={ index }>
                        <p>{ item.name }</p>
                    </li>
                )
            }
        </ul>
    )
}

export default BurgerMenuItems;