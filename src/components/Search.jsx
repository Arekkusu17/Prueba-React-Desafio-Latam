import React from "react";

const Search = ({ handleSearch, valueSearch }) => {
  return (
    <form className="d-flex w-50" role="search">
      <input className="form-control me-2 " type="text" placeholder="Busca un pokémon por su nombre" aria-label="Search" onChange={handleSearch} value={valueSearch} />
    </form>
  )
}
export default Search