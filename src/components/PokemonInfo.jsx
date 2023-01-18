import React from "react";

const PokemonInfo = ({ pokeDatos }) => {
  return (
    <>
      {
        (!pokeDatos) ? "" : (
          <div className="pokemon-info text-center">
            <img src={pokeDatos.sprites.other['official-artwork'].front_default} className="img-fluid poke-info-img" alt="..." />
            <div className="card-body ">
              <h5 className="card-title"><strong>#{pokeDatos.id}</strong> - {pokeDatos.name}</h5>
              <div className="card-text">
                {pokeDatos.types.map((type, idx) => {
                  return (
                    <div key={idx} className="pokemon-type-text ">
                      {type.type.name}
                    </div>
                  );
                })
                }
              </div>
              <ul className="card-text base-stats">
                {
                  pokeDatos.stats.map((stat, idx) => {
                    return (
                      <li key={idx}>{stat.stat.name}:{stat.base_stat}</li>

                    )
                  })
                }
              </ul>

            </div>

          </div>
        )
      }
    </>
  )
}

export default PokemonInfo;