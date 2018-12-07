import React from 'react';
import { Link } from 'react-router-dom';


const PokemonIndexItem = ({pokemon}) => (
  <li className="li-clean">
  <Link className='link-clean' to={`/pokemon/${pokemon.id}`}>
    <img src={pokemon.image_url} className="img-background"/>
    <h1>{pokemon.name}</h1> 
  
    </Link>
  </li>
);

export default PokemonIndexItem;