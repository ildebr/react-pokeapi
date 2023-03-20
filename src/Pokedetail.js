import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import "./Pokedetail.css"
import useFetch from "./useFetch"
import Loader from "./loader/Loader"
export default function Pokedetail(){
    let params = useParams();
    const {data: pokemon, isPending, error} = useFetch('https://pokeapi.co/api/v2/pokemon/' + params.pokeName.toLowerCase())
    const [urlpoke, setUrlPoke] = useState('')
    useEffect(()=>{
        if(pokemon){
            setUrlPoke(pokemon.species.url)
        }
    }, [pokemon])
    
    const {data: especies, isPeding: pending, error: errorespecies} = useFetch(urlpoke)

    
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    
    useFetch('https://pokeapi.co/api/v2/evolution-chain/2/')
    console.log(pokemon)
    console.log(especies)

    const stats= {
        hp:240,
        attack:190,
        defense:230,
        specialattack:175,
        specialdefense:230,
        speed: 180
    }
    return (
        <main>
            
            {isPending && <h2>Loading the pokemon <Loader /> </h2>}
            {error && <h2>Couldn't get your pokemon, try again</h2>}
            {pokemon && (
                <main className="pokemon-detail">
                    <div className="visuals">
                        <div className="pokemon-detail-img-container">
                        <img src={pokemon.sprites.other.dream_world.front_default} class="pokemon-detail-img" alt="pokemon" />
                        </div>
                        <div className="pokemon-detail-types">
                        {pokemon.types.map((type) => {
                            return <div className="pokemon-detail-type">
                                
                            <img src={`img/Pokémon_${capitalizeFirstLetter(type.type.name)}_Type_Icon.svg`} className="type-img" />
                            <p>{type.type.name}</p>
                             </div>
                        })}</div>
                    </div>

                    <div className="pokemon-info">
                        <h1>
                            {pokemon.name}
                        </h1>
                        <h2>Description</h2>
                        <p>{especies && especies.flavor_text_entries[10].flavor_text.replace('\t', ' ')}</p>
                        <div className="abilities-section">
                            <h2>Abilities</h2>
                            <div className="abilities">
                                {pokemon.abilities.map((ability) =>{
                                    return <h3 className="ability">{ability.ability.name}</h3>
                                })}
                            </div>
                        </div>

                        <h2>Habitat</h2>
                        <p>{especies && especies.habitat.name}</p>

                        <div className="stats-section">
                            <h2>Stats</h2>
                            <div className="stats">
                                {
                                    pokemon.stats.map((stat) => {
                                        return <div className="stat"><p className="stat-text"><span>{stat.stat.name}</span> <span>{stat.base_stat}</span> </p> <input type="range" min="0" max={stats[stat.stat.name.replace('-','')]} value={stat.base_stat} /> </div>
                                    })
                                }
                            </div>
                        </div>
                        
                        

                        <div className="moves-section">
                            <h2>Moves</h2>
                            <div className="moves">
                                {pokemon.moves.slice(0,4).map((move)=>{
                                    return <h3 className="move">{move.move.name}</h3>
                                })}
                            </div>
                        </div>

                    </div>
                    
                    
                </main>
            )}
        </main>
    )
}