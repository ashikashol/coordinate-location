// Default coordinates (India)
var defaultLat = 20.5937;
var defaultLng = 78.9629;
var defaultZoom = 5;

// Initialize map
var map = L.map('map').setView([defaultLat, defaultLng], defaultZoom);

// English-friendly map tiles (CartoDB Positron)
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
}).addTo(map);

// Marker
var marker = L.marker([defaultLat, defaultLng]).addTo(map);

// Button click event
document.getElementById("showLocation").addEventListener("click", function () {

    var lat = parseFloat(document.getElementById("latitude").value);
    var lng = parseFloat(document.getElementById("longitude").value);

    if (isNaN(lat) || isNaN(lng)) {
        alert("Please enter valid latitude and longitude values.");
        return;
    }

    if (lat < -90 || lat > 90) {
        alert("Latitude must be between -90 and 90.");
        return;
    }

    if (lng < -180 || lng > 180) {
        alert("Longitude must be between -180 and 180.");
        return;
    }

    map.setView([lat, lng], 13);
    marker.setLatLng([lat, lng]);
});
