import {SearchBar} from "../components/SearchBar.jsx";
import {useState, useEffect} from "react";
import {PokemonCard} from "../components/PokemonCard.jsx";
import styles from "../styles/Home.module.css";

function Home(){
    const [pokemon, setPokemon] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setLoading] = useState(true);

    useEffect( () => {
        async function fetchPokemon(){
            try {
                setLoading(true);
                let response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=899");
                let pokemonList = await response.json();
                setPokemon(pokemonList.results);
            } catch (error) {
                console.error("Failed to fetch", error);
            } finally {
                setLoading(false);
            }
        }
        fetchPokemon();

    }, []);

    let filteredPokemon = pokemon.filter(
        function(pokemon){
            return (pokemon.name.toLowerCase().includes(searchTerm));
        }
    ).slice(0, 49);

    if (isLoading){
        return <div>Still loading pokemon!</div>
    }

    return (
        <>  
            <div className = {styles.homeTitle}>
                <h1>Pokedex</h1>
                <SearchBar searchTerm = {searchTerm} setSearchTerm = {setSearchTerm} />
            </div>

            <div className = {styles.pokemonCardContainer}>
                {filteredPokemon.map(
                function(pokemonElement){
                    return (
                        <div key = {pokemonElement.name} >
                            <PokemonCard pokemon = {pokemonElement}/>
                        </div>
                        )
                    }
                )}
            </div>
        </>
    )
}

export {Home};