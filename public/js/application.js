$(document).ready(function(){
  $('a').on('click', function(event) {
    event.preventDefault();
      $.post('/color', function(response) {
        var cell =  response.cell
        var color = response.color
        $("ul li:nth-child(" + cell + ")").css("background-color", color)
      });
  });
});
