import Room from './Room';
import Message from './Message';
import express = require('express');
import generateName from './namesGenerator';

const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require("socket.io")(server, { cors: { origin: "http://localhost:3501"}});
const cors = require("cors");

var corsOptions = {
  origin: "http://localhost:3501",
};

app.use(cors(corsOptions));

const room = new Room();

app.get('/public/login', (req, res) => {
    let username : string = generateName();
    res.status(200).send({username: username});
})

io.on('connection', (socket) => {
    socket.on('join', (name : string) => {
      room.newUserInRoom(name, socket.id);
      io.emit('new_join', room.getUsers());
    })
    
    socket.on('message', (msg) => {
        let message : Message = new Message(room.getUserNameById(socket.id), msg)
        io.emit('new_message', message)
      });

    socket.on('disconnect', () => {
      let userWhoLeft = room.userLeftTheRoom(socket.id);

      if(userWhoLeft){
        io.emit('new_leave', userWhoLeft.id);
      }
    });
  });

server.listen(3500, () => {
  console.log('listening on *:3500');
});
