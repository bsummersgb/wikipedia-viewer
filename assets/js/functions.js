$( document ).ready(function() {

  $('input[type="submit"]').on('click', function() {
    var keyword = $('#search-query').val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + keyword + "&format=json";
    var $ul = $('ul');

    $.ajax({
      url: url,
      dataType: 'jsonp',
      success: function(data) {
        for (var i = 0; i < data[1].length; i++) {
          $ul.append("<li>" + data[1][i] + " : " + data[2][i]+"</li>"); // cache the ul and anything else at the top. Then use mustache templating to make it pretty
        }
      },
      error: function() {
        $('.test').html("You aint got no results");
      }
    });

  });





});
