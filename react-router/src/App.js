import './App.css';
import VendingMachine from './VendingMachine';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from "react";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <React.Fragment>
            <VendingMachine />
          </React.Fragment>
        </Route>

        <Route path="/pepsi">

        </Route>
        <Route path="/doritos">
        </Route>
        <Route path="/jerky">
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
