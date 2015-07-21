document.getElementById("change_album").addEventListener("change", loadAlbumInfo);
  
function loadAlbumInfo() {
  var request = new XMLHttpRequest();
  var formElement = document.getElementById("album_form");
  request.open("POST", "/get_album_info");
  
  request.addEventListener("load", function() {
    // an Array of all elements with the "picture" class
    var all_photos = $("#photos_in_album div.photo_container");
    
    // an Array of all elements with the "top_photo_star" class
    var all_stars = $(".top_photo_star");
    
    // adds the "secret" class to all photos
    for (var x = 0; x < all_photos.length; x++) {
      all_photos[x].classList.add("secret");
      all_photos[x].classList.remove("not_secret")
    }
    
    // // add the "secret" class to all top stars
    // for (var x = 0; x < all_stars.length; x++) {
    //   all_stars[x].classList.add("secret");
    // }
    
    // gets the photo ids of all photos from this response (in the album selected)
    var photo_ids = this.response.photos;
    
    // loops through all photos in this album
    for (var x = 0; x < photo_ids.length; x++) {
      // creates a string for this specific photo's id
      this_photo = "#photo" + photo_ids[x];
      
      // removes the "secret" class from this specific photo (by id)
      $(this_photo).removeClass("secret")
      $(this_photo).addClass("not_secret")
      
      // creates a string for this specific photo's star (whether it exists or not)
      // top_star = this_photo + "star"
      //
      // // if the star exists this removes the "secret" class from it
      // if ($(top_star).length !== 0)  {
      //   $(top_star).removeClass("secret")
      // }
      // displays the album name that the user chose
      $("#album_name")[0].innerText = this.response.name;
      
    }
  });
  
  // sends info from form (via FormData) to previously opened POST route
  request.responseType = "json";
  request.send(new FormData(formElement));
};