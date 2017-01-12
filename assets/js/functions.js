$( document ).ready(function() {

  $('input[type="submit"]').on('click', function() {
    var keyword = $('#search-query').val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + keyword + "&format=json";

    $.ajax({
      url: url,
      dataType: 'jsonp',
      success: function(data) {
        for (var i = 0; i < data[1].length; i++) {
        $('ul').append("<li>" + data[1][i] + " : " + data[2][i]+"</li>");
        }
      },
      error: function() {
        $('.test').html("You aint got no results");
      }
    });

  });





});
