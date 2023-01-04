import React from "react";
import { useParams, Link } from "react-router-dom";
import "./ColorPage.css"

function ColorPage(props) {
    let pageColor;
    const {name} = useParams()
    for (let color of props.colors) {
        if (color.name == name) {
            pageColor = color
        }
    }

    return (
        <div className="ColorPage" style={{"position": "absolute", "display": "flex", "padding-top": "4em", "padding-bottom": "4em", "flex-direction": "column", "justify-content": "space-between", "background": `${pageColor.color}`, "margin": "none", "padding": "none", "height": "100%", "width": "100%"}}>
            <h1>THIS IS {pageColor.name.toUpperCase()}</h1>
            <h1>ISN'T IT BEAUTIFUL?</h1>
            <Link to="/colors"><h1>GO BACK</h1></Link>
        </div>
    )
    
}

export default ColorPage;