<?php

/** Just to be sure that it's only the Java Application who transfert some files, we have some security. */
$tokenSecure = "45906065a391a8f6eb39f1d108499eae38bdeb15";

/** We get the token sent by the Java application to compare it later. */
$token = $_POST["token"];

/** We check if the token was sent and if it was the correct token */
if($token != $tokenSecure) {

	header("HTTP/1.0 403 Non authorized.");
	exit(0);
}

/* -------------------------------------------------------------------- */

$uploads_dir = './upload';

foreach ($_FILES["images"]["error"] as $key => $error) {

    if ($error == UPLOAD_ERR_OK) {

        $tmp_name = $_FILES["images"]["tmp_name"][$key];
        
        $name = $_FILES["images"]["name"][$key];
        
        move_uploaded_file($tmp_name, "$uploads_dir/$name");

    } else {

    	header("Location: error.php");
        exit(0);
    }

}

?>