export const fetchAllPokemon = () => {
  return $.ajax({
    method: 'GET',
    // url: '../../app/controllers/api/pokemon_controller'
    url: 'api/pokemon'
  });
}; 