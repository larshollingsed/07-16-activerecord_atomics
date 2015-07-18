get "/add_photographer" do
  erb :"/photographers/add_photographer"
end

get "/add_photographer_confirm" do
  Photographer.create({"name" => params["photographer"]["name"]})
  erb :"/menu"
end