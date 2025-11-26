import {useState, createContext, useContext} from "react";

const favoriteContext = createContext();

function FavoriteContext({children}){
    const [favoritesList, setFavorites] = useState([]);

    async function addFavorite(pokemon){
        if (isFavorite(pokemon)){
            return;
        }
        let tempArray = [...favoritesList];
        const tempURL = await getPokemonListUrlFromName(pokemon.name);
        const tempObj = {...pokemon, url: tempURL};
        setFavorites(function(prevList){
            return [...prevList, tempObj];
        });
    }

    async function getPokemonListUrlFromName(name) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}/`);
        const data = await res.json();
        const id = data.id;
        return `https://pokeapi.co/api/v2/pokemon/${id}/`;
    }



    function isFavorite(pokemon){
        for (let i = 0; i < favoritesList.length; i++){
            if (pokemon.name === favoritesList[i].name){
                return true;
            }
        }
        return false;
    }

    function removeFavorite(pokemon){
        let tempArray = favoritesList.filter(function(el){
            return pokemon.name !== el.name;
        });
        setFavorites(tempArray);
    }   
    return (
        <favoriteContext.Provider value={{favoritesList, addFavorite, isFavorite, removeFavorite}}>
            {children}
        </favoriteContext.Provider>
    )
}

function useFavorites(){
    return useContext(favoriteContext);
}

export {FavoriteContext, useFavorites};