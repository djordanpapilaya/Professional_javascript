site.views.BoxBlock = function($el){
    this.$el = $el;

    this.init = function()
    {
        $(document).on("colorChange", site.$.proxy(this.changeColor, this));
    };
    /**
     * Toggle the Color, YEAH!
     */
    this.changeColor = function(){
        this.$el.toggleClass("blue");
    };
    this.init();
};