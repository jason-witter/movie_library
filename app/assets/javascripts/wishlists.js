$(document).ready(function () {

$('#wishlist_table').dataTable({"order": [[ 1, "desc"]], "sPaginationType":  "bootstrap", "aoColumnDefs": [{ "bSortable": false, "aTargets": [2]}]});
});