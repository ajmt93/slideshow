//Delete modal
function end_slideshow(clicked_id) {
  document.getElementById('delete-id').innerHTML = clicked_id;
  $('#delete-modal').modal('show');
};

//Settings modal
function slideshow_settings(clicked_id) {
  document.getElementById('settings-id').innerHTML = clicked_id;
  //function from ajax.js
 request_settings_data_from_server(clicked_id).done(function (response) {
   document.getElementById('banner_directory').value = response.banner_directory;
   document.getElementById('slideshow_directory').value = response.slideshow_directory;
   document.getElementById('delay_time').value = response.delay_time;
    document.getElementById('display_time').value = response.display_time;
    $('#settings-modal').modal('show');
  });
};
