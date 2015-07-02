/**
 *
 * @param $el
 * @constructor
 */

site.views.ClickA = function($el){
    this.$el = $el;
    this.event  = new CustomEvent("colorChange");

    this.init = function()
    {
        this.$el.on('click', site.$.proxy(this.clickHandler, this));
    };

    this.clickHandler = function(e){
        e.preventDefault();
        site.$document.trigger("colorChange");
    };


    this.init();
};