class MovienightsController < ApplicationController
	include MovienightsHelper
  before_action :signed_in_user
	def index
    @user = current_user
		@movienight_movies = get_movienight_movies
	end

	def show
		count = get_movie_night_movies.count
		@random_movie =  get_movie_night_movies[choose_movie(count)]
	end
end
