

async function fetchPokemon(){
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    let pokemonList = await response.json();
    return pokemonList
}

let data = await fetchPokemon();
console.log(data);