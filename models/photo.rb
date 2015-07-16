class Photo < ActiveRecord::Base
  belongs_to :photographer
  has_and_belongs_to_many :albums
end