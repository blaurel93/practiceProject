


function clear() {
  $(".article-section").empty();
}

function buildQueryUrl() {

  var search = $.trim($("#search-term").val());
  var startYear = $("#start-year").val();
  if (parseInt(startYear)) {
    startYear = startYear + '0101';
  }
  var endYear = $("#end-year").val();
  if (parseInt(endYear)) {
    endYear = endYear + '1231';
  }
  var myUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"
  var queryURL = myUrl + "q=" + search + "&api-key=olfw5PJPxiPCBXdeZLuR47neRxgOj6ga" + "&begin_date=" + startYear + "&end_date=" + endYear;

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