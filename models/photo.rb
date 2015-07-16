class Photo < ActiveRecord::Base
  belongs_to :photographer
  has_and_belongs_to_many :albums
  
  validates :name, presence: true
  
  def top_photo?
    self.albums.length >= 3
  end
  
  def self.top_photos
    top_photos = []
    self.all.each do |photo|
      if photo.top_photo?
        top_photos << photo
      end
    end
    top_photos
  end
      
end