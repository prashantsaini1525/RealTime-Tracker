// Initialize the Socket.io client.
const socket = io();

if (navigator.geolocation) {
    navigator.geolocation.watchPosition(
        (position) => {
            const { latitude, longitude } = position.coords;
            console.log("Client location:", latitude, longitude);
            socket.emit("send-location", { latitude, longitude });
        },
        (error) => {
            console.error(error);
        },
        {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        }
    );
}

const map = L.map("map").setView([0, 0], 16);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© Prashant Saini",
}).addTo(map);

// This object will store our markers by socket id.
const markers = {};

// A function to create a custom Lottie marker.
function createLottieMarker(id, lat, lng) {
    // Create a unique container id for the marker
    const containerId = "lottie-marker-" + id;

    // Create a custom div icon with a container for the Lottie animation.
    const icon = L.divIcon({
        html: `<div id="${containerId}" class="lottie-marker"></div>`,
        iconSize: [50, 50],
        className: "" // remove default styles if needed
    });

    // Create the marker with the custom icon.
    const marker = L.marker([lat, lng], { icon }).addTo(map);

    // Initialize the Lottie animation on the container.
    lottie.loadAnimation({
        container: document.getElementById(containerId),
        renderer: "svg",
        loop: true,
        autoplay: true,
        // Replace with the correct path to your Lottie JSON file.
        path: "/animation/marker.json",
    });

    return marker;
}

socket.on("receive-location", (data) => {
    const { id, latitude, longitude } = data;

    // Optionally, you can set view only for the first client or remove it
    // map.setView([latitude, longitude]);

    if (markers[id]) {
        // Update marker position
        markers[id].setLatLng([latitude, longitude]);
    } else {
        // Create a new marker with Lottie animation.
        markers[id] = createLottieMarker(id, latitude, longitude);
    }

    // Get coordinates of all markers
    const allCoords = Object.values(markers).map(marker => marker.getLatLng());
    // Adjust the map view to fit all markers with some padding
    if (allCoords.length > 0) {
        map.fitBounds(allCoords, { padding: [50, 50] });
    }
});

socket.on("user-disconnected", (id) => {
    if (markers[id]) {
        map.removeLayer(markers[id]);
        delete markers[id];
    }
});
