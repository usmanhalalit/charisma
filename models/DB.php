<?php

	$dbhost = "localhost";
	$dbname = "CHUTours";
	$dbuser = "root";
	$dbpass = "root";

	mysql_connect("$dbhost", "$dbuser", "$dbpass") or die (mysql_error());

	mysql_select_db("$dbname") or die(mysql_error());

?>