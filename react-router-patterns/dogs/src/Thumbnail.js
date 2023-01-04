import React from "react";

function Thumbnail(props) {
    return (
        <div className="Thumbnail">
            <a href={`/dogs/${props.name}`}><img style={{"height": "400px", "width": "400px", "padding": "2em", "cursor": "pointer" }} src={props.img}></img></a>
            <p style={{"margin-top": "-2em"}}>{props.name}</p>
        </div>
    )
}

export default Thumbnail;