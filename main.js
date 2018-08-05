//Header Background On Scroll
  var $header = $('#header');

  $(document).ready(function(){
       $(window).scroll(function() { // check if scroll event happened
         if ($(document).scrollTop() > 5) { // check if user scrolled more than 5 from top of the browser window
           $header.css("background-color", "#35353596"); // if yes, then change the color of variable
         } else {
           $header.css("background-color", "transparent"); // if not, change it back to transparent
         }
       });
     });

//End Background Scroll

// Nav Menu Slide
  var $nav = $('nav');
  var $dropContainer = $('.drop-container');
  var $dropIcon = $('#icon');

  $dropContainer.click(function() {
    if ($dropIcon.hasClass('fa-bars')) {
      //Change Fontawesome icons w/fade
      $dropIcon.fadeOut(200, function() {
        $(this).removeClass('fa-bars');
        $(this).fadeIn(200, function() {
          $(this).addClass('fa-times');
        });
      });
      //Bring Nav Menu In
      $nav.slideDown(600, function() {
        $(this).css('display', 'block');
      })
    } else {
      //Change Fontawesome icons w/fade
      $dropIcon.fadeOut(200, function() {
        $(this).removeClass('fa-times');
        $(this).fadeIn(200, function() {
          $(this).addClass('fa-bars');
        });
      });
      //Take Nav Menu Out
      $nav.slideUp(600, function() {
        $(this).css('display', 'none');
      })
    }
  });
//End Nav Menu

//Client List Cycle function
<<<<<<< HEAD
  var $divs = $('div[class^="client-group"]').hide(),
      i = 0;

  (function cycle() {
      $divs.eq(i).fadeIn(400)
                 .delay(2000)
                 .fadeOut(400, cycle);

      i = ++i % $divs.length;
  })();
=======
var $divs = $('div[class^="client-group"]').hide(),
    i = 0;

(function cycle() {
    $divs.eq(i).fadeIn(400)
               .delay(2000)
               .fadeOut(400, cycle);

    i = ++i % $divs.length;
})();
//

//Testimony Slideshow
var $joe = $('#joe');
var $joeDot = $('.joe-dot')
var $jen = $('#jen');
var $jenDot = $('.jen-dot')
var $joe = $('#joe');
var $joeDot = $('.joe-dot')
var $jen = $('#jen');
var $jenDot = $('.jen-dot')

$jenDot.click(function jenclick() {
  if ($joe.css('display', 'block')) {
    $joe.css('display', 'none');
      $joeDot.removeClass('active');
    };
    $jen.css('display', 'block');
      $jenDot.addClass('active');
});

$joeDot.click(function jenclick() {
  if ($jen.css('display', 'block')) {
    $jen.css('display', 'none');
      $jenDot.removeClass('active');
    };
    $joe.css('display', 'block');
      $joeDot.addClass('active');
});

>>>>>>> d70949a0c13ba4dc4a0649b0f38a9a6b1774d24e
//
