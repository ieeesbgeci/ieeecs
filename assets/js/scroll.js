window.onscroll = function() {myFunction()};
    
    var navbar = document.getElementById("featured-title");
    var sticky = navbar.offsetTop;
    
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        
      } else {
        navbar.classList.remove("sticky");

        
      }
      var scroll = $(window).scrollTop();
      if (scroll > 800) {
        $("#featured-title").css("display" , "block");
	  }
      else{
        $("#featured-title").css("display" , "none");
      }
    }
