window.onscroll = function() {myFunction()};
    
    var navbar = document.getElementById("featured-title");
    var sticky = navbar.offsetTop;
    
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        
      } else {
        navbar.classList.remove("sticky");
       
      }
      
    }

   
$(document).ready(function() {
    
      // Whenever the window is scrolled ... 
      $(window).scroll( function(){
      
          // Check the location of the object
          $('.fade-in').each( function(i){
              
              var bottom_of_object = $(this).offset().top + $(this).outerHeight();
              var bottom_of_window = $(window).scrollTop() + $(window).height();
              
              // If the object is inside the window, fade it in!
              if( bottom_of_window > bottom_of_object ){
                  
                  $(this).animate({'opacity':'1'},1500);
              }
          }); 
      });
  })
      