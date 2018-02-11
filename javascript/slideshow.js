$(document).ready(function() {
  var path = window.location.pathname;
  var page = path.split("/").pop();
  var id = page.split('.html')[0];

  request_settings_data_from_server(id).done(function(response) {
    $("#slideshow > img").hide();

    get_files(id).done(function(file_response){
      files = JSON.parse(file_response);
      $('#banner').append("<img src='" + files.banner + "'/>");
      console.log(files.banner);
      for(index = 0; index < files.slides.length; ++index) {
      $('#slideshow').append("<img src='" + files.slides[index] + "'/>");
      }
      show_length = files.slides.length * parseInt(response.display_time) * 1000;
      hide_length = parseInt(response.delay_time) * 1000;
      flag = true;
      delay_time = show_length;
      //loop between showing slideshow and hiding slideshow.
      setInterval(function() {
        if(flag) {
          delay_time = show_length;
          $('#banner > img')
            .fadeIn(1000);
          $('#slideshow')
            .fadeIn(1000);
          $('#slideshow > img:first')
            .fadeIn(1000);
          slideshow = setInterval(function() {
            $('#slideshow > img:first')
              .fadeOut(1000)
              .next()
              .fadeIn(1000)
              .end()
              .appendTo('#slideshow');
          }, parseInt(response.display_time) * 1000);
        } else {
          delay_time = hide_length;
          $('#banner > img')
            .fadeOut(1000);
          $('#slideshow').fadeOut(1000);
          clearInterval(slideshow);
          $('#slideshow > img:first').appendTo('#slideshow').fadeOut(1000);
        }
        flag = !flag;
      }, delay_time);

    });
  });
})
