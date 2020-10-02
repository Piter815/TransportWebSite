let map;

function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: 50.762031, lng: 16.2870917 },
//     zoom: 14,
//   });
// }

var uluru = {lat: 50.762031, lng: 16.2870917};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 14, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}