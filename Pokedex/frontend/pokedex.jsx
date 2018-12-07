import React from 'react';
import ReactDOM from 'react-dom';
import { RECEIVE_ALL_POKEMON, receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions'; 
import {fetchAllPokemon} from './util/api_util'; 
import configureStore from './store/store';  
import { selectAllPokemon } from './reducers/selectors';
import PokemonIndexContainer from './components/pokemon/pokemon_index_container'
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';


const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Route path="/" component={PokemonIndexContainer} />
    </HashRouter>
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root'); 
  
  const store = configureStore(); 
  
  ReactDOM.render(<Root store={store}/>, rootEl); 
}); 

