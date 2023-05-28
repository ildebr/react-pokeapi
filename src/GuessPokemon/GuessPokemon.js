import { useEffect, useState } from "react";
import useFetch from "../useFetch";


import './GuessPokemon.scss';
import Loader from "../loader/Loader";




export default function Landing(){
    const [url, setUrl] = useState('')
    const [res, setRes] = useState('')
    const [guessed, setGuess] = useState(false)

    const [pokemonGuess, setPokemonGuess] = useState('')
    function randomPokeUrl(){
       return ( `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*300)}`)
    }

    

    const {data, isPending, error, setIsPending, setData, setError}= useFetch(url)

    useEffect(()=>{
        setUrl(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*300)}`)
    }, [])

    function handleSubmit(e){
        e.preventDefault()
        console.log(pokemonGuess)

        if(pokemonGuess.toLocaleLowerCase() == data.name){
            console.log('correcto')
            setRes('Correcto!')
            setGuess(true)
        }else{
            console.log('incorrecto')
            setRes('Incorrecto')
        }

        setTimeout(()=>{
            setRes()
            
        },3500)
    }


    function changePokemon(){
        setUrl('')
        setIsPending(true);
        setData();
        setError(false);
        
        setUrl(randomPokeUrl)
        setGuess(false);
        setPokemonGuess('')
    }

    return <>
        <div className="guess-container">
        <div className="guess__image__area">
            <header className="page__header">
                <h2>Guess The Pokemon!</h2>
            </header>
            {isPending && <Loader />}

            {data ? <section className="center">
                <img src={data ? data?.sprites.other.dream_world.front_default : ''} className={guessed ? 'guessed' : 'notguessed'} />
                    
                </section>
                : 
                <p></p>}

            {res && <div className="resultado__ani">{res}</div>}
            {error && <p>Ocurrio un error</p>}        
        </div>      

        <div className="guess__text__area">
            
            <form onSubmit={(e)=> handleSubmit(e)}>
                <input type="text"  value={pokemonGuess} onChange={(e) => setPokemonGuess(e.target.value)} />
                <input type="submit" value='Adivinar' />
            </form>
            <button onClick={changePokemon}>Prueba otro</button>
        </div>
        </div>
        
    </>

}