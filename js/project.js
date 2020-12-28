$(document).ready(function(){
      var $page = $('html, body');
      $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
        return false;
    });


    $('.sliders').slick({
        arrows:false,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay:true,
        vertical: true,
        verticalSwiping: true,
    });

    $('.news__slides').slick({
        //arrows:false,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay:true,
        nextArrow: '<div class="circle-2 d-flex align-items-center justify-content-center"><i class="far fa-chevron-right"></i></div>',
        prevArrow: '<div class="circle-1 d-flex align-items-center justify-content-center"><i class="far fa-chevron-left"></i></div>',
    });
});

let map;

function initMap() {
  const  myLatLng = { lat: 40.31524323099044, lng: -74.51109230571036 };
  map = new google.maps.Map(document.getElementById("myMap"), {
    //40.31524323099044, -74.51109230571036  
    center: myLatLng,
    zoom: 14,
    styles:[
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#242f3e"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#746855"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#242f3e"
            }
          ]
        },
        {
          "featureType": "administrative.locality",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#d59563"
            }
          ]
        },
        {
          "featureType": "landscape.natural.landcover",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "visibility": "simplified"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#d59563"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#263c3f"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#6b9a76"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#38414e"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#212a37"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9ca5b3"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#746855"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#1f2835"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#f3d19c"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#2f3948"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#d59563"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#17263c"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#515c6d"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#17263c"
            }
          ]
        }
    ]
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Find us here, young Jedi!",
  });
}

///форма
const yourName = document.getElementById('name');
const yourEmail = document.getElementById('email');
const submitBtn = document.getElementById('form-btn');

submitBtn.addEventListener('click', formSubmit)
function formSubmit(){
    // console.log(yourName.value , yourEmail.value)
    if(yourName.value.length==0 || yourEmail.value.length ==0){
        document.getElementById('error').innerHTML = '<span class="bg-danger">Unfortunately empty fields =(</span>';
        setTimeout(function(){ 
            document.getElementById('error').innerHTML = ''; 
        }, 3000);
    }
}