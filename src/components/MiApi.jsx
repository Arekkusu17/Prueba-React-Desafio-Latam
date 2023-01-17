import React, { useEffect, useState } from "react";

const MiApi = () => {
  const [pokemonList, setPokemonList] = useState([])

  const getDataList = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
    const data = await response.json();
    setPokemonList(data.results);
  }

  useEffect(() => {
    getDataList();
    console.log("Pokemon obtenidos")
  }, [])

  return (
    <div>
      <h1>Pokedexo</h1>

      <ul>
        {pokemonList.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default MiApi