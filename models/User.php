<?php

	include ("DB.php");

	$previous_salt = "salt_";

	$next_salt     = "_salt";

	function checkPassword($user_name,$user_password) {

			$request  = "select user_id from CHU_User";
			$request .= " where user_email = '".$user_name;
			$request .= "' and user_password = '";
			$request .= md5($previous_salt.$user_password.$next_salt);
			$request .= "';";

			$result = mysql_query($request);

			$row = mysql_fetch_array($result);

			$res = ($row["user_id"]) ? 'true' : 'false';

			return $res;
	}

?>