<?php
if ( !empty($_POST['subject']) ) {
  $return_message = "";

  $name           = trim(htmlspecialchars($_POST['name']));
  $phone          = trim(htmlspecialchars($_POST['phone']));
  $email          = trim(htmlspecialchars($_POST['email']));
  $subject        = trim(htmlspecialchars($_POST['subject']));
  $subject_letter = 'Заявка с сайта proffitness';

  $to = "leadlist@dimbrowsky.com";

  $message = "
  <html> 
      <head> 
          <title>$subject_letter</title> 
      </head> 
      <body>
        <table>
          <tr><td><b>Тема:</b></td><td>$subject</td></tr>
          <tr><td><b>Имя:</b></td><td>$name</td></tr>
          <tr><td><b>Телефон:</b></td><td>$phone</td></tr>
          <tr><td><b>Почта:</b></td><td>$email</td></tr>
        </table>
      </body> 
  </html>"; 

  $headers  = "From: noreply@proffitness.com.ua\r\n";
  $headers .= "Content-type: text/html; charset=utf-8 \r\n";

  if (mail($to, $subject_letter, $message, $headers)) {
    $return_message = "send_success";
  }
  else {
    $return_message = "send_error";
  }
  echo $return_message;
  exit();
}

?>