$(document).ready(function() {
  // Search triggers
  $('#search_text').keypress(function(e) {
    if (e.which == 13) {
        search();
    }
  });
  $('#search_button').click(search);
  $(document.getElementById("search_warning")).show();
  

  // Rotten Tomatoes search function
  function search() {
    var that = this;
    var apikey = "gmpx67fws5dfu7h9g9qj4azx";
    var baseUrl = "http://api.rottentomatoes.com/api/public/v1.0";
   
    // construct the uri with our apikey
    var moviesSearchUrl = baseUrl + '/movies.json?apikey=' + apikey;

    var query = document.getElementById('search_text').value;
   
    // send off the query
    $.ajax({
      url: moviesSearchUrl + '&q=' + encodeURI(query),
      dataType: "jsonp",
      success: searchCallback
    });

    // callback for when we get back the results
    function searchCallback(data) {
      var search_result_body = $(document.getElementById('search_body'));
      search_result_body.html('');
      var content = '';
      content += generate_table_head();
      var movies = data.movies;
      $.each(movies, function(index, movie) {
        content += '<tr><td><img src="' + movie.posters.thumbnail + '" /></td>';
        content += '<td>' + movie.title + '</td>';
        content += '<td>' + movie.release_dates.dvd + '</td>';
        content += '<td><button id="wishlist_add" class="btn btn-info" name="' +
                     movie.release_dates.dvd + '" title="' + movie.title +
                     '">Add to Wishlist</button></td></tr>'
      });
      content += generate_table_foot();
      search_result_body.html(content);
      $(document.getElementById("search_warning")).hide();
      $('#search_table').dataTable({"sPaginationType":  "bootstrap", "aoColumnDefs": [{ "bSortable": false, "aTargets": [0, 1, 2, 3]}]});
    };

    function generate_table_head() {
      var str = '';
      str +=  '<div class="well"><table id="search_table" class="table table-striped">' + 
              '<thead><tr><th></th><th>Title</th><th>DVD Release Date</th>' + 
              '<th></th></tr></thead><tbody>';
      return str;
    };

    function generate_table_foot() {
      var str = '';
      str += '</tbody></table></div>';
      return str;
    };

    // Add to wishlist trigger
    $(document).on("click", "#wishlist_add", add_to_wishlist);

    function add_to_wishlist(ev) {
      $.ajax({
        type: "POST",
        url: "/wishlists/new/",
        data: { movie: { title: ev.currentTarget.title, releaseDate: ev.currentTarget.name }},
        success: function () {
          window.location.pathname = "wishlists"
        }
      });
    }
  }
});
