import './App.css';
import useFetch from './useFetch';
import Card from './Card';
import { useState, useEffect } from "react"
import Loader from "./loader/Loader"
function Pokeapi() {
  const url2 = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=8";
  const urlSearch = "https://pokeapi.co/api/v2/pokemon/";
  
  
  

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
  
  useEffect(()=>{
    setUrlPage(url2);
  },[])

  // const {data: blogs, pendiente, error2} = useFetch(url2);
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
    setUrlPage(blogs.next);


  }

  const handlePrev = (e) =>{
    //actualiza la url a la pagina anterior del url actual
    console.log("url anterior" + blogs.previous)
    setUrlPage(blogs.previous)
  }

  return (
    <div className="Pokeapi">
      <header>
      <h2>Pokepi</h2>

      <form onSubmit={handleOnSubmit}>
        <input type="search"
        placeholder="Search Pokemon"
        value={searchTerm}
        onChange={handleOnChange} />
        <button>Buscar</button>
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
            { error2 && <div>{error2}</div>}
            { blogs && (
              <section className="fetch-section ">
                <div className="buttons">
                  <button onClick={handlePrev}>Previous page</button>
                  <button onClick={handleNext}>Next page</button>
                </div>
                <section className="pokemon-results">
                  
                  {blogs.results.map((result) =>{
                    return <Card pokemon={result.url} />
                  })}
                    
                </section>

              </section>
            )}
      
      </main>
    </div>

    
  );
}

export default Pokeapi;
