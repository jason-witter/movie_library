class WishlistController < ApplicationController
	def index
		@wish_list_movies = Movie.where( "downloaded = ? AND watched = ?", false, false )
	end
end
