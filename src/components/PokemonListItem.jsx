import React from "react";

const PokemonListItem = ({ pokemon, pokeInfo }) => {
  return (
    // <div className="col-12 ">
    <div className="card mb-3 col-12 col-lg-6" key={pokemon.id}>
      <div className="row g-0">
        <div className="d-flex justify-content-center col-4">
          <img src={pokemon.sprites.front_default} className="img-fluid rounded-start" alt={pokemon.name} />
        </div>
        <div className="col-8">
          <div className="card-body">
            <h5 className="card-title"><strong>#{pokemon.id}</strong> - {pokemon.name}</h5>
            {/* <p className="card-text">
                {pokemon.types.map((type, idx) => {
                  return (
                    <div key={idx} className="pokemon-type-text ">
                      {type.type.name}
                    </div>
                  );
                })
                }
              </p> */}
            <button className="btn btn-success" onClick={() => { pokeInfo(pokemon) }}>Ver info</button>
            {/* <p className="card-text"><small className="text-muted">dsdssd</small></p> */}
          </div>
        </div>
      </div>
    </div>
    // </div>

    // <div className="pokemon-card">
    //   <div className="pokemon-img-container">
    //     <img
    //       src={pokemon.sprites.front_default}
    //       alt={pokemon.name}
    //       className="pokemon-img"
    //     />
    //   </div>
    //   <div className="card-body">
    //     <div className="card-top">
    //       <h3>{pokemon.name}</h3>
    //       <div>#{pokemon.id}</div>
    //     </div>
    //     <div className="card-bottom">
    //       <div className="pokemon-type">
    //         {pokemon.types.map((type, idx) => {
    //           return (
    //             <div key={idx} className="pokemon-type-text">
    //               {type.type.name}
    //             </div>
    //           );
    //         })}
    //       </div>

    //     </div>
    //   </div>
    // </div>
  )
}

export default PokemonListItem