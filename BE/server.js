const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "*"
    }
});

io.on("connection", (socket) => {

    socket.on("join-room", (room) => {

        socket.rooms.forEach(roomId => socket.leave(roomId))

        socket.join(room)
        console.log(socket.rooms)
    })

    socket.on("client-message", (content) => {
        io.to(content.roomId).emit("server-message", content)
    })

    socket.on("disconnect", (reason) => {

    })


});

httpServer.listen(8080);
