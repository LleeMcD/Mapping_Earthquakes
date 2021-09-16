// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([40.7, -94.5], 4);

// Change map coordinates to somewhere between LAX and SFO, change zoom level to 7
// let map = L.map('mapid').setView([36.1733, -120.1794], 7);

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Coordinates for each point to be used in the polyline for 4 ariports; LAX, SFO, SLC, and SEA.
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790],
//     [40.7899, -111.9791],
//     [47.4502, -122.3088]
//   ];

// let line = [ 
// [33.9416, -118.4085],        
// [30.2026,  -97.6681],
// [43.1919,  -89.4557], 
// [43.6777,  -79.6248],       
// [40.6417,  -73.7809]
// ];

    
// Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//     color: "blue"
//   }).addTo(map);

// // Create a polyline using the line coordinates and make the dashed line blue with opacity of 5
// L.polyline(line, {
//     color: "blue", weight:'4', opacity: 0.5, dashArray:'10,10', dashOffset: '0'
//   }).addTo(map);

//  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// let marker = L.circleMarker([34.0522, -118.2437], {
//     radius: 300   
//  }).addTo(map);
 
//  marker.setStyle({color: 'orange'}) 

// Get data from cities.js
// let cityData = cities;

// Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.marker(city.location).addTo(map);
// });
// Loop through the cities array and create a popup with thousands separator in description.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.marker(city.location)
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//   .addTo(map);
// });

//Loop through the cities array and create one circle marker for each city, nightime with orange markers and -200,000 city pop 
// cityData.forEach(function(city){
//         console.log(city)
//         L.circleMarker(city.location, {
//             radius: city.population/200000,
//             color: 'orange'            
//         })
//         .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//       .addTo(map);
//     });
    

// We create the tile layer that will be the background of our map.
// Night
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);