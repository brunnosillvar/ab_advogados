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
$mail->Username = 'abadvogados.blog@gmail.com';                 // SMTP username
$mail->Password = 'bqhhmeovenficoks';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->SMTPOptions = array('ssl' => array('verify_peer' => false, 'verify_peer_name' => false, 'allow_self_signed' => true)); //Específico para Hostgator

//Recipients
$mail->setFrom($emailUser,$nomeUser);
$mail->addAddress('natanaelbarros@adv.oabsp.org.br');
$mail->addAddress('c.augusto@adv.oabsp.org.br');     // Add a recipient

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
// header("location:javascript:alert(\"Email enviado com Sucesso!\");location.href=\"https://abadvogados.000webhostapp.com\";");
// O código abaixo é para o direcionamento a uma página após o envio do email
echo '<!DOCTYPE html>';
echo'<html>';
echo'<head>';
echo'<style type="text/css">';
echo'div{display: flex; justify-content: center; align-items: center}';
echo'a { color: #FFF; background: #22333B; width: 100px; height: 46px;  padding: 10px 20px; border-radius: 7px; border: none; font-size: 18px; font-weight: bold; cursor: pointer; text-decoration: none;}';
echo'a:hover{color: #22333B; background: #C6AC8F}';
echo'</style>';
echo'</head>';
echo'<body onload="alert('+"'"+'Email enviado com Sucesso!'+"'"+');">';
echo'<div>';
echo'<h3 style="text-align: center">';
echo'Seu email foi enviado com sucesso!<br>';
echo'Para voltar a página inicial click no botão "Voltar" abaixo.';
echo'</h3>';
echo'</div>';
echo'<div>';
echo'<p><a href="https://augustoebarros.adv.br/" >Voltar</a></p>';
echo'</div>';
echo'</body>';
echo'</html>';