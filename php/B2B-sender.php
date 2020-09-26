<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$company = $_POST['company'];
	$message = $_POST['message'];

	$email_to = "b2b@ayts.ca";
	$email_to_backup = "ayts.ca@gmail.com";
	$email_subject = "B2B Form Submission From $name";
	$email_body = "Received a new B2B FORM submission from EMAIL:\n $email\n\n".
					"Their NAME is:\n $name\n\n".
					"Their COMPANY is: \n $company\n\n";
					"Their MESSAGE is:\n $message\n";

	mail($email_to, $email_subject, $email_body);
	mail($email_to_backup, $email_subject, $email_body);

	header("Location: ../success.html");
?>