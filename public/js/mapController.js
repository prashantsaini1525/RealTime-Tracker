
import { getFriendlyName } from "./helpers.js";

/** Initializes and returns a Leaflet map. **/
export function initMap() {
  const map = L.map("map").setView([0, 0], 15);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© Your App"
  }).addTo(map);
  return map;
}

/** Updates or creates a marker on the map based on received location data. **/
export function updateMarker(data, map, markers, routes) {
  const { id, latitude, longitude } = data;
  const latlng = [latitude, longitude];

  if (markers[id]) {
    // Update marker position and extend the route polyline.
    markers[id].setLatLng(latlng);
    routes[id].addLatLng(latlng);
  } else {
    const friendlyName = getFriendlyName(id);
    const markerContainerId = `marker-${id}`;
    const markerHtml = `
      <div id="${markerContainerId}" class="marker-container">
        <div class="lottie-animation"></div>
        <div class="marker-info">
          <img src="/images/user.png" alt="Delivery Person">
          <h3>${friendlyName}</h3>
          <p>Your delivery is on the move!</p>
        </div>
      </div>
    `;
    
    // Create a custom div icon using the combined HTML container.
    const customIcon = L.divIcon({
      html: markerHtml,
      className: '', // No extra styles.
      iconSize: [50, 50],
      iconAnchor: [25, 25]
    });
    
    // Create the marker on the map.
    markers[id] = L.marker(latlng, { icon: customIcon }).addTo(map);
    
    // Load the Lottie animation into the '.lottie-animation' element.
    setTimeout(() => {
      const containerEl = document.querySelector(`#${markerContainerId} .lottie-animation`);
      if (containerEl) {
        lottie.loadAnimation({
          container: containerEl,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: '/animation/marker.json' // Make sure this path is correct.
        });
      } else {
        console.error("Lottie container not found for marker:", markerContainerId);
      }
    }, 100);
    
    // Create a polyline to track the route for this marker.
    routes[id] = L.polyline([latlng], {
      color: 'red',
      weight: 3,
      opacity: 0.7
    }).addTo(map);
    
    // Toggle the display of marker info on marker click.
    markers[id].on('click', () => {
      const markerEl = document.getElementById(markerContainerId);
      const infoDiv = markerEl.querySelector('.marker-info');
      infoDiv.style.display =
        infoDiv.style.display === 'none' || infoDiv.style.display === '' ? 'block' : 'none';
    });
  }
  
  // Optionally, recenter the map to the latest position.
  map.setView(latlng);
}

/**
 * Removes a marker and its route when a user disconnects.
 */
export function removeMarker(id, markers, routes, map) {
  if (markers[id]) {
    map.removeLayer(markers[id]);
    delete markers[id];
  }
  if (routes[id]) {
    map.removeLayer(routes[id]);
    delete routes[id];
  }
}
