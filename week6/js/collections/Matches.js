/**
 * Created by MacBookDjordan on 22/06/15.
 */
site.collections.Matches = Backbone.Collection.extend({
    model: site.models.match,
    url: 'http://docent.cmi.hr.nl/moora/imp03/api-2014/wedstrijden',
    parse: function(data){
        console.log(data);
        return data;
    }
});