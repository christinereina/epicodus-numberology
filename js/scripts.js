$(document).ready(function() {
  $("#getReport").submit(function(event){
   event.preventDefault();
    $(".report-show").toggle(".no-show");
    $(".second-screen").toggle(".no-show");
    $("form#quiz").submit(function(event) {
      event.preventDefault();
      var q1 = parseInt($("#q1").val());
      var q2 = parseInt($("#q2").val());
      var q3 = parseInt($("#q3").val());
      var celebrity = q1+q2+q3;
  
  
      if (celebrity < 4 ) {
        $("#ponyo").toggle();
        $("#sosuke").hide();
        $("#lisa").hide();
        $('#quiz').hide();
      }
      else if (celebrity >= 3 && celebrity <= 7) {
        $("#sosuke").toggle();
        $("#ponyo").hide();
        $("#lisa").hide();
        $('#quiz').hide();
      }
      else if (celebrity >= 7 && celebrity <= 10) {
        $("#lisa").toggle();
        $("#ponyo").hide();
        $("#sosuke").hide();
        $('#quiz').hide();
      }
    });
    $('.btn1').click(function(){
      location.reload();
    })
  });
  });