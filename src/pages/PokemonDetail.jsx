import {useParams} from "react-router-dom";
import {Outlet, Link, NavLink} from "react-router-dom";
import {useState, useEffect} from "react";
import { FavoritesButton } from "@/components/FavoritesButtton";
import { Button } from "@/components/ui/button";
import { PokemonCard } from "@/components/PokemonCard";

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
        <div className = "grid grid-cols-[200px_auto]">
            
            <div className = "flex flex-col gap-8 items-center">
                <PokemonCard pokemon={pokemon} className = "-mb-4" paragraphStyle="mb-2"/>
                <NavLink to="." end>
                    {
                        function({isActive}){
                            return <Button variant = {isActive ? "default" : "outline"} className = "border border-black/80">About</Button>
                        }
                    }
                </NavLink>
                <NavLink to="stats">
                    {
                        function({isActive}){
                            return <Button variant = {isActive ? "default" : "outline"} className = "border border-black/80">Stats</Button>
                        }
                    }
                </NavLink>
                <FavoritesButton pokemon = {pokemon}/>
            </div>
            

            <div className = "ml-8">
                <Outlet context = {[pokemon, species, isLoading]}/>
            </div>
        </div>
    )
}

export {PokemonDetail};