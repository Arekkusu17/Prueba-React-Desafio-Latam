import { useEffect, useState } from "react";
import PokemonInfo from "./PokemonInfo";
import PokemonList from "./PokemonList";
import Search from "./Search";
import ClipLoader from "react-spinners/ClipLoader"


const MiApi = () => {
  const [pokemonList, setPokemonList] = useState([])
  const [pokemonListFilt, setPokemonListFilter] = useState([])
  const [pokeData, setPokeData] = useState();
  const [loadingPokemonList, setLoadingPokemonList] = useState(false)


  const getPokemonData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) { }
  };

  const getPokemons = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0");
      const data = await response.json();
      return data;
    } catch (err) {
      throw err
    }
  }
  const fetchPokemons = async () => {
    try {
      setLoadingPokemonList(true)
      const data = await getPokemons();
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemonList(results);
      setPokemonListFilter(results)
      setLoadingPokemonList(false)
    } catch (err) {
      throw err
    }
  };


  useEffect(() => {
    fetchPokemons()
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
  }

  const handlePokeInfo = (pokemon) => {
    setPokeData(pokemon);
  }


  return (
    <div className="bg-gray">
      <Search handleSearch={handleSearch} />
      <div className="btn-group">
        <button className="btn btn-dark" onClick={() => handleSort("name")}>Sort by Name A{"->"}Z</button>
        <button className="btn btn-dark" onClick={() => handleSort("id")}>Sort by ID</button>
      </div>
      <div className="d-flex pokedex-container ">
        {loadingPokemonList ? (
          <div className="loader">
            <ClipLoader size="250px" color="#e22121" loading={loadingPokemonList} />
          </div>
        ) : (
          <PokemonList pokemons={pokemonListFilt} className="pokedex-grid"
            pokeInfo={handlePokeInfo} />
        )
        }
        <PokemonInfo pokeDatos={pokeData} />
      </div>
    </div>
  )
}

export default MiApi