(function () {
    window.site = {};
    site.$ = jQuery;
    site.$window = site.$(window);
    site.$document = site.$(document);
    site.views = {};
    site.models = {};
    site.events = _.clone(Backbone.Events);
})();