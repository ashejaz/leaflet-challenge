// Create map object
let myMap = L.map("map", {
    center: [15.5994, -28.6731],
    zoom: 2
  });
    
  // Add tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  
  // Function to get the color based on depth
  function getColor(depth) {
    if (depth >= -10 && depth < 10) {
      return '#00FF00'; // Green
    } else if (depth >= 10 && depth < 30) {
      return '#ADFF2F'; // Green-Yellow
    } else if (depth >= 30 && depth < 50) {
      return '#FFFF00'; // Yellow
    } else if (depth >= 50 && depth < 70) {
      return '#FFA500'; // Orange
    } else if (depth >= 70 && depth < 90) {
      return '#FF4500'; // Orange-Red
    } else {
      return '#FF0000'; // Red
    }
  }
    
  // Fetch the UGCS earthquake data
  d3.json('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson')
  .then((data) => {
      // Define properties
      data.features.forEach((earthquake) => {
        const lat = earthquake.geometry.coordinates[1];
        const lon = earthquake.geometry.coordinates[0];
        const depth = earthquake.geometry.coordinates[2];
        const magnitude = earthquake.properties.mag;
  
        // Calculate marker size based on magnitude
        const markerSize = magnitude * 5;
  
        // Get marker color based on depth
        const markerColor = getColor(depth);
  
        // Create the marker with a popup containing additional information
        const marker = L.circleMarker([lat, lon], {
          radius: markerSize,
          fillColor: markerColor,
          color: 'black',
          weight: 1,
          opacity: 1,
          fillOpacity: 0.75,
        }).addTo(myMap);
  
        // Generate the popup content
        const popupContent = `
          <b>Magnitude:</b> ${magnitude}<br/>
          <b>Depth:</b> ${depth} km<br/>
          <b>Location:</b> ${earthquake.properties.place}<br/>
          <b>Time:</b> ${new Date(earthquake.properties.time)}
        `;
  
        // Bind the popup to the marker
        marker.bindPopup(popupContent);
      });
    });
  
    // Create a map legend
const legend = L.control({ position: 'bottomright' });

legend.onAdd = function (map) {
  const div = L.DomUtil.create('div', 'info legend');
  const depths = [-10, 10, 30, 50, 70, 90];
  const colors = ['#00FF00', '#ADFF2F', '#FFFF00', '#FFA500', '#FF4500', '#FF0000'];

  // Loop through the depth intervals and generate a label with a colored square for each
  for (let i = 0; i < depths.length; i++) {
    div.innerHTML +=
      '<div><i style="background:' + colors[i] + '"></i>' +
      depths[i] + (depths[i + 1] ? '&ndash;' + depths[i + 1] + ' km' : '+ km') +
      '</div>';
  }

  return div;
};

// Add the legend to the map
legend.addTo(myMap);