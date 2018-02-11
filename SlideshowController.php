<?php

if(isset($_POST['Function'])){
    call_user_func($_POST['Function'], $_POST['Data']);
}
  /**
   * new slideshow called from index.html. This will create the required files
   * for a slideshow to start playing.
  **/
function new_slideshow() {
  $ids = explode(PHP_EOL, file_get_contents("db/ids.txt"));
  $id = new_id();

  copy("default.html", $id . ".html");
  copy("db/default.json", "db/" . $id . ".json");

  echo $id;
}

//deletes the html page, the json file, and the id in ids.txt
function end_slideshow($id) {
  $ids = explode(PHP_EOL, file_get_contents("db/ids.txt"));
  if (array_search($id, $ids) !== false) {
    array_splice($ids, array_search($id, $ids), 1);
    file_put_contents("db/ids.txt", implode("\n", $ids));
    unlink("$id.html");
    unlink("db/$id.json");

    echo $id;
  }
}

//generate a new id
function new_id() {
  $ids = explode(PHP_EOL, file_get_contents("db/ids.txt"));
  //on the off chance uniqid returns an id already in use, it will generate new ones until one not in use is created.
  do {
    $id = uniqid('');
  } while (array_search($id, $ids));

  $ids[] = $id;
  file_put_contents("db/ids.txt", implode("\n", array_filter($ids)));

  return $id;
}

//list ids
function get_ids() {
  $ids = explode(PHP_EOL, file_get_contents("db/ids.txt"));
  echo implode(', ', array_filter($ids));
}

//get data from json file
function get_json($id) {
  $text = file_get_contents("db/$id.json");
  echo $text;
}

//save data to json file
function save_json($data) {
  $vars = json_decode($data);
  //check if id is valid before trying to save to file.
  $ids = explode(PHP_EOL, file_get_contents("db/ids.txt"));
  if (array_search($vars->id, $ids) !== false) {
    file_put_contents("db/$vars->id.json", json_encode($vars->contents));
    echo $vars->id;
  } else {
    echo "Id could not be found.";
  }
}

//get files from directory
function get_files($id) {
  $data = json_decode(file_get_contents("db/$id.json"));
  $response["banner"] = path_check($data->banner_directory);
  $response["slides"] = path_check($data->slideshow_directory);
  echo json_encode($response);
}

//check if provided path is to a file, directory, or invalid.
function path_check($data) {
  if(is_dir($data)) {
    return glob(rtrim($data, '/') .'/*.*');
  } else if(is_file($data)) {
    return [$data];
  } else {
    return ['directory or file does not exist'];
  }
}
