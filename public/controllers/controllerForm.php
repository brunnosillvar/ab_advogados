<?php

use  PHPMailer \ PHPMailer \ PHPMailer ;

include($_SERVER['DOCUMENT_ROOT']."/class/PHPMailer-master/src/PHPMailer.php");
include($_SERVER['DOCUMENT_ROOT']."/class/PHPMailer-master/src/SMTP.php");
include($_SERVER['DOCUMENT_ROOT']."/class/PHPMailer-master/src/Exception.php");

$nomeUser=filter_input(INPUT_POST,"nome",FILTER_SANITIZE_SPECIAL_CHARS);
$telefoneUser=filter_input(INPUT_POST,"telefone",FILTER_SANITIZE_SPECIAL_CHARS);
$emailUser=filter_input(INPUT_POST,"email",FILTER_SANITIZE_SPECIAL_CHARS);
$mensagemUser=filter_input(INPUT_POST,"mensagem",FILTER_SANITIZE_SPECIAL_CHARS);

$mail=new PHPMailer;
$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->Port= 587;
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'brunosilva.num@gmail.com';                 // SMTP username
$mail->Password = 'srirvouqhafnfrop';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->SMTPOptions = array('ssl' => array('verify_peer' => false, 'verify_peer_name' => false, 'allow_self_signed' => true)); //Específico para Hostgator

//Recipients
$mail->setFrom($emailUser,$nomeUser);
$mail->addAddress('bruno_silva2101@hotmail.com');     // Add a recipient

//Content
$Body= "
Nome: {$nomeUser} <br>
Email: {$emailUser} <br>  
Telefone: {$telefoneUser} <br>  
Mensagem: {$mensagemUser}" ;
$mail->isHTML(true);                                  // Set email format to HTML
$mail->Subject = 'Contato do Site';
$mail->Body = $Body;

$mail->send();
echo 'Mensagem enviada com sucesso!';