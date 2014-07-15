module ApplicationHelper
include SessionsHelper
	def get_wishlist_movies
		current_user.movies.where( "downloaded = ? AND watched = ?", false, false )
	end

	def get_movienight_movies
		current_user.movies.where( "downloaded = ? AND watched = ?", true, false )
	end
end
