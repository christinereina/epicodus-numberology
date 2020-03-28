$(document).ready(function() {
  $("#getReport").submit(function(event){
   event.preventDefault();
    $(".report-show").slideUp(".no-show");
    $(".second-screen").slideDown(".no-show");
    $("form#quiz").submit(function(event) {
      event.preventDefault();
      var question1 = parseInt($("input:radio[name=q1]:checked").val());
      var question2 = parseInt($("input:radio[name=q2]:checked").val());
      var question3 = parseInt($("input:radio[name=q3]:checked").val());
      var question4 = parseInt($("input:radio[name=q4]:checked").val());
      var question5 = parseInt($("input:radio[name=q5]:checked").val());
      var result = question1 + question2 + question3 +  question4 + question5;
  
      if (result < 4 ) {
        $("#ruby").fadeIn();
        $("#python").hide();
        $("#js").hide();
        $('#quiz').hide();
      }
      else if (result >= 3 && result <= 7) {
        $("#python").fadeIn();
        $("#js").hide();
        $("#ruby").hide();
        $('#quiz').hide();
      }
      else if (result >= 7 && result <= 10) {
        $("#js").fadeIn();
        $("#ruby").hide();
        $("#python").hide();
        $('#quiz').hide();
      }
    });
    $('.btn1').click(function(){
      location.reload();
    })
  });
  });