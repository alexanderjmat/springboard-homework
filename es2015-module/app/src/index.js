import React from "react";
import fruits from "./foods"
import {choice, remove} from "./helpers"

function App() {
    const fruit = choice(fruits)
    console.log(`I'd like one ${fruit}, please.`)
    console.log(`Here you go: ${fruit}, please.`)
    console.log(`Delicious! May I have another?`)
    const removeItem = remove(fruits, fruit)
    console.log(`I'm sorry, we're all out. We have ${fruits.length} left`) 
 
}

App()


export default App;