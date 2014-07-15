module MovienightsHelper
	def choose_movie(count)
    unless count == 0
      b = count - 1
      a = 0
      random_movie = rand(a..b)
    else
      random_movie = -1
    end
  end
end