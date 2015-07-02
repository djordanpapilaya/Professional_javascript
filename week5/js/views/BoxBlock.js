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
        this.model.fetch({
            success: _.bind(this.loadMatchesSuccessHandler, this),
            error : _.bind(this.loadMatchesErrorHandler, this),
            data: {

            }
        });
    },
    /**
     *
     * @param model
     * @param response
     * @param options
     */
    loadMatchesSuccessHandler : function(model, response, options){
        console.log("SUCCES", response);
    },
    /**
     *
     * @param model
     * @param response
     * @param options
     */
    loadMatchesErrorHandler : function(model, response, options){
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