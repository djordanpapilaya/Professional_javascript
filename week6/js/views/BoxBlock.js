site.views.BoxBlock = Backbone.View.extend({
    initialize: function () {
        site.events.on("colorChange", this.changeColor, this);
    },
    /**
     * Toggle the Color, YEAH!
     */
    changeColor: function () {
        this.$el.toggleClass("blue");
        this.loadMatches();
    },
    loadMatches : function(){
        this.collection.fetch();
    },
    /**
     *
     * @param collection
     * @param response
     * @param options
     */
    loadMatchesSuccessHandler : function(collection, response, options){
        var homeMatches = collection.filter(function(match){
            return match.get('homeMatch') == true;
        });
        console.dir(homeMatches);
    },
    /**
     *
     * @param collection
     * @param response
     * @param options
     */
    loadMatchesErrorHandler : function(collection, response, options){
        console.log("ERROR", response);
    }
});


/*
assingment with settings model
 */
//site.views.BoxBlock = Backbone.View.extend({
//    initialize: function () {
//        //site.events.on("colorChange", this.changeColor, this);
//        this.model.on("change:toggleBlue", this.changeColor, this);
//    },
//    /**
//     * Toggle the Color, YEAH!
//     */
//    changeColor: function (model, toggleBlue) {
//        if(toggleBlue){
//            this.$el.addClass("blue");
//        }else{
//            this.$el.removeClass("blue");
//        }
//        //this.$el.toggleClass("blue");
//    }
//});