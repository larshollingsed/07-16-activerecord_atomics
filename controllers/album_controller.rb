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