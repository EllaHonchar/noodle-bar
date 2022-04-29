import { useState } from "react";
import { dataTeam } from "./dataTeam";

function Team() {
        const [person, setPerson] = useState(0);
        const {id, name, position, description, image} = dataTeam[person];
    
        const previousPerson = () => {
            setPerson ((person => {
                person --;
                if (person < 0) {
                    return dataTeam.length -1;
                }
                return person;
            }))
        }
        const nextPerson = () => {
            setPerson ((person => {
                person ++;
                if (person > dataTeam.length -1) {
                    person = 0;
                }
                return person;
            }))
        }
    
        return (<div key={id}>
                <div className="containerAbout">
                    <img src ={image} width="300px" alt="person"/>
                </div>
                <div className="containerAbout">
                    <h1>{name} - {position}</h1>
                </div>
                <div className="containerAbout">
                    <h2>{description}</h2>
                </div>
                <div className="btnAbout containerAbout">
                    <button onClick={previousPerson}>Previous</button>
                    <button onClick={nextPerson}>Next</button>
                </div>
            </div>
        )
    }
    export default Team;
    
    