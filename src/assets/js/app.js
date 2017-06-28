$(document).foundation();


$('.works-slider__component').slick({
        adaptiveHeight: true,
    dots: true,
    responsive: true,
    }
);

$('.team-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
        {
            breakpoint: 800,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 617,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});


function initMap() {
    var center = {lat: 46.476, lng: 30.723};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: center,
        scrollwheel: false,
        styles: [
            {
                "featureType": "all",
                "stylers": [
                    {"saturation": -100}
                ]
            },
        ]
    });

    var image = '../assets/img/maps/pin.svg';
    var beachMarker = new google.maps.Marker({
        position: {lat: 46.476, lng: 30.723},
        map: map,
        icon: image
    });
}













