site.collections.Tweets = Backbone.Collection.extend({
   model: site.models.Tweet,
    url: 'libs/json/data.json'
});