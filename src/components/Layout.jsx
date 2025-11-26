import {Outlet, Link} from "react-router";
import styles from "../styles/layout.module.css";
import { Button } from "./ui/button";
import pokemonImg from "../assets/pikachuLogo.png";

function Layout(){
    return (
        <div className = {styles.container}>
            <div className = {styles.navbar}>
                <div className = {styles.logo}>
                    <img src={pokemonImg} className = "w-10"/>
                    <p>Sunny's Pokedex</p>
                    
                </div>
                <div className = {styles.centerNav}>
                    <Link to="/" >
                        <Button variant = "outline" size="default" className="border border-black/80">Search</Button> 
                    </Link>

                    <Link to= "favorites" className = {styles.favoritesButton}>
                        <Button variant = "outline" size="default" className="border border-black/80">Favorites</Button>
                    </Link>
                </div>
                <div className = {styles.leftNav}>
                    <p>Sign up!</p>
                </div>
                
            </div>
            <div className={styles.contentPane}>
                <Outlet />
            </div>
            
        </div>
    )

    
}

export {Layout};