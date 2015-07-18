get "/add_photographer" do
  erb :"/photographers/add_photographer"
end

get "/add_photographer_confirm" do
  Photographer.create({"name" => params["photographer"]["name"]})
  erb :"/menu"
end

get "/delete_photographer" do
  @photographers = Photographer.all
  erb :"/photographers/delete_photographer"
end

get "/delete_photographer_confirm" do
  Photographer.destroy(params["photographer"])
  erb :"/menu"
end