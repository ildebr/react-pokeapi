import React from "react";
import useFetch from './useFetch';
import { Link } from "react-router-dom"
import "./Card.css";
import Loader from "./loader/Loader"
const Card = (pokemon) =>{
    const { data:poke, isPending, error } = useFetch(pokemon.pokemon);
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    return (
        <div className="card" >
            { isPending && <Loader />}
            { error && <div>{error}</div>}

            {poke && (
            <div className="card-inside">
                <header>
                
                <div className="bg-color"></div>
                <div className="img-container">
                <img className="sprite" alt="pokemon front-face" src={poke.sprites.other.dream_world.front_default} />
                </div>
                <h2> <Link to={`/${poke.name}`} key={poke.id} className="poke-link" >{poke.name} </Link></h2>
                
                </header>
                <section>
                    <div className="line"></div>
                    <div className="types">
                    {poke.types.map((type, index)=>{
                        return <div className="type-container"><p className="type"><strong> {type.type.name}</strong></p>
                            <img src={`img/Pokémon_${capitalizeFirstLetter(type.type.name)}_Type_Icon.svg`} className="type-img" />
                         </div>
                    })}
                    </div>
                    <div className="extra">
                        <div className="height">
                            <p><strong>height</strong></p>
                            <p>{poke.height}</p>
                        </div>
                        <div className="weight">
                            <p><strong>weight</strong></p>
                            <p>{poke.weight}</p>
                        </div>
                    </div>
                    <div>
                        {/* <div className="background">{poke.moves[0].move.name}</div>
                    <div className="background">{poke.moves[1].move.name}</div> */}
                    </div>
                </section>
            </div>
            )
            }
        </div>
    )
}

export default Card;