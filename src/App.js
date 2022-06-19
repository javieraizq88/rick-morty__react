import logo from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Characters from './components/characters';

function App() {

  const [characters, setCharacters] = useState(null);

  const reqCharacters = async () => {
    const getCharacters = await fetch("https://rickandmortyapi.com/api/character")
    const characterApi = await getCharacters.json();

    setCharacters(characterApi.results)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>


        {/* si tengo algo en character, me muestra los characters */}
        {/* si no tengo nada en characters, me muestra la img + btn del home */}
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        )
          : (
            <>
              <img src={logo} className="img-home" alt="Rick & Morty" />
              <button onClick={reqCharacters} className="btn-search">Buscar personajes</button>
            </>
          )}


      </header>
    </div>
  );
}

export default App;
