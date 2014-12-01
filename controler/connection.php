<?php session_start();

var_dump($_POST["name"]);

echo "<br /> <br />";

var_dump($_POST["password"]);

echo "<br /> <br />";

var_dump($_POST["remember"]);	

$url = 'http://' . $_SERVER['HTTP_HOST'];            	 // Get the server
$url .= rtrim(dirname($_SERVER['PHP_SELF']), '/\\'); 	 // Get the current directory
$url .= '/../index.php';            					 // Your relative path

var_dump($url);

$_SESSION['name'] = $_POST["name"];

echo '<script type="text/javascript"> window.location = "'.$url.'" </script>';

?>