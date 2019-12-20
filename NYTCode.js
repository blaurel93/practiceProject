


function clear() {
  $(".article-section").empty();
}

function buildQueryUrl() {

  var search = $.trim($("#search-term").val());
  var startYear = '&begin_date=' + $("#start-year").val() + '0101';

  var endYear = '&end_date=' + $("#end-year").val() + '1231';

  var myUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"
  var queryURL = myUrl + "q=" + search + "&api-key=olfw5PJPxiPCBXdeZLuR47neRxgOj6ga" + startYear + endYear;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(updatePage);

}

function updatePage(NYTData) {
  var numArticles = $("#article-count").val();

  for (var = i; i < nydata.response.docs.length; i++) {
    var article = NYTData.response.docs[i];

    var articleCount = i + 1;

    var $articleList = $("<ul>");
    $articleList.addClass("list-group");

    $("article-section").append($articleList);

    var headline = article.headline;
    var $articleListItem = $("<li class='list-group-item articleHeadline'>");

    if (headline &&)
  }

}






$("#run-search").on("click", function () {
  event.preventDefault();
  clear();
  buildQueryUrl();

})