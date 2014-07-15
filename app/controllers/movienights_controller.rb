class MovienightsController < ApplicationController
	include MovienightsHelper
  before_action :signed_in_user
	def index
    @user = current_user
		@movienight_movies = get_movie_night_movies
	end

	def show
		count = get_movie_night_movies.count
		@random_movie =  get_movie_night_movies[choose_movie(count)]
	end

	private
		def get_movie_night_movies
			@movienight_movies = current_user.movies.where( "downloaded = ? AND watched = ?", true, false )
		end
end
