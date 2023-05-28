import { Link } from "react-router-dom"
import Circle from "./Circle"
import "./Landing.css"
import Pokeball from "./Pokeball"
import PokemonStory from "./PokemonStory/PokemonStory"
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
                        <Link to="/guessThePokemon" className="landing-link" >Play the game</Link>
                    </div>
                </div>

                
            </header>

            <section className="story-section">
                <div className="section-container">
                <h2>Pokemon History</h2>
                <p>In April 1998, Pokémon Center Co., Ltd. is established by the original authors of Pokémon: Nintendo Co., Ltd., Creatures Inc. and GAME FREAK Inc. The company name was changed to The Pokémon Company in October 2000. Since then, our business activities have expanded to overall management of the Pokémon brand.</p>
                <PokemonStory />
                </div>
            </section>
        </>
    )
}