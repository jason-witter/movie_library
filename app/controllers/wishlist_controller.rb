class WishlistController < ApplicationController
  before_action :set_movie, only: [ :edit, :update ]

	def index
		@wish_list_movies = Movie.where( "downloaded = ? AND watched = ?", false, false )
	end

	def new
    @movie  = Movie.new
  end

  def edit
  end

  def create
    @movie = Movie.new(movie_params)
    if @movie.save
      render 'index'
    end
  end

  def update
    respond_to do |format|
      if @movie.update(movie_params)
        format.html { redirect_to '/'}
        format.json { head :no_content }
      else
        format.html { render action:  'edit' }
        format.json { render json: @movie.errors, status: :unprocessable_entity }
      end
    end
  end

  private
    def set_movie
      @movie = Movie.find(params[:id])
    end

    def movie_params
      params.require(:movie).permit(:title)
    end
end
