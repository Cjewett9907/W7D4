export const selectAllPokemon = (state) => {
  const pokeVals = Object.values(state.entities.pokemon);
  return pokeVals;
};

// export const selectAllPokemon = state => Object.values(state.sentities.pokemon);