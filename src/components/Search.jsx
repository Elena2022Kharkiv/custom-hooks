import SearchImg from "./../img/search_icon.png";
import Microphone from "./../img/microphone_icon.png";
import "./../scss/Search.scss";

const Search = () => {

    return (
        <form className="search">
            <div className="search__text">
                <img className="search__img" src={ SearchImg } alt="" />
                <input type="search" placeholder="Я шукаю ..." />
                <img className="search__microphone" src={ Microphone } alt="" />
            </div>
            <button className="search__btn">Знайти</button>
        </form>
    )
}

export default Search;