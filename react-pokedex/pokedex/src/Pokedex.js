import React from "react";
import Pokecard from "./Pokecard"
import "./Pokedex.css"

function Pokedex(props) {
    return (
        <div className="Pokedex">
            {props.array.map(pokemon => (
                <Pokecard pokemon={pokemon}/>
            ))}
        </div>
    )

}

export default Pokedex