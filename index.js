$(document).ready(function(){
    $('.header').height($(window).height());
  })
  
 <img  class="mySlides" src="photos/temple-c.jpg" alt="" width="100%" height="500px"></img>

 
  var myIndex = 0;
	carousel();

	function carousel() {
	  var i;
	  var x = document.getElementsByClassName("mySlides");
	
	  for (i = 0; i < x.length; i++) {
	    x[i].style.display = "none";
	  }
	  myIndex++;
	  if (myIndex > x.length) {myIndex = 1}
	  x[myIndex-1].style.display = "block";
	  setTimeout(carousel, 5000);
	}
	getElementsByClassName
	