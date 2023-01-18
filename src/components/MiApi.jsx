import React, { useEffect, useState } from "react";
import Header from "./Header";
import PokemonInfo from "./PokemonInfo";
import PokemonList from "./PokemonList";
import Search from "./Search";
import ClipLoader from "react-spinners/ClipLoader"

const MiApi = () => {
  const [pokemonList, setPokemonList] = useState([])
  const [pokemonListFilt, setPokemonListFilter] = useState([])
  const [pokeData, setPokeData] = useState();
  const [loading, setLoading] = useState(false)

  const getPokemons = async () => {
    try {
      // setLoadPokemon(`https://pokeapi.co/api/v2/pokemon?limit=906&offset=0`)
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=905&offset=0");
      const data = await response.json();
      return data;
    } catch (err) {

    }
  }

  const getPokemonData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) { }
  };

  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const data = await getPokemons();
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemonList(results);
      setPokemonListFilter(results)
      setLoading(false)
    } catch (err) { }
  };

  useEffect(() => {

    fetchPokemons();


  }, [])



  const handleSearch = (e) => {
    e.preventDefault()
    const searchValue = e.target.value.toLowerCase();
    if (searchValue.length > 0) {
      const filterPokemonList = pokemonList.filter((pokemon) => {
        return (
          pokemon.name.toLowerCase().includes(searchValue)
        );
      });
      setPokemonListFilter(filterPokemonList);
    } else {
      setPokemonListFilter(pokemonList);
    }
  };

  const handleSort = (key) => {
    const sortPokemonList = [...pokemonListFilt].sort((poke1, poke2) => (poke1[key] > poke2[key]) ? 1 : (poke1[key] < poke2[key]) ? -1 : 0);
    setPokemonListFilter(sortPokemonList);
    console.log(sortPokemonList);
  }


  return (
    <div>
      <Header />
      <Search handleSearch={handleSearch} />
      <div className="d-flex ">
        {loading ? (
          <div className="loader">
            <ClipLoader size="300" color="#36d7b7" loading={loading} />
          </div>
        ) : (
          <>


            <PokemonList pokemons={pokemonListFilt} className="pokedex-grid" pokeInfo={pokemon => setPokeData(pokemon)} />

          </>

        )
        }
        <PokemonInfo pokeDatos={pokeData} />
      </div>
      <button className="btn btn-primary" onClick={() => handleSort("name")}>Sort by Name A{"->"}Z</button>
      <button className="btn btn-primary" onClick={() => handleSort("id")}>Sort by ID</button>

    </div>
  )
}

export default MiApi