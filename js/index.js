jQuery(document).ready(function() {


  function faved () {
    alert("You have favorited this rink!")
  }
  $("#rinkFav").click(faved)

  function register () {
    alert("Thank you for registering for this event")
  }
  $("#skateSignUp").click(register)

  var state = false;

  function hideDropDown() {
    state = false;
    $("#mobileNav").fadeOut();
    $(".hamburger").removeClass("open");
    $(".hamburger").addClass("closed");

  }

  function showDropDown() {
    state = true;
    $("#mobileNav").fadeIn();
    $(".hamburger").removeClass("closed");
    $(".hamburger").addClass("open");
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


  function searchRink() {
    console.log("Search Rink Function");
    event.preventDefault()

    var rink = $("#rinkSearch").val();
    // console.log(rink);

    if (rink == "Kettler" || rink == "Kettler Ice Plex" || rink == "Kettler Capitals Iceplex"){

        window.location.assign("rinks/kettler.html")

    }

    else if  (rink == "Cabin John" || rink == "Cabin John Ice Rink" || rink =="Cabin John Ice Arena"){

        window.location.assign("rinks/cabinjohn.html")

    }

    else if (rink == "Rockville" || rink == "Rockville Ice Rink" || rink == "Rockville Ice Arena"){

        window.location.assign("rinks/rockville.html")

    }

    else if (rink == "Reston" || rink == "Skatequest" || rink == "Reston Ice Rink"){

      window.location.assign("rinks/reston.html")

    }

    else if (rink == "Wheaton" || rink == "Wheaton Ice Rink"){

      window.location.assign("rinks/wheaton.html")

    }

    else if (rink == "Washington" || rink == "Washington DC"){

      window.location.assign("grid.html")

    }


  }

  $("#rinkForm").submit(searchRink)





  $(".menu-toggle").click(function() {
    $("nav a").velocity("transition.fadeIn");

    $("nav").velocity({
      translateY: ["0%", "-100%"],
    }, {
      easing: [400, 50],
      duration: 500
    });
    $(".overlay").velocity({
      opacity: [1, 0]
    }, {
      display: 'block'
    });
  });







});
