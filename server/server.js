const express = require("express");

// app express
const app = express();
const http = require("http").Server(app);
const cors = require("cors");

// PORT
const PORT = 3001;
// list of users
let users = [];
// socket IO
const socketIO = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
  },
});

// socket generates unique ID for each socket, when user visits website
socketIO.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);

  // listen for message, get data (username, id, text)
  socket.on("message", (data) => {
    console.log("User interaction sending data", data);
    socketIO.emit("messageResponse", data);
  });
  socket.on("newUser", (data) => {
    users.push(data);
    socketIO.emit("newUserResponse", users);
  });
  socket.on("disconnect", () => {
    console.log(`🔥: A user disconnected: ${socket.id}`);
    users = users.filter((user) => {
      user.socketID !== socket.id;
    });
    socketIO.emit("newUserResponse", users);
    socket.disconnect();
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
