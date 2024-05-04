import "./../scss/CatalogIcon.scss";

const CatalogIcon = (props) => {

    const { type } = props;
    const catalogModif = type === 'header' ? 'icon-white' : 'icon-black';

    return (
        <div className="catalog__icons">   
            <div className={ `catalog__icon ${catalogModif}` }></div>                
            <div className={ `catalog__icon ${catalogModif} icon`}></div>
            <div className={ `catalog__icon ${catalogModif}` }></div>              
            <div className={ `catalog__icon ${catalogModif}` }></div>                
        </div>   
    )
}

export default CatalogIcon;