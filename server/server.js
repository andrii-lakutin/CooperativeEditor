import express from 'express';
import httpModule from 'http';
import socket from 'socket.io';
import fallback from 'express-history-api-fallback';
//db
import db from './db.js';
import Room from "./schemas/room";

let app = express();
let http = httpModule.Server(app);
let io = socket(http);

const root = __dirname + '/../dist';
app.use(express.static(root));
app.use(fallback('index.html', {root}));

io.on('connection', (socket) => {
  console.log('New connection detected!');
  socket.on('Request for joining room', (info) => {
    joinRoom(info, socket);
  });

  socket.on('File update', (file) => {
    socket.broadcast.to(file.room).emit('Someone update file', file.file);
  });
});

http.listen(3000, () => {
  console.log('App listening on port 3000!');
});

function joinRoom(info, socket) {
  Room.find({name: info.name}).exec((err,data) => {
    console.log('Inside');
      if (err) {
        console.log('Mongo find error');
      } else {
        if (data.length) {
          joinSocket(info, socket);
        } else {
          createRoom(info, socket);
        }  
      }
  });
};

function createRoom(info, socket) {
  // TODO: Handle logout
  let newRoom = new Room({
    name: info.room,
    users: [info.nick], 
    editorValue: ''
  });

  newRoom.save((err, test) => {
    if (err) return console.error('Mongo save error', err);
    console.log('New room created, name & id:', test.name, test._id);
    joinSocket(info, socket);
  });
};

function joinSocket(info, socket) {
  socket.join(info.room);
  socket.broadcast.to(info.room).emit('Someone has been joined to the room', info);
  console.log(`${info.nick} joined to ${info.room}`);
};

