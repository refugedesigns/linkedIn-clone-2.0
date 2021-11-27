let io;

module.exports = {
  init: (httpServer) => {
    io = require("socket.io")(httpServer, {
      allowEIO3: true,
      cors: {
        origin: "https://linkdedin-clone-2-0.vercel.app",
        methods: ["GET", "POST",],
        credentials: true
      }
    });
    return io;
  },
  getIO: () => {
    if (!io) {
      throw new Error("Socket connection failed.");
    }
    return io;
  },
};