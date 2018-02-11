$(document).ready(function() {
  //get the existing active slideshows.
  $.ajax({
    type: "POST",
    url: "SlideshowController.php",
    data: {Function: "get_ids", Data: null},
    success: function (new_ids) {
      ids = new_ids.split(', ');
      console.log(ids);
      //function in display_slideshows.js
      update_active_slideshows_view(ids);
    }
  });

  //create a new slideshow Ajax request
  $('#newSlideshow').click(function() {
    $.ajax({
     type: "POST",
      url: "SlideshowController.php",
      data: { Function: "new_slideshow", Data: null },
      success: function (id) {
        console.log("Success, added: " + id);
        //function in display_slideshows.js
        update_active_slideshows_view([id]);
      },
      error: function () {
        console.log("Something has gone terribly wrong.");
      }
    });
  });

    //Send end slideshow request to delete files.
    $('.confirm-end-slideshow').click(function() {
      id = document.getElementById('delete-id').innerHTML;

      $.ajax({
        type: "POST",
        url: "SlideshowController.php",
        data:{Function: "end_slideshow", Data: id},
        success: function (removed_id) {
          row = document.getElementById('row:' + id);
          row.outerHTML = '';
          delete div;
          console.log("success, removed: " + removed_id);
        },
        error: function () {
          console.log("Item could not be deleted.");
        }
      })
    });
});

//Get settings data from db
//returns ajax request to be used with your function in .done()
function request_settings_data_from_server(id) {
  return $.ajax({
    dataType: "json",
    type: "POST",
    url: "SlideshowController.php",
    data: {Function: "get_json", Data: id}
  });
}

//send settings data to save in db
function save_settings_data_to_server() {
  id = document.getElementById('settings-id').innerHTML;
  //if this is needed elsewhere, this could be it's own function, form to object.
  form = document.getElementById("settings");
  var settings = {};
  for(var index = 0; index < form.length; index++) {
    settings[form.elements[index].id] = form.elements[index].value;
  }
  $.ajax({
   type: "POST",
    url: "SlideshowController.php",
    data: { Function: "save_json", Data: JSON.stringify({id: id, contents: settings}) },
    success: function (id) {
      console.log("Success, settings saved: " + id);
    },
    error: function () {
      console.log("Something has gone terribly wrong.");
    }
  });
  $('#settings-modal').modal('hide');
}

//Get file(s) from provided path.
//returns ajax request to be used with your function in .done()
function get_files(id) {
  return $.ajax({
    type: "POST",
    url: "SlideshowController.php",
    data: {Function: "get_files", Data: id}
  });
}
