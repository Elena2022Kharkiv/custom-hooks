import "./../scss/Products.scss";

export const Products = (props) => {
    const { products, categoryData, selectCategory, setSelectCategory, buyProdHandler } = props;

    return (
        <div className="products-list">
            <h1>Products</h1>

            <select className="products-list__select"
                value={ selectCategory }
                onChange={ e => setSelectCategory(Number(e.target.value)) } >
                { 
                    categoryData.map(item => 
                        <option value={ item.id } key={ item.id }>{ item.title }</option>
                    ) 
                }
            </select>  
       
            <ul className="products-list__content">
                {
                    products.map(product => 
                        <li className="products-list__item" key={ product.id }>
                            { product.title } &nbsp;  
                            <span>Price: { product.price } Category: { product.category }</span>
                            
                            <button 
                            className="products-list__btn-buy"
                            data-id={ product.id }
                            onClick={(e) => buyProdHandler(e)}
                            > 
                            BUY                      
                            </button>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
