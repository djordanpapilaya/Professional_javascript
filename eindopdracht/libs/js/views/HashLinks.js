site.views.HashLinks = Backbone.View.extend({
    initialize : function () {
        this.model["hashKey"] = "dataLove";
    },
    events : {
        'click #love_btn' : 'loveClickHandler',
        'click #hate_btn' : 'hateClickHandler',
        'click #sad_btn' : 'sadClickHandler',
        'click #happiness_btn' : 'happinessClickHandler'
    },

    loveClickHandler : function(e){
        e.preventDefault();
        site.events.trigger("tweet");
        delete this.model["hashKey"];
        this.model["hashKey"] = "dataLove";
        var clickedButton = "love";
        this.toggleActive(clickedButton);
    },
    hateClickHandler : function(e){
        e.preventDefault();
        site.events.trigger("tweet");
        delete this.model["hashKey"];
        this.model["hashKey"] = "dataHate";
        var clickedButton = "hate";
        this.toggleActive(clickedButton);
    },
    sadClickHandler : function(e){
        e.preventDefault();
        site.events.trigger("tweet");
        this.model["hashKey"] = "dataSad";
        var clickedButton = "sad";
        this.toggleActive(clickedButton);
    },
    happinessClickHandler : function(e){
        e.preventDefault();
        site.events.trigger("tweet");
        delete this.model["hashKey"];
        this.model["hashKey"] = "dataHappiness";
        var clickedButton = "happiness";
        this.toggleActive(clickedButton);
    },
    toggleActive : function (clickedButton){
        this.$el.children().removeClass("active");
        switch(clickedButton){
            case "love":
                this.$el.find('#love_btn').addClass("active");
                break;
            case "hate":
                this.$el.find('#hate_btn').addClass("active");
                break;
            case "sad":
                this.$el.find('#sad_btn').addClass("active");
                break;
            case "happiness":
                this.$el.find('#happiness_btn').addClass("active");
                break;
        }
        site.events.trigger("backgroundChange");
    }
});