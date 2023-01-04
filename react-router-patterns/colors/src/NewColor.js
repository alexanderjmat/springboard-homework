import { React, useEffect, useState } from "react";
import "./NewColor.css";
import { useHistory, Redirect, Link } from "react-router-dom";

function NewColor(props) {
  const history = useHistory("/colors")
  function handleClick() {
    props.changeColors();
    history.push("/colors")
  }

  return (
    <div className="NewColor">
      <div className="NewColor__container">
        <label htmlFor="name">Color name</label>
        <input
          onChange={props.changeName}
          value={props.name}
          name="name"
          id="name"
          type="text"
        />
        <label htmlFor="color">Color value</label>
        <input
          name="color"
          id="color"
          type="color"
          value={props.color}
          onChange={props.changeColor}
        />
        <button onClick={handleClick}>Add Color</button>
      </div>
    </div>
  )
}

export default NewColor;

