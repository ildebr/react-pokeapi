import { Link } from "react-router-dom"
import Circle from "./Circle"
import "./Landing.css"
import Pokeball from "./Pokeball"
export default function Landing(){

    
    
    return (
        <>
            <header className="landing-header">
            <Circle top='0%' right='0%' color='#fe9325' diameter='800px' tx='50%' ty='-50%' transparency='.4' />
            <Circle top='100%' right='0%' color='#fa7c2a' diameter='1200px' tx='50%' ty='-50%' transparency='.4' />
                <div className="landing-section">
                    <div className="landing-img">
                        <img src="img/pokeapi_256.png" />
                    </div>
                    <Pokeball className='poke-move' />    
                    
                    <div className="landing-text">
                        
                        <h2>Pokeapi is a public API of pokemon.</h2>
                        
                        <p>For this page I made use of this API with React for learning purposes.</p>
                        <Link to="/pokemon" className="landing-link" >View the Pokedex</Link>
                    </div>
                </div>

                
            </header>
        </>
    )
}