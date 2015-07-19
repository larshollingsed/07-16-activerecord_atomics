$("#choose_album").click(loadAlbumInfo);
  
// function loadAlbumInfo(){
  // $.getJSON("/modify_this_album", loadAlbumInfo())
// };

function loadAlbumInfo() {
  var request = new XMLHttpRequest();
  var formElement = document.getElementById("album_form");
  request.open("POST", "/modify_this_album");
  
  // sends info from form (via FormData) to previously opened POST route
  request.responseType = "json";
  request.send(new FormData(formElement));
  
  request.addEventListener("load", function() {
    $("#album_name")[0].innerText = this.response.name
    $("#hidden_album_id")[0].value = this.response.id
  });
  
};

$("#save_album_modifications").click(saveModifications);

function saveModifications() {
  var request = new XMLHttpRequest();
  var formElement = document.getElementById("photos_in_album");
  request.open("POST", "/save_album_modifications");
  // request.responseType = "json"
  request.send(new FormData(formElement));
  
  request.addEventListener("load", function() {
    
  });
}