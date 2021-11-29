<?php
//get data from form  
$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['comment'];
$to = "azzeddine.lahlil@gmail.com";
$subject = "Mail From website";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message;
$headers = "From: noreply@theoctopus.ma" . "\r\n" ;
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>