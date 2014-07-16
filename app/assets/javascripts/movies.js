$(document).ready(function () {
	// Boolean toggle triggers
	$(".downloaded_yes").click(downloaded_no);
	$(".downloaded_no").click(downloaded_yes);
	$(".watched_yes").click(watched_no);
	$(".watched_no").click(watched_yes);

	// Edit functions
	function downloaded_no(ev) {
		var movie_id = ev.currentTarget.title
		$.ajax({
        type: "GET",
        url: "/toggle/",
        data: $.param({ id: movie_id, movie: { downloaded: false }}),
        success: function () {
          window.location.pathname = "movies"
        }
      });
	}

	function downloaded_yes(ev) {
		var movie_id = ev.currentTarget.title
		$.ajax({
        type: "GET",
        url: "/toggle/",
        data: $.param({ id: movie_id, movie: { downloaded: true }}),
        success: function () {
          window.location.pathname = "movies"
        }
      });
	}

	function watched_no(ev) {
		var movie_id = ev.currentTarget.title
		$.ajax({
        type: "GET",
        url: "/toggle/",
        data: $.param({ id: movie_id, movie: { watched: false }}),
        success: function () {
          window.location.pathname = "movies"
        }
      });
	}

	function watched_yes(ev) {
		var movie_id = ev.currentTarget.title
		$.ajax({
        type: "GET",
        url: "/toggle/",
        data: $.param({ id: movie_id, movie: { watched: true }}),
        success: function () {
          window.location.pathname = "movies"
        }
      });
	}
});