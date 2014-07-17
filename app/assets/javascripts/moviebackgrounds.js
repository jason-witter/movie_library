$(document).ready(function() {
	$.ajax({
        type: "GET",
        url: "/backgrounds/",
        datatype: 'json',
        success: function (data) {
          var count = data.length;
          var index = Math.floor(Math.random()*count);
          var url = "url(../../assets/" + data[index].name + ".jpg)";
      		$("#body").css("background-image", url);
        }
      });
	
});

