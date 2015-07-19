class Album < ActiveRecord::Base
  has_and_belongs_to_many :photos

  def json_format
    hash = {}
    hash["id"] = self.id
    hash["name"] = self.name
    hash
  end

end
