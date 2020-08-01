const express = require("express");
const socketIO = require("socket.io");
const http = require("http");
const cors = require("cors");

const router = require("./router");

const { addUser, removeUser, getUser, getUsersInRoom } = require("./users.js");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(router);
app.use(cors());

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("admit", ({ name, room }, callback) => {
    console.log(name, room);

    const { error, user } = addUser({ id: socket.id, name, room });
    if (error) {
      return callback(error);
    }

    socket.emit("message", { user: "admin", text: `Welcome, ${user.name}!` });
    socket.broadcast.to(user.room).emit("message", {
      user: "admin",
      text: `We have a new hacker ${user.name} in the group!`,
    });

    socket.join(user.room);
    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit("message", { user: user.name, text: message });
    callback();
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit("message", {
        user: "admin",
        text: `${user.name} has left!`,
      });
    }
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server started at port ${PORT}`));
