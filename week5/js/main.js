(function (){
    site.init = function()
    {
        //var settings = new site.models.Settings();
        var matches = new site.models.Matches();
        new site.views.ClickA({el: "#clicker"});
        new site.views.BoxBlock({el: "#box", model : matches});
    };

    site.$(site.init);
})();