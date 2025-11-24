import {Outlet, Link} from "react-router";
import styles from "../styles/layout.module.css";

function Layout(){
    return (
        <div className = {styles.container}>
            <div className = {styles.navbar}>
                <div className = {styles.logo}>
                    <p>Navbar</p>
                    <p>img put here</p>
                </div>
                <div className = {styles.centerNav}>
                    <Link to="/" className = {styles.homeButton}>
                        <span>HOME</span>  
                    </Link>

                    <Link to= "favorites" className = {styles.favoritesButton}>
                        <span>FAVORITES</span>
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