import { useState } from "react";
import Buttons from "./Buttons";
import { data } from "./data";
import Dishes from "./Dishes";


function Home() {
    const [dishes, setDishes] = useState (data);
    const chosenNoodles = (searchTerm) => {
        const newDishes = data.filter(element => element.searchTerm === searchTerm);
        setDishes(newDishes);
    }

    return(<div>
        <div className="container"> 
        <div className="cont">
            <h2 className="back">You came for delicious noodles?</h2>
            <h2 className="back">We have everything you want!</h2>
        </div>
        </div>
            <Buttons filteredDishes={chosenNoodles}/>
            <Dishes product={dishes} />
            </div>
    )
}
export default Home;