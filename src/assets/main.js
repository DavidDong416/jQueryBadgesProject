$(function() {
  $.ajax({
      url: 'https://www.codeschool.com/users/CCGG.json',
      dataType: 'jsonp',
      success: function(response) {
        // handle response
        console.log(response);

      }
    });
  // your code will go here

});
