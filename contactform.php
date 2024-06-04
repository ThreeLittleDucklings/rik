<?php

if (isset($_POST['submit'])) {
$name =$_POST['name'];
$subject =$_POST['subject'];
$mailFrom =$_POST['mail'];
$message =$_POST['message'];

$mailTo = "Cas";
$headers = "From: ".$mailFrom;
$txt = "Je hebt een mail gekregen van".$name.".\n\n".$message;




mail($mailTo, $subject, $txt, $headers);
header("Location: index.php?mailsend");


}