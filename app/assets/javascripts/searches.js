$(document).ready(function() {
  var call_search = search;
  $('#search_text').keypress(function(e) {
    if (e.which == 13) {
        search();
    }
  });
  $(document.getElementById('search_button')).click(search);

  function search() {
    var apikey = "gmpx67fws5dfu7h9g9qj4azx";
    var baseUrl = "http://api.rottentomatoes.com/api/public/v1.0";
   
    // construct the uri with our apikey
    var moviesSearchUrl = baseUrl + '/movies.json?apikey=' + apikey;

    var query = document.getElementById('search_text').value;
   
    // send off the query
    $.ajax({
      url: moviesSearchUrl + '&q=' + encodeURI(query) + '&page_limit=10',
      dataType: "jsonp",
      success: searchCallback
    });

      // callback for when we get back the results
    function searchCallback(data) {
      var document_body = $(document.getElementById('search_body'));
      document_body.html('');
      document_body.append('Found ' + data.total + ' results for ' + query + '. Displaying the top 10.');
      var movies = data.movies;
      $.each(movies, function(index, movie) {
       document_body.append('<h4>' + movie.title + '</h4>');
       document_body.append('<img src="' + movie.posters.thumbnail + '" />');
       document_body.append('<h4>' + movie.release_dates.dvd + '</h4>');
     });
    };
  }
});