class MoviesController < ApplicationController
  before_action :signed_in_user
  before_action :set_movie, only: [:edit, :update, :destroy]

	def index
    @user = current_user
    if @user.movies
		  @movies = @user.movies
    else
      @movies = {}
    end
  end

  def new
    @movie  = Movie.new
  end

  def edit
  end

  def create
    existing_movies = current_user.movies.to_a
    @movie = current_user.movies.build(movie_params)
    save = true
    existing_movies.each do |loop_movie|
      if @movie.title == loop_movie.title
        save = false
      end
    end
    if save
     @movie.save
    end
    redirect_to '/movies'
  end

  def update
    respond_to do |format|
      if @movie.update(movie_params)
        @movies = current_user.movies
        format.html { render :partial => 'movies/table'}
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
