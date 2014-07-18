class AddReleaseDateToMovie < ActiveRecord::Migration
  def change
  	add_column :movies, :releaseDate, :date
  end
end
