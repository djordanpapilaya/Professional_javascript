site.views.TeamLinks = Backbone.View.extend({
    events : {
        'click' : 'clickhandler'
    },
    clickhandler : function(e){
        e.preventDefault();
    }
});
