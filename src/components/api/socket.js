import { io } from "socket.io-client";

const socket = io.connect()

socket.on('connect', () => {
  socket.on('greetings', (data) => {
    console.log(data)
  })
})

export default socket
