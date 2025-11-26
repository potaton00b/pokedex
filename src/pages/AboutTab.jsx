import {useOutletContext} from "react-router-dom";
import { Button } from "@/components/ui/button";

function AboutTab(){
//pokemon: height, ability, weight, height, name, held items, 
//pokemon-species: flavor-text, genus, color, habitat, generation
    let [pokemon, species, isLoading] = useOutletContext();

    if (isLoading){
        return (<h1>Still loading...</h1>);
    }
    
    return (
        <div className = "aboutTab">
            <h3>Height: {pokemon.height*10}cm</h3>
            <h3>Abilities test: {displayAbilities(pokemon.abilities)}</h3>
            <h3>Weight: {displayWeight(pokemon.weight)} </h3>
            <h3>Held Items: {displayHeldItems(pokemon.held_items)}</h3>
            <h3>Flavor text: {displayFlavorText(species)}</h3>
            <h3>Habitat: {displayHabitat(species)}</h3>
        </div>

    )
}

function displayWeight(weight){
    if (weight < 10){
        return `${weight*100} grams`;
    } else {
        return `${weight/10} kg`;
    }
}

function displayAbilities(abilitiesList){
    let str = "";
    for (let i =0; i < abilitiesList.length; i++){
        str += `${i+1}) ${abilitiesList[i].ability.name} `;
    }

    return str;
}

function displayHeldItems(heldItemsList){

    if (heldItemsList.length === 0){
        return "No held items for this pokemon";
    }
    let str = '';
    for (let i = 0; i < heldItemsList.length; i++){
        str += `${i+1}) ${heldItemsList[i].item.name} `;
    }

    return str;
}

function displayFlavorText(data){

    const englishEntries = data.flavor_text_entries.filter(function(item) {
        return item.language.name === "en";
    });

    const latest = englishEntries[englishEntries.length - 1];
    return (latest.flavor_text);
}

function displayHabitat(species){
    if (!species || !species.habitat || !species.habitat.name){
        return ("None");
    } else {
        return species.habitat.name;
    }
}

export {AboutTab};