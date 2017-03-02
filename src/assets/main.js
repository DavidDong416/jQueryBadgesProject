$(function() {
  $.ajax({
      url: 'https://www.codeschool.com/users/CCGG.json',
      dataType: 'jsonp',
      success: function(response) {
        // handle response
        // console.log(response.courses.completed);
        addCourses(response.courses.completed);

      },
      error: function() {
        errorMessage();
      }


    });

    function addCourses(courses){
      var $badges = $('#badges');

      courses.forEach(function(course){
        var $course = $('<div />', {
          'class': 'course'
        }).appendTo($badges);

        $('<h3 />', {
          text: course.title
        }).appendTo($course);

        $('<img />', {
          src: course.badge
        }).appendTo($course);

        $('<a />', {
          'class': 'btn btn-primary',
          target: '_blank',
          href: course.url,
          text: "See Course"
        }).appendTo($course);
      })
    }

    function errorMessage(){
      $('<p />', {
        text: "We cannot get the badage from the codeschool server."
      }).appendTo('.container');
    }

});
