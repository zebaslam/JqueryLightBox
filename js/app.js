//Problem: User when clicking on image goes to a dead end. 
//Solution: Create an overlay with the large image -known as a lightbox
var $overlay= $('<div id="overlay"> </div>');
var $image = $("<img>");
var $caption= $("<p> </p>");
//An image
$overlay.append($image);

  
//A caption to overlay
$overlay.append($caption);

//Add overlay
$("body").append($overlay);
//1. capture the click event on a link to an image 
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation= $(this).attr("href");
  //update overlay with the image linked in the link 
  //set method of attr method
  $image.attr("src", imageLocation);
  
  //show the overlay 
  $overlay.show();

 
//Get child's alt attribute and set caption 
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
  
});

 
//When overlay is clicked
$overlay.click(function(){
//hide the overlay
  $(overlay).hide();


});
  