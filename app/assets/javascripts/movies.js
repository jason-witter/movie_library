$(document).ready(function () {
  var table = $('#movie_table').dataTable({stateSave: true, "sPaginationType":  "bootstrap", "aoColumnDefs": [{ "bSortable": false, "aTargets": [1, 2, 4]}]});
	// Boolean toggle triggers
	$(document).on("click", ".downloaded_yes", downloaded_no);
	$(document).on("click", ".downloaded_no", downloaded_yes);
	$(document).on("click", ".watched_yes", watched_no);
	$(document).on("click", ".watched_no", watched_yes);

	// Edit functions
	function downloaded_no(ev) {
		var movie_id = ev.currentTarget.name
		$.ajax({
        type: "GET",
        url: "/toggle/",
        data: $.param({ id: movie_id, movie: { downloaded: false }}),
        success: function (data) {
          table.fnDestroy();
          $('#movie_table').html(data);
          $('#movie_table').dataTable({stateSave: true, "sPaginationType":  "bootstrap", "aoColumnDefs": [{ "bSortable": false, "aTargets": [1, 2, 4]}]});
        }
      });
	}

	function downloaded_yes(ev) {
		var movie_id = ev.currentTarget.name
		$.ajax({
        type: "GET",
        url: "/toggle/",
        data: $.param({ id: movie_id, movie: { downloaded: true }}),
        success: function (data) {
          table.fnDestroy();
          $('#movie_table').html(data);
          $('#movie_table').dataTable({stateSave: true, "sPaginationType":  "bootstrap", "aoColumnDefs": [{ "bSortable": false, "aTargets": [1, 2, 4]}]});
        }
      });
	}

	function watched_no(ev) {
		var movie_id = ev.currentTarget.name
		$.ajax({
        type: "GET",
        url: "/toggle/",
        data: $.param({ id: movie_id, movie: { watched: false }}),
        success: function (data) {
          table.fnDestroy();
          $('#movie_table').html(data);
          $('#movie_table').dataTable({stateSave: true, "sPaginationType":  "bootstrap", "aoColumnDefs": [{ "bSortable": false, "aTargets": [1, 2, 4]}]});
        }
      });
	}

	function watched_yes(ev) {
		var movie_id = ev.currentTarget.name
		$.ajax({
        type: "GET",
        url: "/toggle/",
        data: $.param({ id: movie_id, movie: { watched: true }}),
        success: function (data) {
          table.fnDestroy();
          $('#movie_table').html(data);
          $('#movie_table').dataTable({stateSave: true, "sPaginationType":  "bootstrap", "aoColumnDefs": [{ "bSortable": false, "aTargets": [1, 2, 4]}]});
        }
      });
	}
});