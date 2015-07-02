(function()
{
    window.site = {};

    //jQuery
    site.$ = jQuery;
    site.$document = $(document);
    site.$window = $(document);

    //Backbone
    site.views = {};
    site.collections = {};
    site.models = {};
    site.events = _.clone(Backbone.Events);
})();