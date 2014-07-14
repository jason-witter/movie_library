class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :password_digest
      t.string :remember_token

      t.timestamps
    end
    add_index  :users, :remember_token
    add_column :movies, :user_id, :integer
    add_index :movies, [:user_id, :created_at]
  end
end
