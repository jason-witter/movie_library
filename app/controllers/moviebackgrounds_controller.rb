class MoviebackgroundsController < ApplicationController
	def index
		backgrounds = MovieBackground.all
		render json: backgrounds
	end
end
