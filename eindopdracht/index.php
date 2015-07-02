<?php
include "libs/php/getTweets.php";
?>
<!DOCTYPE html>
<html>
<head>
    <title>Twitter Emotion Feed</title>
    <meta charset="utf-8"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="libs/css/style.css"/>
</head>
<body>
<div class="containter">
    <div id="feed-container" class="col-md-12 default">
        <div id="feed" class="col-md-10 col-md-offset-1">
            <span id="input">

            </span>
        </div>
    </div>
    <div id="button_container" class="col-md-12 col-sm-12">
        <div id="buttons" class="col-md-8 col-md-offset-2 col-sm-4 col-sm-offset-4">
            <a href="#" id="love_btn" data-hash="love" class="active col-md-2 col-sm-6 col-md-offset-1">L O V E</a>
            <a href="#" id="hate_btn" data-hash="hate" class="col-md-2 col-sm-6 col-md-offset-1">H A T E</a>
            <a href="#" id="happiness_btn" data-hash="happiness" class="col-md-2 col-sm-6 col-md-offset-1">H A P P I N E S S</a>
            <a href="#" id="sad_btn" data-hash="sad" class="col-md-2 col-sm-6 col-md-offset-1">S A D</a>
        </div>
    </div>
</div>
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.1/backbone-min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
<script type="text/javascript" src="libs/js/init.js"></script>
<script type="text/javascript" src="libs/js/models/Tweet.js"></script>
<script type="text/javascript" src="libs/js/models/Settings.js"></script>
<script type="text/javascript" src="libs/js/collections/Tweets.js"></script>
<script type="text/javascript" src="libs/js/views/HashLinks.js"></script>
<script type="text/javascript" src="libs/js/views/TweetFeed.js"></script>
<script type="text/javascript" src="libs/js/views/FeedStyle.js"></script>
<script type="text/javascript" src="libs/js/main.js"></script>
</body>
</html>