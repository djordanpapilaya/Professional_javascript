/**
 * Created by MacBookDjordan on 08/06/15.
 */
var data  =[
    {
        title : "Article 1",
        order : 3,
        status : 1
    },
    {
        title : "Article 2",
        order : 1,
        status : 0
    },
    {
        title : "article 3",
        order : 2,
        status : 1,
        awesome : true
    }
];

var published = _.where(data, {status: 1});

function articlesHtmlLoaded(html){
    var articlesHtml = _.template(html, articles);
    var article = articlesHtml({articles : published});
    $('#articles').append(article);
}

$.get('../templates/articles.html', articlesHtmlLoaded);