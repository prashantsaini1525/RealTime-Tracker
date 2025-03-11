# Realtime Tracker App

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Node.js](https://img.shields.io/badge/Node.js-v14+-brightgreen.svg)

## Overview

Realtime Tracker App is a modern web application built to track live locations in real time. Inspired by platforms like Zomato and Swiggy, this app allows you to see the exact position of your delivery personnel on an interactive map. The application leverages advanced web technologies such as **Socket.io** for real-time communication, **Leaflet** for interactive maps, and **Lottie-web** for stunning animated markers.

## Features

- **Live Geolocation Tracking:**  
  Continuously fetches and updates geolocation data using the browser’s native API with high accuracy settings.

- **Real-Time Communication:**  
  Utilizes Socket.io for bidirectional, event-based communication between the server and connected clients.

- **Interactive Mapping:**  
  Powered by Leaflet, users can zoom, pan, and interact with a dynamic map that visualizes delivery routes and current positions.

- **Animated Markers:**  
  Custom markers powered by Lottie animations provide a modern and engaging user interface.

- **Friendly User Interface:**  
  On clicking a marker, a custom popup displays a friendly name (instead of a raw socket ID) along with delivery information and an image.

- **Route Tracking:**  
  Visualizes the historical route of each delivery person with smooth polyline rendering.

- **Modular Code Structure:**  
  Organized in multiple ES6 modules for ease of maintenance and scalability.

## Demo

> **Note:** You can view a live demo using [ngrok](https://ngrok.com/).  
> For example, after starting your server locally on port 3000, run:
>
> ```bash
> ngrok http 3000
> ```
>
> Then share the public URL provided by ngrok.

![Realtime Tracker Demo](https://via.placeholder.com/800x400?text=Realtime+Tracker+Demo)

## Tech Stack

- **Backend:** Node.js, Express
- **Real-Time Communication:** Socket.io
- **Frontend:** EJS, HTML5, CSS3, Vanilla JavaScript (ES6 Modules)
- **Mapping:** Leaflet
- **Animations:** Lottie-web
- **Utilities:** Geolocation API, Polyline Routing

## Installation

1. **Clone the Repository:**

```bash
git clone https://github.com/prashantsaini1525/RealTime-Tracker.git
cd RealTime-Tracker

```

2. **Install Dependencies:**

```bash
npm install

```

3. **Set Up Environment Variables:**

- Create a .env file in the root directory and add:

```bash
PORT=3000
NGROK_AUTH_TOKEN=your_ngrok_auth_token_here
# Add other sensitive keys if needed
```

4. **Run the Application:**

```bash
npm start
```

- The app should now be running on http://localhost:3000.

## Roadmap & Future Enhancements

- **Enhanced Security:**  
  Add user authentication and secure API endpoints.

- **Analytics Dashboard:**  
  Integrate an admin dashboard to view and analyze delivery performance and routes.

- **Analytics Dashboard:** 
  Further refine the UI for mobile devices to improve user experience on smaller screens.

- **Push Notifications:**  
  Implement real-time notifications for delivery updates.

- **Customizable Themes:**  
  Allow users to choose different map styles and marker themes.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please fork the repository and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.