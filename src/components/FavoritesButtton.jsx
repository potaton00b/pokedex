import { Button } from "./ui/button";
import {Star} from "lucide-react";
import {useState, useEffect} from "react";
import { useFavorites } from "@/contexts/FavoriteContext";


function FavoritesButton({pokemon}){
    const {favoritesList, isFavorite, removeFavorite, addFavorite} = useFavorites();

    
    let colorStyle = "";
    
    let isFav = isFavorite(pokemon);
    let iconClass = isFav
        ? "fill-yellow-500 text-yellow-500 scale-110" 
        : "group-hover:fill-yellow-500 group-hover:text-yellow-500";
    
    function onClick(){
        if (isFav){
            removeFavorite(pokemon);
        } else {
            addFavorite(pokemon);
        }
    }

    return (
        <Button variant = "outline" size ="default" className = {`group transition-all border-black/80
      ${isFav ? "bg-yellow-100 border-yellow-500" : "hover:bg-yellow-50"}`} onClick = {onClick}>
            <Star className = {`transition-all ${iconClass}`}/> Favorite
        </Button>
    )
}


export {FavoritesButton};