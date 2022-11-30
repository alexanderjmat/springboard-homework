import './Pokecard.css';


function Pokecard(props) {
    return (
        <div className="Pokecard">
            <h1 className="Pokecard__name">{props.pokemon.name}</h1>
            <img className="Pokecard__logo" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemon.id}.png`}/>
            <p className="Pokecard__desc">Type: {props.pokemon.type}</p>
            <p className="Pokecard__desc">Exp: {props.pokemon.base_experience}</p>
        </div>
    )

}

export default Pokecard;