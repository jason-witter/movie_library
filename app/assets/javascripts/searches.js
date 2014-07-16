$(document).ready(function() {
  // Search triggers
  $('#search_text').keypress(function(e) {
    if (e.which == 13) {
        search();
    }
  });
  $(document.getElementById('search_button')).click(search);

  // Rotten Tomatoes search function
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
      var search_result_body = $(document.getElementById('search_body'));
      search_result_body.html('');
      var content = '';
      if (data.total >=  10) {
        content += '<p>Found ' + data.total + ' results for ' + query + '. Displaying the top 10.</p>';
      } else if (data.total == 1) {
        content += '<p>Found ' + data.total + ' result for ' + query + '.';
      } else {
        content += '<p>Found ' + data.total + ' results for ' + query + '.';
      }
      content += generate_table_head();
      var movies = data.movies;
      $.each(movies, function(index, movie) {
        content += '<tr><td><img src="' + movie.posters.thumbnail + '" /></td>';
        content += '<td>' + movie.title + '</td>';
        content += '<td>' + movie.release_dates.dvd + '</td></tr>';
      });
      content += generate_table_foot();
      search_result_body.html(content);
    };

    function generate_table_head() {
      var str = '';
      str += '<div class="row"><div class="col-md-8">' + 
              '<table class="table table-striped">' + 
              '<thead><tr><th></th><th>Title</th><th>DVD Release Date</th>' + 
              '</tr></thead><tbody>';
      return str;
    };

    function generate_table_foot() {
      var str = '';
      str += '</tbody></table></div></div>';
      return str;
    };
  }
});