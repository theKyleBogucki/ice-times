jQuery(document).ready(function() {

  var state = false;

  function hideDropDown() {
    state = false;
    $("#mobileNav").fadeOut();
    $(".hamburger").text("=")
  }

  function showDropDown() {
    state = true;
    $("#mobileNav").fadeIn();
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





function addCabinJohn() {
  state = false;
  $("#cbFav").fadeIn();

}

$("#addCB").click(addCabinJohn)


function removeCabinJohn() {
  state = true;
  $("#cbFav").fadeOut();

}

$("#cbClose").click(removeCabinJohn)





function addKettler() {
  state = false;
  $("#ketFav").fadeIn();

}

$("#addKet").click(addKettler)


function removeKettler() {
  state = true;
  $("#ketFav").fadeOut();

}

$("#ketClose").click(removeKettler)



function addRockville() {
  state = false;
  $("#rockFav").fadeIn();
  $("#rockFav").css("display: block;");

}

$("#addRock").click(addRockville)


function removeRockville() {
  state = true;
  $("#rockFav").fadeOut();

}

$("#rockClose").click(removeRockville)


});
