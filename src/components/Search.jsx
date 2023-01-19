import React from "react";

const Search = ({ handleSearch }) => {
  return (
    <form className="d-flex w-100 w-md-50 searchbar" role="search">
      <input className="form-control me-2 " type="text" placeholder="Busca un pokémon por su nombre" aria-label="Search" onChange={handleSearch} />
    </form>
  )
}
export default Search