import styles from "../styles/PokemonCard.module.css";
import {Link} from "react-router-dom";


function PokemonCard({pokemon, className = "", paragraphStyle = ""}){

    let pokeID;

    if (!pokemon.url){
        pokeID = pokemon.id;
       
    } else {
        let str = pokemon.url;
        pokeID = str.split("/")[6];
    }
    
    return (
        <Link to={`/pokemon/${pokemon.name}`}>
            <div className = {`${styles.pokemonCard} ${className}`}>
                <p className = {paragraphStyle}>{pokemon.name}</p>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeID}.png`} />
            </div>
        </Link>
    )
}

export {PokemonCard};