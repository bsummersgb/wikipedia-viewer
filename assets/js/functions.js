$( document ).ready(function() {

  $('input[type="submit"]').on('click', function() {
    var keyword = $('#search-query').val(); // grabs the user input in the fields and interpolates this in the url call to the wikipedia api
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + keyword + "&format=json";
    var $ul = $('ul'); // cache the DOM element so it is only searched for once

    var results = []; // will hold collection of returned data in separate objects

    var listTemplate = $('#list-template').html(); // grabs the html from the <template> tag in order to apply templating styles

    $.ajax({
      url: url,
      dataType: 'jsonp',
      success: function(data) {
        /* convert the returned arrays to objects to be stored within the results array - this allows me to pass
           each object to the Mustache.render method which only accepts an object as an argument
        */
        for (var i = 0; i < data[1].length; i++) {
          results[i] = {title: data[1][i], snippet: data[2][i], url: data[3][i]};
        }
        // Iterate over each object 'item', append it to the output <ul>, and render it using the Mustache templating engine
        $.each(results, function(i, item) {
          $ul.append(Mustache.render(listTemplate, item));
        });
      },
      error: function() {
        $ul.html("There was an error retrieving your results"); // posts an error message if open search fails
      }
    });

  });

}); // close document.ready()
