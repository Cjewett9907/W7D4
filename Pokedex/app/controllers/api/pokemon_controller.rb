class Api::PokemonController < ApplicationController
  
  def  show
    @pokemon = Pokemon.find(params[:id])
    render :show 
  end
  
  def index
    @pokemon = Pokemon.all
    render :index 
  end
  
  
end
