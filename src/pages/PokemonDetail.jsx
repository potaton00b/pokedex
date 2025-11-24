import {useParams} from "react-router-dom";
import styles from "../styles/PokemonDetail.module.css";
import {Outlet, Link, NavLink} from "react-router-dom";
import {useState, useEffect} from "react";

function PokemonDetail(){
    const {name} = useParams();
    const [pokemon, setPokemon] = useState({});
    const [species, setSpecies] = useState({});
    const [isLoading, setLoading] = useState(true);

    useEffect(function(){
        async function fetchPokemon(name){
            let [pokemonData, speciesData] = await Promise.all([
                fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`).then( function(input){
                    return input.json();}),
                fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}/`).then(function(input) {return input.json()})
            ])
            setLoading(false);
            setPokemon(pokemonData);
            setSpecies(speciesData);
        }
        fetchPokemon(name);
    },[name]);


    
    return (
        <div className = {styles.pokemonDetail}>
            <h1>{name}</h1>
            
            
            <NavLink to="stats">Stats Tab</NavLink>
            <NavLink to="about">About Tab</NavLink>

            <div className = {styles.tabbedPane}>
                <Outlet context = {[pokemon, species, isLoading]}/>
            </div>
        </div>
    )
}

export {PokemonDetail};