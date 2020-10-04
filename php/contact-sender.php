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

    $header_sender = "From: contact@ayts.ca";
    $email_subject_sender = "Thank You For Getting In Contact $name";
    $email_body_sender = "Thank you for getting in contact with Ayts. You wrote the following message:\n $message\n\n".
                        "We will get back to you shortly.";

    mail($email, $email_subject_sender, $email_body_sender, $header_sender);

	header("Location: ../success.html");
?>