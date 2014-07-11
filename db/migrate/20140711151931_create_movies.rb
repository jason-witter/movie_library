class CreateMovies < ActiveRecord::Migration
  def change
    create_table :movies do |t|
      t.string :title
      t.boolean :watched, default: false
      t.boolean :downloaded, default: false

      t.timestamps
    end
  end
end
