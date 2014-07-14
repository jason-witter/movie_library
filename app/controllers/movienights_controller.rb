class MovienightsController < ApplicationController
  before_action :signed_in_user
	def index
    @user = current_user
		@movienight_movies = @user.movies.where( "downloaded = ? AND watched = ?", true, false )
	end
end
