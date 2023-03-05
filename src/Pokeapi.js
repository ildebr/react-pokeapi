import './App.css';
import React from "react";
import useFetch from './useFetch';
import Card from './Card';
import { useState, useEffect } from "react"
import {Link, useLocation} from "react-router-dom"
import Loader from "./loader/Loader"
function Pokeapi() {
  const url2 = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=8";
  
  const urlSearch = "https://pokeapi.co/api/v2/pokemon/";
  
  function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  let query = useQuery()
  const[busqueUrl, setBusqueUrl] = useState(urlSearch);
  //fetches
  const {data: pores, isPending: pendientes, error:error3} = useFetch(busqueUrl)

  //keeps the next and previous links
  //const urlBase="https://pokeapi.co/api/v2/pokemon?offset=0&limit="
  const [urlPage, setUrlPage] = useState('')
  
  //variable para saber si mostrar o no la ventanda de busqueda
  const [mostrarVentana, setMostrarVentana] = useState('no-mostrar')

  //helps to see if there is currently a search
  const [bus, setBus] = useState(false);
  const [display, setDisplay] = useState('display');

  const [searchTerm, setSearchTerm] = useState('');
  //const [pokeResults, setPokeResults] = useState({});
  //console.log("prueba " + dUrl)
  

  const [page, setPage] = useState(0)
  useEffect(()=>{
    setUrlPage(url2);
  },[])

  const [pokeurl, setPokeurl] = useState(`https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=8`)
  useEffect(() => {
    if(!query.get('page')){
      setPage(0)
      setPokeurl(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=8`)
    }else{
      setPage(query.get('page'))
      // n = query.get('page') * 8
      setPokeurl(`https://pokeapi.co/api/v2/pokemon?offset=${query.get('page')*8}&limit=8`)
    }
    console.log(query.get('page'))
  },[query.get('page')])

  const {data: pokeresults, isPending: pokeispending, error:pokeerror} = useFetch(pokeurl)

  useEffect(() => {
    console.log(pokeurl)
    
    console.log(pokeresults)

  },[pokeresults])

  // const {data: blogs, pendiente, error2} = useFetch(url2);
  // where all pokemon are stored
  const {data: blogs, isPending:pendiente, error:error2} = useFetch(urlPage);

  

  function handleOnSubmit(e){
    e.preventDefault();
    console.log("busqueda" +searchTerm);
    //hace la busqueda del termino escrito en el input agregandolo al final del url de busqueda
    setBusqueUrl(urlSearch + searchTerm);
    console.log("busqueUrl " + busqueUrl)
    console.log(pores)
    console.log("nombre resultado " + pores.name)
    //actualiza estas variables de control para mostrar la ventana de resultados
    setBus(true);
    setDisplay("display")

    // if(bus == true ) setBus(false);
    console.log("searchTerm " + searchTerm + " length " + searchTerm.length)
    setMostrarVentana("mostrar")
    
  }

  const handleOnChange = (e) =>{
    //transforma el termino de busqueda a miniscula para agregarse al final del api de busqueda
    setSearchTerm(e.target.value.toLowerCase())
    //si el input esta vacio, se vacian las variables y se oculta la ventana
    if(searchTerm.length <= 1){
      //setPokeResults({});
      setDisplay("no-display")
      setBus(false);
    }
  }

  const handleNext = (e) =>{
    //actualiza la url a la siguiente cantidad de resultados
    console.log("url siguiente " + blogs.next);
    // setUrlPage(blogs.next);
    // setPokeurl(page+1)
    // window.history.replaceState(null, '', `pokemon?page=${Number(page)+1}`)

  }

  const handlePrev = (e) =>{
    //actualiza la url a la pagina anterior del url actual
    console.log("url anterior" + blogs.previous)
    // setUrlPage(blogs.previous)
    setPokeurl(page-1)
  }

  return (
    <div className="Pokeapi">
      
      
      <header>
      <h2>Pokepi</h2>

      <form onSubmit={handleOnSubmit}>
        <input type="search"
        placeholder="Search Pokemon"
        value={searchTerm}
        onChange={handleOnChange}
        className="search" />
        <button>Search</button>
      </form>
      </header>
      
      
      <main className="pokemon-section">
      <div className={"busqueda-section " + mostrarVentana}>
        <div className="busqueda">
          {bus && 
          <div>{pendientes && <Loader />}
          {error3 && <div>{error3}</div>}
        {pores && !error3 ? <div className={display}><Card pokemon={urlSearch+pores.id} /> </div> : <p>nada</p>  }</div>
          }
        </div>
      </div>
        
        
        
        { pendiente && <Loader />}
            { pokeerror && <div>{error2}</div>}
            { pokeresults && (
              <section className="fetch-section ">
                <div className="buttons">
                <Link to={`?page=${Number(page)-1}`}  > Previous </Link>
                <Link to={`?page=${Number(page)+1}`} > Next </Link>
                </div>
                <section className="pokemon-results">
                  
                  {pokeresults.results.map((result) =>{
                    return <Card pokemon={result.url} key={result.id} />
                  })}
                    
                </section>

              </section>
            )}
      
      </main>
    </div>

    
  );
}

export default Pokeapi;
