import express from 'express';
import httpModule from 'http';
import socket from 'socket.io';
import fallback from 'express-history-api-fallback';
//db
import db from './db.js';
import User from "./schemas/user";

let app = express();
let http = httpModule.Server(app);
let io = socket(http);

const root = __dirname + '/../dist';
app.use(express.static(root));
app.use(fallback('index.html', {root}));

io.on('connection', (socket) => {
  console.log('New connection detected!');
  socket.on('Request for joining room', (info) => {
    socket.join(info.room);
    io.to(info.room).emit('Someone has been joined to the room', info);
    console.log(`${info.nick} joined to ${info.room}`);
  });
});

http.listen(3000, () => {
  console.log('App listening on port 3000!');
});