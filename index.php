<html>
<head>
  <meta charset="utf-8"/>
  <title>Simple Slideshower</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="javascript/display-slideshows.js"></script>
<script src="javascript/ajax.js"></script>
<script src="javascript/modals.js"></script>
</head>
<body>
  <div class='container'>
    <div class='row'>
      <div class='col-xs-12'>
        <h1>Slideshow Control Panel</h1>
      </div>
    </div>
    <div id='slideshow_container'>
      <div class='row'>
        <div class='col-xs-12 col-md-6'>
          <h2>Active slideshows</h2>
        </div>
        <div class='col-xs-12 col-md-6'>
          <p><button type="button" class="btn btn-info" id='newSlideshow'>New Slideshow</button></p>
        </div>
      </div>
    </div>
  </div>
</body>
<?php include("modals/settings-modal.html"); ?>
<?php include("modals/delete-modal.html"); ?>
</html>
