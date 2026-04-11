let io;

const initSocket = (server) => {
  const { Server } = require("socket.io");

  io = new Server(server, {
    cors: { origin: "*" }
  });

  io.on("connection", (socket) => {
    console.log("🔌 Connected:", socket.id);

    socket.on("sendMessage", (msg) => {
      io.emit("receiveMessage", msg);
    });
  });
};

const getIO = () => io;

module.exports = { initSocket, getIO };