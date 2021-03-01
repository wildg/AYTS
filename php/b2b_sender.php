<?php
	$name = $_POST['name'];
	$company = $_POST['organization'];
	$email = $_POST['email'];
	$country = $_POST['country'];
	$message = $_POST['query'];

	$email_to = "b2b@ayts.ca";
	$email_to_backup = "ayts.ca@gmail.com";
	$email_subject = "B2B Form Submission From $name";
	$email_body = "Received a new B2B FORM submission from EMAIL:\n" . $email . "\n\n".
					"Their NAME is:\n" . $name "\n\n".
					"Their COMPANY is:\n" . $company . "\n\n".
					"Their COUNTRY is: \n" . $country . "\n\n"
					"Their MESSAGE is:\n" . $message . "\n";

    mail($email_to, $email_subject, $email_body);
    mail($email_to_backup, $email_subject, $email_body);

    $header_sender = "From: b2b@ayts.ca";
    $email_subject_sender = "Thank You For Getting In Contact" . $name;
	$email_body_sender = "Thank you for getting in contact with Ayts.\n" .
	                    "You wrote the following message:\n\n" . $message . "\n\n".
	                    "We will get back to you shortly.";

	mail($email, $email_subject_sender, $email_body_sender, $header_sender);
	header("Location: ../b2b.html");
?>