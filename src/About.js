import { useState } from "react";
import { dataAbout } from "./dataAbout";


function About() {

const [texts, setTexts] = useState (dataAbout);
const [showText, setShowText] = useState (false);

const showTextClick = (item) => {
    item.showMore = !item.showMore
    setShowText (!showText)
}

    return (<div className="text-box">
        <div className="text">
            <h1>Hello dear visitors!</h1>
        </div>

{texts.map ((item => {
    const {description, showMore} = item;

    return (<div key="id">
        <div className="text">
            <p>{showMore ? description : description.substring(0,197) + "..."}
            <button onClick={() => showTextClick(item)}>{showMore ? "Show Less" : "Show More"}</button></p>
        </div> 
        </div>
    )
}))}
    </div>
        )
}
export default About;