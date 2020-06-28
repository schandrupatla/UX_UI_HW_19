//Download the resume
$(".resumeImage").on('click', function(){
     var valFileDownloadPath = 'Images/Sridevi_Chandrupatla_Resume.pdf';
    window.open(valFileDownloadPath , '_blank');
});

//Disk Image spin
$.fn.animateRotate = function(angle, duration, complete) {
    return this.each(function() {
      var $elem = $(this);
  
      $({deg: 0}).animate({deg: angle}, {
        duration: duration,
        easing: "linear",
        step: function(now) {
          $elem.css({
             transform: 'rotate(' + now + 'deg)'
           });
        },
        complete: complete || $.noop
      });
    });
  };
  
  $("#diskImage").click(function(event){
      $(this).animateRotate(360,3000,10000);
  });

//Change the different states of Menu Items
// Get the container element
var btnContainer = document.getElementById("toggleContainer");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("toggle");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}
 