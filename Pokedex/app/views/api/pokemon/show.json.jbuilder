json.pokemon do
  json.extract! @pokemon, :id, :name, :attack, :defense, :moves, :poke_type
  json.image_url asset_path(@pokemon.image_url)
end

json.items do |item|
  @pokemon.items.each do |item|
    json.set! item.id do
      json.extract! item, :id, :name, :pokemon_id
    end
  end
  

end


# json.extract! @pokemon.id do
#   json.id pokemon.id 
#   json.name pokemon.name 
#   json.image_url pokemon.image_url
# end