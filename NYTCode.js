var search = $("#search-term").val();
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=olfw5PJPxiPCBXdeZLuR47neRxgOj6ga&page=0";

// $.ajax({
//   url: queryURL,
//   method: "GET"
// }).then(function (res) {
//   console.log(res.response.docs[0]);
//   console.log(res.response.docs[1]);
//   console.log(res.response.docs[2]);
//   console.log(res.response.docs[3]);
//   console.log(res.response.docs[4]);
//   console.log(res.response.docs[5]);
//   console.log(res.response.docs[6]);
//   console.log(res.response.docs[7]);
//   console.log(res.response.docs[8]);
//   console.log(res.response.docs[9]);
// });

$("run-search").on("click", function() {
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (res) {
    console.log(res);
  });
})