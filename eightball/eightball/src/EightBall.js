import React, { useState } from "react";
import './App.css';


const data = [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
  ]



function EightBall() {
    const [message, setMessage] = useState("Think of a Question")
    const [color, setColor] = useState("black")

    async function handleClick() {
        console.log("hi")
        const randomEntry = Math.floor(Math.random() * data.length)
        const answerMessage = data[randomEntry]["msg"]
        const answerColor = data[randomEntry]["color"]
        console.log(answerColor, answerMessage)
        setMessage(answerMessage)
        setColor(answerColor)
    }

    return (
        <button className="EightBall" onClick={() => handleClick()} style={{backgroundColor: color}}>
            <p>{message}</p>
        </button>
    )

}


export default EightBall;