<?php 
try {
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $subject=$_POST['subject'];
    $message=$_POST['message'];

} catch (\Throwable $th) {
    $name = 'ERROR';
    $phone = 'ERROR';
    $subject = 'ERROR';
    $message = 'ERROR';
}

$token = "8232410439:AAHrDBMkmIxiK6SNi9s-PFiKqPXtwAi3s3k";
$chat_id = 7554874104;


$name = urlencode ("$name");
$phone = urlencode ("$phone");
$subject = urlencode ("$subject");
$message = urlencode ("$message");

$textMessage = "Нова заявка з сайту:%0A"
             . "Ім’я: $name%0A"
             . "Телефон: $phone%0A"
             . "Тема повідомлення $subject%0A"
             . "Текс повідомлення $message%0A";

$urlQuery = "https://api.telegram.org/bot$token/sendMessage?chat_id=$chat_id&text=$textMessage";
$result = file_get_contents($urlQuery);

?>