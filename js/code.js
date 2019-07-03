var myCenter = new google.maps.LatLng(41.878114, -87.629798);

function initialize() {
var mapProp = {
center:myCenter,
zoom:12,
scrollwheel:false,
draggable:false,
mapTypeId:google.maps.MapTypeId.ROADMAP
};

var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker = new google.maps.Marker({
position:myCenter,
});

marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(function(){
    
    $('[data-toggle="tooltip"]').tooltip(); 
    
    
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
  
      
      event.preventDefault();
  
      
      var hash = this.hash;
  
      
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
     
        window.location.hash = hash;
      });
    });
  })