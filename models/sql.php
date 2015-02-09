<?php

	include ("DB.php");

	$table = "chu_user";
	$user_id = "user_id";

	function FindbyID($id) {
		$request = "SELECT * from chu_user WHERE user_id = '".$id."'";
		$result = mysql_query($request);
		$infos = mysql_fetch_array($result);
		return $infos;
	}

	function Insert() {

	}

	function InsertReturnID() {

	}

	function Update() {

	}

	function Delete() {
		
	}


?>