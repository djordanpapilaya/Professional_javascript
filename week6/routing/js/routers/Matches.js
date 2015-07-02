
site.routers.Matches = Backbone.Router.extend({
    routes: {
       'matches/:league/:club': 'getLeagueClub'
   },
    getLeagueClub : function(league, club){
        console.log(league, club);
    }
});