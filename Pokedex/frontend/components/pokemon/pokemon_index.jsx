import React, { Component } from 'react';
import PokemonIndexItem from './pokemon_index_item';



class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon(); 
  }
  
  render() {
    const pokemon = this.props.pokemon.map ((pokemon) => {
      return (
        <PokemonIndexItem pokemon={pokemon} key={pokemon.id}/>
      );
    });
    
    return (
      <div>
      <ul className="img-container">
        {pokemon}
      </ul>
      </div>
    )
  }
};

export default PokemonIndex; 