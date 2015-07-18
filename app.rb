require "pry"
require "active_record"
require "sqlite3"
require "sinatra"
require "sinatra/reloader"

ActiveRecord::Base.establish_connection(adapter: 'sqlite3', database: 'community_photos.db')

ActiveRecord::Base.logger = ActiveSupport::Logger.new(STDOUT)

require_relative "database_setup.rb"

require_relative "models/photographer.rb"
require_relative "models/photo.rb"
require_relative "models/album.rb"

require_relative "controllers/photo_controller.rb"
