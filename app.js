const express = require("express");
const path = require("path");
const http = require("http");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Set EJS as the view engine
app.set("view engine", "ejs");

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Socket.io connection handler
io.on("connection", (socket) => {
    console.log(`New client connected: ${socket.id}`);

    socket.on("send-location", (data) => {
        // Emit location data along with the sender's socket id
        io.emit("receive-location", { id: socket.id, ...data });
    });

    socket.on("disconnect", () => {
        console.log(`Client disconnected: ${socket.id}`);
        io.emit("user-disconnected", socket.id);
    });
});

// Render the index.ejs view on root request
app.get("/", (req, res) => {
    res.render("index");
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
