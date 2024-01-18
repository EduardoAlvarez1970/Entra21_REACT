import { useEffect, useState } from 'react'

import './App.css'


function App() {

  const [id, setId] = useState(1);
  const [pokemon, setPokemon] = useState(null)

  const fetchData = async () => {
    try{
      const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

      const dados = await resposta.json();
      setPokemon(dados);
    } catch(error) {
      console.error('Erro: ', error)
    }
  }

  useEffect(()=> {
    fetchData();
  }, [id]);

  const proximo = () => {
    setId(id +1);
  }
  const anterior = () => {
    setId(id -1);
  }

  return (
    <div className="app-container">
      {pokemon && (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>        
        <h1>Pokedex</h1>
        <p>{pokemon.name}</p>
        <img src={pokemon.sprites.front_default} alt="" />
        <button onClick={anterior}>Anterior</button>
        <button onClick={proximo}>Proximo</button>
        </div>
        )
    }
    </div>
  )






}

export default App
