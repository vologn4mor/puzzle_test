<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// переменные из нашей формы
$phone = $_POST['user_phone'];

// настройка почтового ящика
$mail->isSMTP();                                // Настраиваем почту для SMTP
$mail->Host = 'smtp.gmail.com';  															// Основкой SMTP сервер
$mail->SMTPAuth = true;                         // Включить аутентификацию SMTP
$mail->Username = 'info.puzzle.groupp@gmail.com';    // логин от почты с которой будут отправляться письма
$mail->Password = 'heymAkArenA261';            // пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                      // Включить шифрование ssl
$mail->Port = 465;                                 // TCP порт для подключения / этот порт может отличаться у других провайдеров

$mail->setFrom('info.puzzle.groupp@gmail.com');      // от кого будет уходить письмо для пользователя
$mail->addAddress('info.puzzle.groupp@gmail.com');   // Кому будет приходить заявка
//$mail->addAddress('ellen@example.com');               // Имя не обязательно
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
$mail->isHTML(true);                                  // Установить формат электронной почты в HTML

$mail->Subject = 'Заявка';
$mail->Body    = '' .$phone;
$mail->AltBody = '';

$token = "1583515129:AAEIyKa6_VtWrKWgAot55f--mb-j9buuurI";
// $chat_id = "https://api.telegram.org/bot1583515129:AAEIyKa6_VtWrKWgAot55f--mb-j9buuurI/getUpdates";
$chat_id = "-516268920";
$arr = array(
  'Телефон: ' => $phone
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: /');
}
?>
