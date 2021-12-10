
import './App.css';
import Pokeapi from './Pokeapi';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import Pokedetail from './Pokedetail';
import Landing from "./Landing"
function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Pokeapi />} />
          <Route path=":pokeName" element={<Pokedetail />} />
          <Route path="landing" element={<Landing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
