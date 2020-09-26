<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];

	$email_to = "ayts.ca@gmail.com";
	$email_subject = "INVEST Form Submission From $name";
	$email_body = "Received a new INVEST FORM submission from email:\n $email\n\n".
					"Their NAME is:\n $name\n\n".
					"Their MESSAGE is:\n $message\n";

	mail($email_to, $email_subject, $email_body);

	header("Location: ../success.html");
?>