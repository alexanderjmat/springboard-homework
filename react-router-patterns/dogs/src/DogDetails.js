import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function DogDetails(props) {
  const { name } = useParams();
  const [content, setContent] = useState();

  useEffect(() => {
    const dog = props.data.find((dog) => {
      return dog.name.toLowerCase() === name.toLowerCase();
    });

    if (dog) {
      setContent(
        <div className="DogDetails">
          <h2>
            Hello! My name is {dog.name} and I'm {dog.age} years old!
          </h2>
          <img src={dog.src} style={{ height: "300px", width: "300px" }} />
          <p>Here are some facts about me :D</p>
          <ul>
            {dog.facts.map((fact) => {
              return <li>{fact}</li>;
            })}
          </ul>
        </div>
      );
    } else {
      setContent(<h1>Sorry, we don't have a dog with that name!</h1>);
    }
  }, [name, props.data]);

  return content;
}

export default DogDetails;
