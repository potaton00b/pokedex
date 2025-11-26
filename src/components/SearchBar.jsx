import { Input } from "./ui/input.jsx";
import {useRef, useEffect} from "react";

function SearchBar({searchTerm, setSearchTerm}){

    const inputRef = useRef();
    useEffect(function(){
        if (inputRef.current){
            inputRef.current.focus();
        }
    },[]);
    return (
        <>
            <p>Search:</p>
            {/*<input className = "border" value = {searchTerm} onChange = {function(e){setSearchTerm(e.target.value)}} /> */}
            <Input ref = {inputRef} className = "border border-black/100 w-1/3" value = {searchTerm} onChange = {function(e){setSearchTerm(e.target.value)}} />
        </>
    )
}

export {SearchBar};