get "/add_album" do
  erb :"/albums/add_album"
end

get "/add_album_confirm" do
  Album.create({"name" => params["album"]["name"]})
  erb :"/menu"
end

get "/delete_album" do
  @albums = Album.all
  erb :"/albums/delete_album"
end

get "/delete_album_confirm" do
  Album.destroy(params["album"]["name"])
  erb :"/menu"
end

get "/modify_album" do
  @albums = Album.all
  @photos = Photo.all
  erb :"/albums/modify_album"
end

post "/get_album_info" do
  album = Album.find(params["album"]["id"])
  pics = []
  album.photos.each do |photo|
    pics << photo.id
  end
  jason = album.json_format
  jason["photos"] = pics
  json jason
end

post "/save_album_modifications" do
  album = Album.find(params["album"]["id"].to_i)
  if album.name != params["album"]["name"] && params["album"]["name"] != ""
    album.name = params["album"]["name"]
    album.save
  end
  if params["photo"] != nil
    album.photos.clear
    params["photo"]["ids"].each do |photo_id|
      photo = Photo.find(photo_id.to_i)
      album.photos << photo
    end
  end
  json album
end

get "/view_albums" do
  @albums = Album.all
  @photos = Photo.all
  erb :"/albums/view_albums"
end