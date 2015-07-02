/**
 *
 * @param $el
 * @constructor
 */

site.views.ClickA = Backbone.View.extend({
    events :{
        'click' : "clickHandler"
    },

    clickHandler : function(e){
        e.preventDefault();
        site.events.trigger("colorChange");
    }
});


/*
assignment with settingsmodels
 */
//site.views.ClickA = Backbone.View.extend({
//    events :{
//        'click' : "clickHandler"
//    },
//
//    clickHandler : function(e){
//        e.preventDefault();
//        this.model.set('toggleBlue', !this.model.get('toggleBlue'));
//        //site.events.trigger("colorChange");
//    }
//});