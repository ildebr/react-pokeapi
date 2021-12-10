import { Link } from "react-router-dom"
import "./Landing.css"
export default function Landing(){
    return (
        <>
            <header className="landing-header">
                <div className="landing-img">
                    <img src="img/pokeapi_256.png" />
                </div>
                <div className="landing-text">
                    <h2>Pokeapi is a public API of pokemon.</h2>
                    <p>For this page I made use of this API with React for learning purposes.</p>
                    <Link to="/pokemon" className="landing-link" >View the Pokedex</Link>
                </div>
            </header>
        </>
    )
}