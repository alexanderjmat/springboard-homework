import React from "react";
import {BrowserRouter, Switch, Route, Redirect, useParams, useHistory} from "react-router-dom";
import Home from "./Home";
import NewColor from "./NewColor";
import ColorPage from "./ColorPage";


function Routes(props) {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/colors">
            <Home colors={props.colors}/>
          </Route>
          <Route exact path="/colors/new">
            <NewColor
              changeName={props.functions.changeColorName}
              name={props.name}
              changeColor={props.functions.changeCurrentColor}
              changeColors={props.functions.changeColors}
              color={props.color}
            />
          </Route>
          <Route exact path="/colors/:name">
            <ColorPage colors={props.colors}/>
          </Route>
          <Redirect to="/colors" />
        </Switch>
      </BrowserRouter>
    );

}

export default Routes;