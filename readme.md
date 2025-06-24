# Real-Time Location Tracker

A simple real-time location tracking web app using Node.js, Express, Socket.IO, Leaflet, and EJS.

## Features

- Tracks and shares user geolocation in real time.
- Displays all connected users' locations on a map.
- Automatically removes markers when users disconnect.

## Project Structure

```
app.js
package.json
public/
  css/
    style.css
  js/
    script.js
views/
  index.ejs
```

## Installation

1. **Clone the repository:**
   ```sh
   git clone <repository-url>
   cd REALTIME_TRACKER
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

## Usage

1. **Start the server:**
   ```sh
   node app.js
   ```

2. **Open your browser and visit:**
   ```
   http://localhost:3000
   ```

3. **Allow location access** when prompted.

4. **Open the app in multiple tabs/devices** to see real-time location updates.

## Technologies Used

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Socket.IO](https://socket.io/)
- [Leaflet](https://leafletjs.com/)
- [EJS](https://ejs.co/)

## License

ISC

---

**Note:** This app is for educational/demo purposes and does not implement authentication or secure location