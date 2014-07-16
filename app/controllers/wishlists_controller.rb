class WishlistsController < ApplicationController
  before_action :signed_in_user
  before_action :set_movie, only: [ :edit, :update ]

	def index
    @user = current_user
		@wish_list_movies = get_wishlist_movies
	end

	def new
    @wishlist_movie  = Movie.new
  end

  def edit
  end

  def create
    @wishlist_movie = current_user.movies.build(movie_params)
    save = true
    current_user.movies.each do |movie|
      if @wishlist_movie.title == movie.title
        save = false
      end
    end
    if save
     @wishlist_movie.save
    end
    redirect_to '/wishlists'
  end

  def update
    respond_to do |format|
      if @wishlist_movie.update(movie_params)
        format.html { redirect_to '/wishlists'}
        format.json { head :no_content }
      else
        format.html { render action:  'edit' }
        format.json { render json: @wishlist_movie.errors, status: :unprocessable_entity }
      end
    end
  end

  private
    def set_movie
      @wishlist_movie = Movie.find(params[:id])
    end

    def movie_params
      params.require(:movie).permit(:title)
    end
end
