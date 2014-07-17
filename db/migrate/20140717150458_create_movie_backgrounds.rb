class CreateMovieBackgrounds < ActiveRecord::Migration
  def change
    create_table :movie_backgrounds do |t|
      t.string :name

      t.timestamps
    end
  end
end
