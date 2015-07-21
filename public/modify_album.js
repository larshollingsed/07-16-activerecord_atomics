$("#change_album").change(loadAlbumInfo);
  
function loadAlbumInfo() {
  var request = new XMLHttpRequest();
  var formElement = document.getElementById("album_form");
  request.open("POST", "/get_album_info");
  
  // sends info from form (via FormData) to previously opened POST route
  request.responseType = "json";
  request.send(new FormData(formElement));
  
  request.addEventListener("load", function() {
    checkboxes = $(".photo_checkbox");
    for (var x = 0; x < checkboxes.length; x++) {
      checkboxes[x].checked = false;
    }
    if (this.response.photos.length !== 0) {
      var photo_ids = this.response.photos;
      for (var x = 0; x < photo_ids.length; x ++) {
        this_photo = "photo" + photo_ids[x];
        document.getElementById(this_photo).checked = true;
      }
    }
    $("#album_name")[0].innerText = this.response.name;
    $("#hidden_album_id")[0].value = this.response.id;
    $("#album_to_modify").removeClass("secret");
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