<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];

	$email_to = "contact@ayts.ca";
	$email_to_backup = "ayts.ca@gmail.com";
	$email_subject = "CONTACT Form Submission From $name";
	$email_body = "Received a new CONTACT FORM submission from EMAIL:\n $email\n\n".
					"Their NAME is:\n $name\n\n".
					"Their MESSAGE is:\n $message\n";

	mail($email_to, $email_subject, $email_body);
	mail($email_to_backup, $email_subject, $email_body);

	header("Location: ../success.html");
?>