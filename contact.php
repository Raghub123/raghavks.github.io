<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $to = "mailmeraghav123@gmail.com";  // Replace with your email
    $subject = "Message from Portfolio Contact Form";
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";
    $headers = "From: $email";
    
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Error sending message!";
    }
}
?>
