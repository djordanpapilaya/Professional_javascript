<?php
require_once('TwitterAPIExchange.php');
/** Set access tokens here - see: https://dev.twitter.com/apps/ **/
$settings = array(
    'oauth_access_token' => "2816967061-djUGD7doRrOB8u5IufSMgq1SfKWLmOcOKQB3TxY",
    'oauth_access_token_secret' => "s2tMNq5mw6s6VRhSZZfXuTs3BfZoTiVBJ1DihlhMhALVw",
    'consumer_key' => "Apl0BnBO51ZlPWAUarYd8e9Qm",
    'consumer_secret' => "HRIswKEkRazRb8G9cgW7jroWPMZq50LHkix2YLKnWXlVWOFAl7"
);


$getfieldLove = '?q=%23love&lang=en';
$getfieldHate = '?q=%23hate&lang=en';
$getfieldHappiness = '?q=%23happiness&lang=en';
$getfieldSad = '?q=%23sad&lang=en';


$url = "https://api.twitter.com/1.1/search/tweets.json";
$requestMethod = "GET";
$twitter = new TwitterAPIExchange($settings);
$jsonDataLove = $twitter->setGetfield($getfieldLove)
    ->buildOauth($url, $requestMethod)
    ->performRequest();

$jsonDataHate = $twitter->setGetfield($getfieldHate)
    ->buildOauth($url, $requestMethod)
    ->performRequest();

$jsonDataSad = $twitter->setGetfield($getfieldSad)
    ->buildOauth($url, $requestMethod)
    ->performRequest();

$jsonDataHappiness = $twitter->setGetfield($getfieldHappiness)
    ->buildOauth($url, $requestMethod)
    ->performRequest();

$dataLove = json_decode($jsonDataLove, true);
$dataSad = json_decode($jsonDataSad, true);
$dataHappiness = json_decode($jsonDataHappiness, true);
$dataHate = json_decode($jsonDataHate, true);

$tweetsArray = [];
for($i=0; $i<count($dataLove['statuses']); $i++){
    $tweetsLove = $dataLove['statuses'][$i]['text'];
    $tweetsHate = $dataHate['statuses'][$i]['text'];
    $tweetsSad = $dataSad['statuses'][$i]['text'];
    $tweetsHappiness = $dataHappiness['statuses'][$i]['text'];

    $tweetsArray["dataLove"][] = $tweetsLove;
    $tweetsArray["dataHate"][] = $tweetsHate;
    $tweetsArray["dataSad"][] = $tweetsSad;
    $tweetsArray["dataHappiness"][] = $tweetsHappiness;
}

$tweetsJson = json_encode($tweetsArray, JSON_FORCE_OBJECT);
file_put_contents('libs/json/data.json', $tweetsJson);
