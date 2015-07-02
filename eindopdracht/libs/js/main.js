(function ()
{
    site.init = function ()
    {
        var Settings = new site.models.Settings();
        var TweetsCollections = new site.collections.Tweets();

        new site.views.HashLinks({el: "#buttons", model: Settings});
        new site.views.FeedStyle({el: "#feed-container"});
        new site.views.TweetFeed({el: "#input", model: Settings, collection: TweetsCollections});
    };

    site.$(site.init);
})();
