import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-dark bg-danger">
        <div className="container-fluid">
          <span className="navbar-brand ps-3 mb-0 h1">PokeDex using <a href="https://pokeapi.co">PokeAPI </a></span>
        </div>
      </nav>
    </header>
  )
}

export default Header;