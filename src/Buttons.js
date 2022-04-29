function Buttons({filteredDishes}) {
    return( <div className="cont">
            <button className="change" onClick={() => filteredDishes ("vegan noodles")}>vegan noodles</button>
            <button className="change" onClick={() => filteredDishes ("seafood noodles")}>seafood noodles</button>
            <button className="change" onClick={() => filteredDishes ("chicken noodles")}>chicken noodles</button>
            <button className="change" onClick={() => filteredDishes ("meat noodles")}>meat noodles</button>
        </div>
    )
}
export default Buttons;