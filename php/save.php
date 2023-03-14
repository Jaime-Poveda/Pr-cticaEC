<?php

header('Content-Type: text/json; charset=utf-8');

$data = $_POST['jsonString'];
//set mode of file to writable.
chmod("../website-contents.json", 0777);
$f = fopen("../website-contents.json", "w+") or die("fopen failed");
fwrite($f, $data);
fclose($f);

?>