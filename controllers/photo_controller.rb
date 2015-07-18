get "/" do
  erb :"/menu"
end

get "/add_photo" do
  @photographers = Photographer.all
  erb :"/photos/add_photo"
end

get "/add_photo_confirm" do
  @new_photo = Photo.create({"name" => params["photo"]["name"], "location" => params["photo"]["location"], "photographer_id" => params["photo"]["photographer"]})
  erb :"/menu"
end

get "/see_all_photos" do
  @photos = Photo.all
  erb :"/photos/see_all_photos"
end

get "/delete_photos" do
  @photos = Photo.all
  erb :"/photos/delete_photos"
end

get "/delete_photos_confirm" do
  parmas["photos"]["delete"].each do |photo|
    photo.destroy
  end
  erb :"/menu"
end