$( document ).ready(function() {

  $('input[type="submit"]').on('click', function() {
    var keyword = $('#search-query').val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + keyword + "&format=json";

    $.ajax({
      url: url,
      dataType: 'jsonp',
      success: function(data) {
        $('.test').html(data[1][2], data[1][1], data[1][2]); // iterate through with loop




      },
      error: function() {
        $('.test').html("You aint got no results");

      }
    })

  });





});
