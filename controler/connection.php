<?php session_start();	

include("../models/User.php");

$url = 'http://' . $_SERVER['HTTP_HOST'];            	 // Get the server
$url .= rtrim(dirname($_SERVER['PHP_SELF']), '/\\'); 	 // Get the current directory
$url .= '/../index.php';            					 // Your relative path

$name     = $_POST["name"];
$password = $_POST["password"];
$remember = $_POST["remember"];


$_SESSION['name'] = $name;

if(checkPassword($name,$password) == 'true') {

	$_SESSION["connect"] = "true";

} else {
	unset($_SESSION['connect']);
	unset($_SESSION['name']);
	$_SESSION["error"] = "Nom d'utilisateur ou mot de passe incorrect...";
}

if($remember != NULL) {

	$_SESSION['name'] = $name;
}

echo '<script type="text/javascript"> window.location = "'.$url.'" </script>';

?>