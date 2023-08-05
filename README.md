## Overview

For this challenge, earthquake data from the [United States Geological Survey](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) was visualised by creating interactive maps using Leaflet in JavaScript.

## Part 1

For the first part of the challenge, an [interactive map](https://ashejaz.github.io/leaflet-challenge/) of the [last 7 days of earthquake data](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson) was created.

<img width="1239" alt="Screenshot 2023-08-05 at 22 47 08" src="https://github.com/ashejaz/leaflet-challenge/assets/127614970/59cf0de7-78d4-4af8-9de2-89da3a160bb6">

The d3 library was used to fetch the data and each marker on the map represents an earthquake datapoint.

The size of the marker relates to the magnitude of the earthquake and the marker colour relates to the depth of the earthquake, based on the following scale:

<img width="110" alt="Screenshot 2023-08-05 at 22 52 18" src="https://github.com/ashejaz/leaflet-challenge/assets/127614970/19f4d735-2459-4ea4-9e8c-ab025899ba7f">

Once a marker is clicked, a pop-up box appears detailing magnitude, depth, location and time of the earthquake:

<img width="361" alt="Screenshot 2023-08-05 at 22 54 06" src="https://github.com/ashejaz/leaflet-challenge/assets/127614970/2e294d4b-1a54-4d5a-8fbe-21448704fc67">

### Files

Follow links for the [HTML](Leaflet-Part-1/index.html), [JavaScript](Leaflet-Part-1/static/js/logic.js), and [CSS](Leaflet-Part-1/static/css/style.css) scripts used in this section, and the [final map](https://ashejaz.github.io/leaflet-challenge/).

## Part 2

For the second part of the challenge, [tectonic plate data](https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json) was added onto the map from part 1.

<img width="1097" alt="Screenshot 2023-08-05 at 23 08 23" src="https://github.com/ashejaz/leaflet-challenge/assets/127614970/019ba20f-b49e-49c2-8bf8-0ff677cfff38">


The resulting [interactive map](https://ashejaz.github.io/leaflet-part-2/) features togglable data layers and additional Satellite and Topographic tile layers:

<img width="241" alt="Screenshot 2023-08-05 at 23 09 58" src="https://github.com/ashejaz/leaflet-challenge/assets/127614970/cb78c2fe-57bd-4ed8-a0d8-52214ba0516a">

### Files

Follow links for the [HTML](Leaflet-Part-2/index.html), [JavaScript](Leaflet-Part-2/static/js/logic.js), and [CSS](Leaflet-Part-2/static/css/style.css) sripts used in this section, and the [final map](https://ashejaz.github.io/leaflet-part-2/).

## References
Earthquake data: [United States Geological Survey](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php)

Tectonic plate data: [github.com/fraxen](https://github.com/fraxen/tectonicplates)
