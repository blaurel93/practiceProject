


function clear() {
  $(".article-section").empty();
}

function buildQueryUrl() {

  var search = $.trim($("#search-term").val());
  var startYear = $("#start-year").val();

  var endYear = $("#end-year").val();
  var myUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"
  var queryURL = myUrl + "q=" + search + "&api-key=olfw5PJPxiPCBXdeZLuR47neRxgOj6ga&" + "begin_date=" + startYear + "0101&end_date=" + endYear + "1212";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (res) {
    console.log(res.response.docs[0]);
    console.log(queryURL);
  });
  console.log(queryURL);
}


$("#run-search").on("click", function () {
  event.preventDefault();
  clear();
  buildQueryUrl();

})