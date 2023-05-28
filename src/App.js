
import './App.css';
import Pokeapi from './Pokeapi';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import Pokedetail from './Pokedetail';
import GuessPokemon from './GuessPokemon/GuessPokemon'
import Landing from "./Landing"
function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="pokemon"  element={<Pokeapi />} />
          <Route path=":pokeName" element={<Pokedetail />} />
          <Route path="/guessThePokemon" element={<GuessPokemon />} />
          <Route index  element={<Landing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
