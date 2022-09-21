const express = require("express");

// app express
const app = express();
const http = require("http").Server(app);
const cors = require("cors");

// PORT
const PORT = 3001;
// socket IO
const socketIO = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
  },
});

// socket generates unique ID for each socket, when user visits website
socketIO.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);
  socket.on("disconnect", () => {
    console.log(`🔥: A user disconnected: ${socket.id}`);
  });
});

app.get("/", (req, res) => {
  res.json({
    message: "hello world app!",
  });
});

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
