<?php

if(isset($_POST['submit'])){
  $date = $_POST['date'];
  $counter1 = $_POST['counter1'];
  $counter2 = $_POST['counter2'];
  $counter3 = $_POST['counter3'];
  $counter4 = $_POST['counter4'];
  $name = $_POST['name'];
  $surname = $_POST['surname'];
  $address = $_POST['address'];
  $message = $_POST['message'];

  $to = "vladZalupa@gmail.com";
  $subject = "Form Submission";
  $body = "Date: $date\nCounter 1: $counter1\nCounter 2: $counter2\nCounter 3: $counter3\nCounter 4: $counter4\nName: $name\nSurname: $surname\nAddress: $address\nMessage: $message";
  $headers = "From: sender@example.com";

  if (mail($to, $subject, $body, $headers)) {
    echo "Form submitted successfully!";
  } else {
    echo "Form submission failed, try again.";
  }
}

?>
