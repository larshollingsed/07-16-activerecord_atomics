$("#choose_album").click(loadAlbumInfo);
  
function loadAlbumInfo() {
  var request = new XMLHttpRequest();
  var formElement = document.getElementById("album_form");
  request.open("POST", "/get_album_info");
  
  // sends info from form (via FormData) to previously opened POST route
  request.responseType = "json";
  request.send(new FormData(formElement));
  
  request.addEventListener("load", function() {
    var all_photos = $(".picture")
    for (var x = 0; x < all_photos.length; x++) {
      all_photos[x].classList.add("secret");
    }
    
    var photo_ids = this.response.photos;
    for (var x = 0; x < photo_ids.length; x ++) {
      this_photo = "#photo" + photo_ids[x];
      $(this_photo).removeClass("secret")
    }
    $("#album_name")[0].innerText = this.response.name;
  });
};