
import { updateMarker, removeMarker } from "./mapController.js";

/** Initializes Socket.io event listeners for location updates and disconnections. **/
export function initSocket(socket, map, markers, routes) {
  socket.on("receive-location", (data) => {
    updateMarker(data, map, markers, routes);
  });

  socket.on("user-disconnected", (id) => {
    removeMarker(id, markers, routes, map);
  });
}
