jQuery(document).ready(function() {

  // var rink = ["Cabin John","Kettler Capitals Iceplex", "Rockville Ice Rink", "Skatequest", "Wheaton Ice Rink"];
  //
  // for (var i = 0; i < rink.length; i++){
  //   // console.log(cities[i]);
  //   $("#rinkSearch").append("<option>" + rink[i] + "</option>");
  //
  // }


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



  function doFav() {

    var rinkName = $(this).parent().attr("data-rink");
    console.log(rinkName)

    $(".favoriteBar [data-rink='" + rinkName + "']").show()

  }

  $(".addFav").click(doFav);



  function removeFav() {

    $(this).parent().hide();

  }

  $(".favClose").click(removeFav);


});
