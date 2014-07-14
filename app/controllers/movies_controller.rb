class MoviesController < ApplicationController
  before_action :set_movie, only: [:edit, :update, :destroy]

	def index
		@movies = Movie.all
  end

  def new
    @movie  = Movie.new
  end

  def edit
  end

  def create
    @movie = Movie.new(movie_params)
    @movie.save
    redirect_to '/'
  end

  def update
    respond_to do |format|
      if @movie.update(movie_params)
        format.html { redirect_to '/movies'}
        format.json { head :no_content }
      else
        format.html { render action:  'edit' }
        format.json { render json: @movie.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @movie.destroy
    respond_to do |format|
      format.html { redirect_to '/movies' }
      format.json { head :no_content }
    end
  end

  private

    def set_movie
      @movie = Movie.find(params[:id])
    end

    def movie_params
      params.require(:movie).permit(:title, :watched, :downloaded)
    end
end
