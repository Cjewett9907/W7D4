import React from 'react';
import { Link } from 'react-router-dom';


const PokemonDetailItem = ({pokemon}) => (
  <li class="li-clean">
    <img src={pokemon.image_url} class="img-background"/>
    <h1>{pokemon.name}</h1> 
    <h1>{pokemon.poke_type}</h1>
    <h1>{pokemon.attack}</h1>
    <h1>{pokemon.defense}</h1>
    <h1>{pokemon.moves}</h1>
  </li>
);

export default PokemonDetailItem;