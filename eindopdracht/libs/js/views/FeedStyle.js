site.views.FeedStyle = Backbone.View.extend({

    initialize: function(){
        site.events.on("backgroundChange", this.changeBackground, this);
    },

    changeBackground: function(){
        var clickedButton = $('#buttons > a.active').attr('id');
        switch(clickedButton){
            case "love_btn":
                this.$el.attr("class", "col-md-12 default");
                break;
            case "hate_btn":
                this.$el.attr("class", "col-md-12 hate");
                break;
            case "sad_btn":
                this.$el.attr("class", "col-md-12 sad");
                break;
            case "happiness_btn":
                this.$el.attr("class", "col-md-12 happiness");
                break;
        }
    }

});
