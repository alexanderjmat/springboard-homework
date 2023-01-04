import React, {useState} from "react";
import {BrowserRouter, Route} from "react-router-dom"
import './VendingMachine.css'
import Vend from "../src/vend.png";

function VendingMachine(props) {
    return (
        <div className="VendingMachine">
            <h1>Hey, I'm a vending machine. Want something to eat???</h1>
            <img src={Vend}/>
            <ul>
                <li><button>Pepsi</button></li>
                <li><button>Doritos</button></li>
                <li><button>Beef Jerky</button></li>
            </ul>
        </div>
    )

}

export default VendingMachine;