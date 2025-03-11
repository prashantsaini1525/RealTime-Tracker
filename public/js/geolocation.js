
/** Initializes geolocation tracking and emits the current position through the socket. **/
export function initGeolocation(socket) {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(
      (position) => {
        console.log("Current coordinates:", position.coords);
        const { latitude, longitude } = position.coords;
        socket.emit("send-location", { latitude, longitude });
      },
      (error) => {
        console.error("Geolocation error:", error);
      },
      {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 15000 // Extended timeout for better accuracy
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
}
