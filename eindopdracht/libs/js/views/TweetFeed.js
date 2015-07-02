site.views.TweetFeed = Backbone.View.extend({
    initialize : function () {
        this.loadTweets();
        site.events.on('tweet', this.loadTweets, this);
    },

    /**
     *
     * @param data
     */
    loadTweets: function(data){
        this.collection.fetch({
            success : _.bind(this.loadTweetsSuccessHandler, this),
            error : _.bind(this.loadTweetsErrorHandler, this),
            data : {}
        })
    },

    /**
     *
     * @param collection
     * @param response
     * @param options
     */
    loadTweetsSuccessHandler : function (collection, response, options) {


        var hashkey = this.model['hashKey'];

        changeHtml();
        var objectCount = $.map(response[hashkey], function(n, i) { return i; }).length;
        var counter = 0;

        function changeHtml() {
            if(counter < objectCount) {
                counter++;
            } else {
                counter = 0;
            }
            $('#input').html(response[hashkey][counter]);
            setTimeout(function () {
                changeHtml();
            }, 4000);
        }
    },

    /**
     *
     * @param collection
     * @param response
     * @param options
     */
    loadTweetsErrorHandler : function  (collection, response, options){
        console.log("ERROR", response);
    }
});