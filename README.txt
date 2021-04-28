A project requested by a friend to have an image appear during twitch streams to highlight previous work.

You'll need to make a few changes to get this working on your server.
1)
in index.html:
  line 5
  "setTimeout(function(){location.href="http://localhost:8080/sites/slideshow/index.php"} , 1000);"
  You will need to change the location.href="YOUR SERVER URL/to/index.php"
  Or you can configure your webserver to automatically go to index.php instead of index.html. Index.html was built as a precaution to forward to index.php.



File structure:
db will have a list of the active slideshow ids and all of the config files in json format.
    You can change default.json to change the settings each slideshow starts with.
javascript has the javascript files.
modals has modals, the pop up windows.
css is only used in the active slideshows.
