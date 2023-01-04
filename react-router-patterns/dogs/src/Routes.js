import React from "react";
import {Route, BrowserRouter, Switch, Redirect} from "react-router-dom"
import DogDetails from "./DogDetails";
import Thumbnail from "./Thumbnail";
import Home from "./Home";

function Routes(props) {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/dogs"><Home data={props.data}/></Route>
            <Route exact path="/dogs/:name"> <DogDetails data={props.data}/></Route>
            <Redirect to="/dogs"/>
          </Switch>
        </BrowserRouter>
    )
}

export default Routes;