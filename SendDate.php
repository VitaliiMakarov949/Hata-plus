<?php 
try {
    $textMessage = "Hello From Bot";
} catch (\Throwable $th) {
    $textMessage = "ERROR IN MESSAGE";
}

$token = "8232410439:AAHrDBMkmIxiK6SNi9s-PFiKqPXtwAi3s3k";
$chat_id = 7554874104;

$textMessage = "<b>Нова заявка з сайту</b>%0A"
             . "<b>Ім’я:</b> $name%0A"
             . "<b>Телефон:</b> $phone%0A"
             . "<b>Дата:</b> $date";

$textMessage = urlencode ("$textMessage");
$urlQuery = "https://api.telegram.org/bot$token/sendMessage?chat_id=$chat_id&text=$textMessage<b>Нова заявка на сайті</b>Name:$name%OADate:$date%OAComment:$comment";
$urlQuery .= "&parse_mode=HTML";
$result = file_get_contents($urlQuery);

?>