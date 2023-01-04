import {React, useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './Routes';
import Home from './Home';

function App() {
  const [colors, setColors] = useState([{
    name: "red",
    color: "#ff0000"
  }])
  const [currentColor, setCurrentColor] = useState("#ff0000")
  const [currentName, setCurrentName] = useState()

  useEffect(() => {
    console.log(colors)
  })
  
  useEffect(() => {
    setCurrentColor(currentColor)
    setCurrentName(currentName)
  }, [currentColor, currentName])

  function changeColorName(e) {
    console.log(e.target.value)
    setCurrentName(e.target.value)
  }

  function changeCurrentColor(e) {
    setCurrentColor(e.target.value)
  }

  function changeColors() {
    setColors(prev => {
      return [...prev, {name: currentName, color: currentColor}]
    })
  }

  return (
    <div className="App">
      <Routes functions={{
        "changeCurrentColor": changeCurrentColor,
        "changeColors": changeColors,
        "changeColorName": changeColorName
        }} color={currentColor} name={currentName} colors={colors}/>
    </div>
  );
}

export default App;
