const { Server } = require("socket.io");

const io = new Server({ /* options */ });

io.on("connection", (socket) => {
  socket.send("Hello!");

  // or with emit() and custom event names
  socket.emit("greetings", "Hey!");

  // handle the event sent with socket.send()
  socket.on("message", (data) => {
    console.log(data);
  });
});

const PORT = 80

io.listen(PORT);
console.log('listening on port:', PORT)