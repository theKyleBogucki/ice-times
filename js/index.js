jQuery(document).ready(function() {

  var state = false;

  function hideDropDown() {
    state = false;
    $("#nav").fadeOut();
    $(".hamburger").text("=")
  }

  function showDropDown() {
    state = true;
    $("#nav").fadeIn();
    $(".hamburger").text("X")
  }


function animateNav () {
  if (state) {
    hideDropDown();
  } else {
    showDropDown();
  }
}



$(".hamburger").click(animateNav)






});
