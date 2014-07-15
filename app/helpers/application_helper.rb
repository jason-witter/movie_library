module ApplicationHelper
	def get_wishlist_movies
		Movie.where( "downloaded = ? AND watched = ?", false, false )
	end

	def get_movienight_movies
		Movie.where( "downloaded = ? AND watched = ?", true, false )
	end
end
