import { useFavorites } from "@/contexts/FavoriteContext";
import { PokemonCard } from "@/components/PokemonCard";
import { FavoritesButton } from "@/components/FavoritesButtton";

function Favorite(){
    const {favoritesList, addFavorite, removeFavorite, isFavorite} = useFavorites();

    return (
        
        <div className = "grid grid-cols-5">
            {favoritesList.map(function(pokemon){
            return (
                <div className = "flex justify-center items-center flex-col">
                    <PokemonCard pokemon = {pokemon}/>
                    <FavoritesButton pokemon = {pokemon}/>
                </div>
            )
            })}
        </div>
        
    )
}

export {Favorite};