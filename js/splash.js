$(document).ready(function() {
   setTimeout(function() {
       $(".splash").fadeOut(1500);
   },3000);

   setTimeout(function() {
       $(".non-splash").fadeIn(1500);
   },6000);
});


/*función para obtener el mapa de la api de google*/
function initMap() {
      var uluru = {lat: 19.356025, lng: -99.162595};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru
      });
      var marker = new google.maps.Marker({
        position: uluru,
        map: map
      });
    }
