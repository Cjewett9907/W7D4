import * as APIUtil from '../util/api_util'; 

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
}); 

export const receivePokemon = pokemon => ({
  type: RECEIVE_POKEMON, 
  pokemon 
}); 

// window.receiveAllPokemon = receiveAllPokemon

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
); 

export const requestPokemon = () => (distpatch) => (
  APIUtil.fetchPokemon()
    .then(pokemon => distpatch(receivePokemon(pokemon)))
); 
