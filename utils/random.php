<?php

	function generateRandomString($length = 10) {
		$characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		$charactersLength = strlen($characters);
		$randomString = '';
		for ($i = 0; $i < $length; $i++) {
			$randomString .= $characters[rand(0, $charactersLength - 1)];
		}
		return $randomString;
	}


	$status = rand(1,30)%2 ? "Bonjour" : "Hi";
	$data = ['status' => $status, 'random_string' => generateRandomString(30)];
	header('Content-Type: application/json');
	echo json_encode($data);




