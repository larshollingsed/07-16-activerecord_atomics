get "/add_album" do
  erb :"/albums/add_album"
end

get "/add_album_confirm" do
  Album.create({"name" => params["album"]["name"]})
  erb :"/menu"
end
