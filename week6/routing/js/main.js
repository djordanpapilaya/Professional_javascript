(function(){
    site.init = function(){
        //var matches = new site.collections.Matches;
        var router = new site.routers.Matches();

        Backbone.history.start({pushState: false});
        //new site.views.TeamLinks({el: '#team-links'});
        //new site.views.TeamMatches({el : '#team-matches'})
    };
    site.$document.on('ready', site.init);
})();