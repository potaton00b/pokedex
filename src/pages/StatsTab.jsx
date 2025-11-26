import {useEffects, useState} from "react";
import {useOutletContext} from "react-router-dom";
function StatsTab(){
    const [pokemon, species, isLoading] = useOutletContext();
    
    if (isLoading){
        return (
            <h1>Still loading....</h1>
        )
    }

    return (
        <div className="statsTab">
            <h3>HEALTH POINTS: {pokemon.stats[0].base_stat}</h3>
            <h3>ATTACK: {pokemon.stats[1].base_stat}</h3>
            <h3>DEFENSE: {pokemon.stats[2].base_stat}</h3>
            <h3>Special-ATK: {pokemon.stats[3].base_stat}</h3>
            <h3>Special-DEF: {pokemon.stats[4].base_stat}</h3>
            <h3>SPEED: {pokemon.stats[5].base_stat}</h3>
        </div>
    )
}

export {StatsTab};