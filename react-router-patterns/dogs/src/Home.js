import React from "react";
import whiskey from './imgs/whiskey.jpg'
import duke from './imgs/duke.jpg'
import perry from './imgs/perry.jpg'
import tubby from './imgs/tubby.jpg'

import Thumbnail from "./Thumbnail";

function Home(props) {
  return (
    <div className="Home">
      <div className="Home__Heading">
        <h1>Welcome to the Dog Kennel!</h1>
      </div>
      <div className="Home__Body">
        <Thumbnail name={props.data[0].name} img={whiskey} />
        <Thumbnail name={props.data[1].name} img={duke} />
        <Thumbnail name={props.data[2].name} img={perry} />
        <Thumbnail name={props.data[3].name} img={tubby} />
      </div>
    </div>
  );
}

export default Home;