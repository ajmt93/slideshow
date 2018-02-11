function update_active_slideshows_view(ids) {
  for(index = 0; index < ids.length; ++index) {
    var html = `
      <div class='row' id='row:` + ids[index] + `'>
          <div class='col-xs-12 col-md-6'>
              <a href='` + ids[index] + `.html'>` + ids[index] + `</a>
          </div>
          <div class='col-xs-6 col-md-3'>
              <button type="button" class="btn btn-default btn-lg" data-id='` + ids[index] + `' onClick="slideshow_settings(this.getAttribute('data-id'))"><span class="glyphicon glyphicon-pencil"/></button>
          </div>
          <div class='col-xs-6 col-md-3'>
              <button type="button" class="btn btn-default btn-lg" data-id='` + ids[index] + `' onClick="end_slideshow(this.getAttribute('data-id'))"><span class="glyphicon glyphicon-trash"/></button>
          </div>
      </div>
  `;
  if(ids[index] != "") {
    $("#slideshow_container").append(html);
  }
  };
};
