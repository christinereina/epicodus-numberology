$(document).ready(function() {
  $("#myForm").submit(function(event){
   event.preventDefault();
    $(".form-show").slideToggle(".no-show");
    $(".second-screen").slideToggle(".no-show");
  });
});