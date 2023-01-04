import {React, useEffect, useState} from "react";
import "./Home.css"
import { Link } from "react-router-dom";

function Home(props) {
    const [home, setHome] = useState(
      <div className="Home">
        <div className="Home__Heading">
          <h1 className="Heading__h">Welcome to the color factory</h1>
          <h2 className="Heading__h">
            <Link to="/colors/new">Add a color</Link>
          </h2>
        </div>
        <div className="Home__Body">
          <p>Please select a color</p>
          <ul>
            {props.colors.map((color) => {
              <li>{color.name}</li>;
            })}
          </ul>
        </div>
      </div>
    );
    
    useEffect(() => {
        setHome(home)
    }, [props.colors])

    return (
        <div className="Home">
        <div className="Home__Heading">
          <h1 className="Heading__h">Welcome to the color factory</h1>
          <h2 className="Heading__h">
            <Link to="/colors/new">Add a color</Link>
          </h2>
        </div>
        <div className="Home__Body">
          <p>Please select a color</p>
          <ul>
            {props.colors.map(color => {
              return <li><Link to={`/colors/${color.name}`}>{color.name}</Link></li>;
            })}
          </ul>
        </div>
      </div>
    )

}

export default Home;