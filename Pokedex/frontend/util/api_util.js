export const fetchAllPokemon = () => {
  return $.ajax({
    method: 'GET',
    // url: '../../app/controllers/api/pokemon_controller'
    url: '/api/pokemon'
  });
}; 

export const fetchPokemon = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/pokemon/${id}`
  });
}; 
