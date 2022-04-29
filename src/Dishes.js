function Dishes ({product}) {
    return(<div className="dishes">
            {product.map ((element => {
                const {id, name,  searchTerm, price, image} = element;
                return(<div className="dish-card"  key={id}>
                    <img className="picture" src={image} width="400px" height="300px" alt="products"/>
                    <div className="plate">
                        <h3>{name}</h3>
                        <h4>{price}</h4>
                    </div>
                </div>)
            }))}
        </div>
    )
}
export default Dishes;