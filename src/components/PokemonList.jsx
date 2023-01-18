import React from "react";
import PokemonListItem from "./PokemonListItem";

const PokemonList = ({ pokemons, pokeInfo }) => {
  const listarPokemons = pokemons.map((pokemon) => {
    return (
      <PokemonListItem pokemon={pokemon} key={pokemon.id} pokeInfo={pokeInfo} />
    )
  }
  )

  return (
    <div className="pokedex-grid">
      {listarPokemons}
    </div>
  )
}

export default PokemonList