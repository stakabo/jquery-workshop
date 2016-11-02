<?php

	$post_data = is_array($_POST['data']) ? json_decode(json_encode($_POST['data']), FALSE) : json_decode($_POST['data']);

	$status = $post_data->username == 'decode' && $post_data->password == 'MTL'  ? "ok" : "fail";
	$data = [ 'status' => $status, 'post' => $post_data];
	header('Content-Type: application/json');
	echo json_encode($data);