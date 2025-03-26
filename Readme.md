# Realtime Tracker App

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/prashantsaini1525/RealTime-Tracker/releases)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-v14+-brightgreen.svg)](https://nodejs.org/)
[![Stars](https://img.shields.io/github/stars/prashantsaini1525/RealTime-Tracker.svg?style=social)](https://github.com/prashantsaini1525/RealTime-Tracker/stargazers)
[![Contributors](https://img.shields.io/github/contributors/prashantsaini1525/RealTime-Tracker.svg)](https://github.com/prashantsaini1525/RealTime-Tracker/graphs/contributors)

## Overview

Realtime Tracker App is a simple real-time tracking application built with Node.js, **Socket.io** for real-time communication, **Leaflet** for interactive maps, and **Lottie-web** for stunning animated markers. It simulates real-time location tracking between two users (for example, a customer and a delivery person, similar to delivery apps like Swiggy or Zomato).

## Features

- **Live Geolocation Tracking:**  
  The app constantly checks your location using your browser’s built-in geolocation tool, keeping it as accurate as possible.

- **Real-Time Communication:**  
  Utilizes Socket.io for bidirectional, event-based communication between the server and connected clients.

- **Interactive Mapping:**  
  Powered by Leaflet, users can zoom, pan, and interact with a dynamic map that visualizes delivery routes and current positions.

- **Animated Markers:**  
  Custom markers powered by Lottie animations provide a modern and engaging user interface.

# Demo

> **Note:** You can view a live demo using [ngrok](https://ngrok.com/).  
> After starting your server locally on port 3000, follow these steps:
>
> 1. **Open ngrok:**  
>    Launch the ngrok software on your computer.
>
> 2. **Expose Your Server Publicly:**  
>    Enter the command:
>
>    ```bash
>    ngrok http 3000
>    ```
>
> 3. **Share the Public URL:**  
>    ngrok will provide a public URL (e.g., `https://abcd1234.ngrok.io`). Open this URL on your mobile device or share it with others.
>
> This allows you to test your real-time tracking app across multiple devices.

![Realtime Tracker Demo](./public/images/Live%20Tracking.png)

## Prerequisites

Before setting up the project, ensure you have the following installed:

- **Node.js (and npm):**  
  Required to run the server and manage dependencies. Download from [nodejs.org](https://nodejs.org/).

- **ngrok:**  
  Used to expose your local server to a public URL for testing across devices. Download from [ngrok.com](https://ngrok.com/).

- **Google Chrome:**  
  Recommended for testing and using the developer tools (especially for overriding geolocation).

- **A Mobile Device:**  
  For real-time tracking testing, open the public URL (provided by ngrok) on your phone.

## Tech Stack

- **Backend:** Node.js, Express
- **Real-Time Communication:** Socket.io
- **Frontend:** EJS, HTML5, CSS3, Vanilla JavaScript (ES6 Modules)
- **Mapping:** Leaflet
- **Animations:** Lottie-web
- **Utilities:** Geolocation API

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/prashantsaini1525/RealTime-Tracker.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd RealTime-Tracker
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Set Up Environment Variables:**

- Create a .env file in the root directory and add:

  ```bash
  PORT=3000
  # Add other sensitive keys if needed
  ```

5. **Run the Application:**

- Start the development server using:

  ```bash
  npm start
  # or
  npx nodemon app.js
  ```

- The application will be available at http://localhost:3000.

## Usage

Once you have the server running, use the following guidelines to test and interact with the app:

1. **Open the App Locally:**

   - Visit [http://localhost:3000](http://localhost:3000) on your desktop browser.

2. **Expose Your Server with ngrok:**

   - Use ngrok to expose your local server:
     ```bash
     ngrok http 3000
     ```
   - Use the provided public URL to access the app from other devices, like your mobile phone.

3. Open the App on Multiple Devices

   - On Your Mobile Device:
   Open the ngrok URL in your mobile browser.

   - On Your Desktop:
   Open another browser window or tab and visit the same ngrok URL.

4. **Simulate Geolocation (Desktop):**

    Using Chrome DevTools (Desktop)

      1. Open Chrome Developer Tools.

      2. Navigate to **More Tools > Sensors**.

      3. Under **Geolocation**, select **Custom location…** and enter specific coordinates.

      - For instance, you can copy the accurate coordinates from your mobile device.

      4. Verify the coordinates appear correctly in the console (using console.log in your geolocation callback).

      5. **Testing Real-Time Updates:**
        - Open the app on multiple devices (or multiple Chrome profiles).
        - Verify that location updates are broadcasted and that markers on the map are updated in real time.

    Remote Debugging Your Mobile Device

      1. Connect your mobile device to your PC via USB.

      2. Open Chrome on your PC and navigate to chrome://inspect/#devices.

      3. Find and inspect the session running the ngrok URL from your mobile.

      4. In the mobile session’s Developer Tools, check the Console for the location coordinates.

      5. If necessary, copy these coordinates and update the desktop Chrome sensors to match.

    Important Note on Coordinate Accuracy:

      our script.js logs the coordinates for each device using:

      ```bash
      console.log("Client location:", latitude, longitude);

      ```


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

Contributions are welcome! If you have suggestions or improvements, please follow these steps:

1. **Fork the Repository:**  
   Click the "Fork" button on GitHub to create your own copy.

2. **Create a New Branch:**  
   Make a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature/YourFeatureName

   ```

3. **Commit Your Changes:**  
   Commit your modifications with clear and concise messages:

   ```bash
   git commit -m "Add detailed description of your changes"

   ```

4. **Push to Your Branch:**  
   Push your changes to your forked repository:

   ```bash
   git push origin feature/YourFeatureName

   ```

5. **Submit a Pull Request:**
   Open a pull request with a detailed explanation of your changes. For major changes, open an issue first to discuss your ideas.

Thank you for contributing!

## License

This project is licensed under the [MIT License](LICENSE).
