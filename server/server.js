const express = require("express");
const cors = require("cors");

// app express
const app = express();
const http = require("http").Server(app);

// PORT
const PORT = 3001;
// socket IO
const socketIO = require("socket.io")(http, {
  // REACT CONNECTION
  cors: {
    origin: `http://localhost:3000`,
  },
});

// socket generates unique ID for each socket, when user visits website
socketIO.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);
  socket.on("disconnect", () => {
    console.log("🔥: A user disconnected");
  });
});

app.get("/", (req, res) => {
  res.json({
    message: "hello world app!",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
