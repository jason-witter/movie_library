class Movie < ActiveRecord::Base
	belongs_to :user
	default_scope -> { order('title ASC') }
	validates :user_id, presence: true
end
