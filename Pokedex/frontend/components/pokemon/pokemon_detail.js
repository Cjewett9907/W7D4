import React, { Component } from 'react';
import PokemonIndexItem from './pokemon_index_item';



class PokemonDetail extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon(); 
  }
  
  render() {
    const pokemon = this.props.pokemon;
    
    return (
      <PokemonDetailItem pokemon={pokemon} />
    );
    
    return (
      <div>
      <ul className="img-container">
        {pokemon}
      </ul>
      </div>
    );
  }
};

export default PokemonDetail; 