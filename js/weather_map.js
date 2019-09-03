'use strict';

var show = document.getElementById("showWeather");
var inputCity = document.getElementById("input-city");
var cityNameDiv = document.getElementById("cityName");
var city = "";
var cityCoords;
var browserLongitude;
var browserLatitude;
var loc = "";
var proxy = 'https://cors-anywhere.herokuapp.com/';
var darkSky = 'https://api.darksky.net/forecast/';
var currentDarkSkyData;
var cards = document.getElementById("cards");
var card = document.getElementsByClassName('card');


function setLoc(long, lat) {
    loc = lat + "," + long;
    return loc;
}

function updateDarkSkyDate() {
    $.get(proxy + darkSky + darkSkyKey + '/' + loc).done(function (data) {
        currentDarkSkyData = data;
        show.innerText = data.currently.apparentTemperature + " F";
    }).fail(function (jqXhr, status) {
        console.log(status);
    });
}

document.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        console.log(inputCity.value);
        cityNameDiv.innerText = inputCity.value;
        city = inputCity.value;
        geocode(city, mapBoxToken).then(function (result) {
            cityCoords = result;
        });
        setTimeout(function () {
            flyMe(cityCoords[0], cityCoords[1]);
        }, 500);
        setTimeout(function () {
            setLoc(cityCoords[0], cityCoords[1]);
            updateDarkSkyDate();
            pushCardDataToPage();
        }, 2000);
        setTimeout(function () {
            manageCardData(currentDarkSkyData);
            pushCardDataToPage();
        }, 4000);
    }
});


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
    }
}

function showPosition(position) {
    show.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
    browserLongitude = position.coords.longitude;
    browserLatitude = position.coords.latitude;
    loc = position.coords.latitude + "," + position.coords.longitude;
    return loc;
}

setTimeout(function () {
    getLocation();


}, 3000);


// conversion formulas
// function convertFtoC(num) {
//     return (num - 32) / 1.8;
// }
//
// function convertCtoF(num) {
//     return (num * 1.8) + 32;
// }


// Basic specs for map
mapboxgl.accessToken = mapBoxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 0
});

// Fly to location when 'Fly' button is pressed
document.getElementById("fly").addEventListener("click", function () {
    console.log("fly was pressed");
    map.flyTo({
        center: [
            -74.50 + (Math.random() - 0.5) * 10,
            40 + (Math.random() - 0.5) * 10],
        zoom: 18
    });
});

// function to fly somewhere.
function flyMe(argsLong, argsLat) {
    map.flyTo({
        center: [argsLong, argsLat],
        zoom: 10
    });
}


function dayOfTheWeek(date) {
    var tempDateSS = date.toString().substring(0, 3);
    var temp = "";

    switch (tempDateSS) {
        case 'Sun':
            temp = "Sunday";
            break;
        case 'Mon':
            temp = "Monday";
            break;
        case 'Tue':
            temp = "Tuesday";
            break;
        case 'Wed':
            temp = "Wednesday";
            break;
        case 'Thu':
            temp = "Thursday";
            break;
        case 'Fri':
            temp = "Friday";
            break;
        case 'Sat':
            temp = "Saturday";
            break;
    }

    return temp;
}

function manageCardData(obj) {
    var tempStr = "";
    var doNothing;
    var tempDate = "";
    var dayOfWeekstr = "";


    obj.daily.data.forEach(function (e, i) {
        if (i <= 2) {
            tempDate = new Date(e.time * 1000);
            dayOfWeekstr = dayOfTheWeek(tempDate);

            tempStr += '<div class="card" style="width: 18rem;">';
            tempStr += '<div class="card-body">';
            if (i === 0) {
                tempStr += '<h5 class="card-title" id="summary">Today</h5>';
            } else if (i === 1) {
                tempStr += '<h5 class="card-title" id="summary">Tomorrow</h5>';
            } else {
                tempStr += '<h5 class="card-title" id="summary">' + dayOfWeekstr + '</h5>';
            }
            tempStr += '<h6 class="card-subtitle mb-2 text-muted">' + e.summary + '</h6>'; //img controler
            tempStr += '<p class="card-text"></br></p>'; // display current temperature
            tempStr += '<p class="card-text"><small>High / Low: </small></br>' + e.temperatureHigh + ' / ' + e.temperatureLow + '</br></p>';
            tempStr += '<p class="card-text"><small>Wind Speed</small></br>';
            tempStr += '<img class="windIcon" src="img/windVector.svg">' + e.windSpeed + '<small>mph</small></br></p>';
            tempStr += '</div>';
            tempStr += '</div>';
        } else {
            doNothing = null;
        }
    });

    return tempStr;
}



// Print card data to page.
function pushCardDataToPage() {
    cards.innerHTML = manageCardData(currentDarkSkyData);
    for (var i = 0; i < card.length; i++) {
        card[i].style.visibility = "visible";
    }
}

window.onload = () => {

    const aeris = new AerisWeather('ij1agB9njtuQu96ScjO7H', 'k05wcMaqGMC1meYUdWI19yeJHTgKodmL9fK9S7SZ');

    aeris.views().then(views => {
        const map = new views.InteractiveMap(document.getElementById('map1'), {
            center: {
                lat: 39.7,
                lon: -93.38
            },
            zoom: 4,
            layers: 'blue-marble,tropical-cyclones,radar,admin-cities-dk',
            timeline: {
                from: -2 * 3600, // seconds
                to: 0 * 3600
            }
        });
    // Animation controls
    const control = document.getElementById('map-toggle-anim');
    map.on('load', () => {

        // update the control label based on the map animation state
        map.on('timeline:play', () => {
            control.innerHTML = 'Stop';
});
    map.on('timeline:stop', () => {
        control.innerHTML = 'Play';
});

    // toggle the animation when the play/stop button is clicked
    control.addEventListener('click', function(e) {
        e.preventDefault();
        map.timeline.toggle();
    });
});
});
};
