import styles from "../styles/PokemonCard.module.css";
import {Link} from "react-router-dom";


function PokemonCard({pokemon}){
    let str = pokemon.url
    let pokeID = str.split("/")[6];
    return (
        <Link to={`/pokemon/${pokemon.name}`}>
            <div className = {styles.pokemonCard}>
                <p>{pokemon.name}</p>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeID}.png`} />
            </div>
        </Link>
    )
}

export {PokemonCard};