<?php

/** Just to be sure that it's only the Java Application who transfert some files, we have some security. */
$tokenSecure = "45906065a391a8f6eb39f1d108499eae38bdeb15";

/** We get the token sent by the Java application to compare it later. */
$token = $_POST["token"];

/** We get the service name to upload in the good directory */
$serviceName = $_POST["serviceName"];

/** We check if the token was sent and if it was the correct token */
if($token != $tokenSecure) {

	header("HTTP/1.0 403 Non authorized.");
	exit(0);
}

/* -------------------------------------------------------------------- */

/** We know where the zip will be uploaded on the server */
$uploads_dir = './upload/'.$serviceName;

foreach ($_FILES["images"]["error"] as $key => $error) {

    /** If reading the file returns 0 error, the upload was okay, so we put it inside a directory */
    if ($error == UPLOAD_ERR_OK) {

        /** We get the tmp_name to know what we have to move. */
        $tmp_name = $_FILES["images"]["tmp_name"][$key];
            
        /** We get the final name (the name that will be on the server) */
        $name = $_FILES["images"]["name"][$key];
            
        /** And we finally move the uploaded file on the server */
        move_uploaded_file($tmp_name, "$uploads_dir/$name");

    } else {

        /** If something wrong appends here... we return an error */
    	header("Location: error.php");
        exit(0);
    }

}

?>