(function (){
    site.init = function()
    {
        new site.views.ClickA(site.$("#clicker"));
        new site.views.BoxBlock(site.$("#box"));
    };

    site.$(site.init);
})();