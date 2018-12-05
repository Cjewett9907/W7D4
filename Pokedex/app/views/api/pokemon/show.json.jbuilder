json.pokemon do
  json.extract! @pokemon, :id, :name, :attack, :defense, :moves, :poke_type, :item_ids
  json.image_url asset_path(@pokemon.image_url)
end

json.pokemon.items do |item|
  json.extract! @pokemon, :items
end


# json.extract! @pokemon.id do
#   json.id pokemon.id 
#   json.name pokemon.name 
#   json.image_url pokemon.image_url
# end