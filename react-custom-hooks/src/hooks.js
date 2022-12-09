import React, {useState} from "react";
import axios from "axios";
import {v1 as uuid} from "uuid";
import pokemonList from "./pokemonList";
import PokemonSelect from "./PokemonSelect";



const useFlip = () => {
    const [state, setState] = useState(true);
    const flipCard = () => {
        setState(state => !state);
      };
    return [state, flipCard]
}

const useAxios = (url, data=false) => {
  const [urls, setUrl] = useState([])
  
  async function addUrl() {
    let req;
    if (data) {
      const pokemon = pokemonList.filter(p => p == data)
      console.log(pokemon)
      req = await axios.get(`${url}${data}/`)
    } else {
      req = await axios.get(url)
    }
    return setUrl(urls => [...urls, {...req.data, id: uuid()}])
  }
  console.log(urls)

  return [urls, addUrl]

}

export {useFlip, useAxios};