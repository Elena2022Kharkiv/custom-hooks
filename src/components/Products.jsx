export const Products = (props) => {
    const { items = [] } = props;

    return (
        <div className="products">
            {
                items.map((product) => (
                    <Product key={product.id} {...product} />
                ))
            }
        </div>
    )
}


export const Product = (props) => {
    const { id, title, price } = props;

    return (
        <div className="product">
            <h2>{title}</h2>
            <span>{price}</span>
            <button>Buy</button>
        </div>
    )
}