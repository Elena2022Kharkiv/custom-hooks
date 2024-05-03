import LogoImg from "./../img/logo-img.png";

const Logo = (props) => {
    const { type } = props;
    const logoModif = type === 'header' ? 'logoBig' : 'logoSmall';

    return (
        <div className="logo">
            <img className="logo__img" src={ LogoImg } alt="Rozetka" />
            <p className={ `logo__name ${logoModif}` }>ROZETKA</p>                
        </div>  
    )
}

export default Logo;