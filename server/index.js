const express = require("express");
const socketIO = require("socket.io");
const http = require("http");

const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

app.use(router);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server started at port ${PORT}`));
