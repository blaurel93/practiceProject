var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=trump&api-key=olfw5PJPxiPCBXdeZLuR47neRxgOj6ga&page=0";

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (res) {
    console.log(res)
  })