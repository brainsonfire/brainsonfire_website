var geocoder;
var map;
  function initialize() {

    var styleArray = [
      {
        featureType: 'all',
        stylers: [
          { hue: '#9BE1ED' },
          { saturation: 85 },
          { lightness: -10 },
          { gamma: 1 },
          { visibility: "on" },
          { weight: "2" },  ]
      },{
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [
        { hue: '#9BE1ED' },
          { saturation: 55 }, 
          { lightness: -40 }, 
          { gamma: 6 } 
        ]
      },
    ];

    var myLatlng = new google.maps.LatLng(34.8469140, -82.4035820);
    var mapOptions = {
      zoom: 19,
      center: myLatlng,
      styles: styleArray,
      mapTypeId: google.maps.MapTypeId.ROADMAP //specifies map type
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

      var image = 'images/logo-bof-bw(65x65).png';
    var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: 'Brains On Fire',
    icon: image
  });
    }

  google.maps.event.addDomListener(window, 'load', initialize);