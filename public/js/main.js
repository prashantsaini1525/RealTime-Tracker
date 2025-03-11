
import { initGeolocation } from "./geolocation.js";
import { initMap } from "./mapController.js";
import { initSocket } from "./socketHandler.js";

// Initialize the Socket.io client.
const socket = io();

// Initialize the map.
const map = initMap();

// Create empty objects to track markers and routes.
const markers = {};
const routes = {};

// Start geolocation tracking.
initGeolocation(socket);

// Set up socket event listeners.
initSocket(socket, map, markers, routes);
