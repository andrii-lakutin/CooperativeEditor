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

  socket.on('Request for running script', (script, room) => {
    runScript(script, room);
  });

  socket.on('File update', (info) => {
    socket.broadcast.to(info.room).emit('Someone update file', info.file);
  });

  socket.on('Request for editor value', (room) => {
    getEditorValue(room);
  });

  socket.on('File save', (info) => {
    onFileUpdate(info);
  });

  socket.on('Send chat message', (message, from, room) => {
    onChatMessage(message, from, room);
  });

  socket.on('Request for chat messages', (room) => {
    onMessagesRequst(room, socket);
  });

  socket.on('User leave room', () => {
    leaveRoom(socket.id);
  });

  socket.on('disconnect', () => {
    leaveRoom(socket.id);
  });
});

http.listen(process.env.PORT || 3000, () => {
  console.log(`App listening on port ${process.env.PORT || 3000}!`);
});

function runScript(script, room) {
  let exec = require('child_process').exec;
  let childProcess = exec(`babel-node --presets es2015 -e "${script}"`, function(error, stdout, stderr){
    io.to(room).emit('Script run finished', stdout, stderr);
    childProcess.kill();
  });
}

function onChatMessage(content, from, room) {
  Room.findOneAndUpdate(
    {
      name: room
    },
    { 
        $push: { 
          chatMessages: { 
            from,
            content
          } 
        }
    })
  .exec((err,data) => {
    if (err) {
      console.log('Mongo push message error');
    }
    io.to(room).emit('New chat message', from, content);
  });
}

function joinRoom(info, socket) {
  Room.find({name: info.roomName}).exec((err,data) => {
      if (err) {
        console.log('Mongo find error');
      } else {
        if (data.length) {
          pushToRoom(info, socket);
          joinSocket(info, socket);
        } else {
          createRoom(info, socket);
        }  
      }
  });
};

function createRoom(info, socket) {
  let newRoom = new Room({
    name: info.roomName,
    users: [{
      nick: info.nickname,
      socketId: socket.id
    }], 
    editorValue: ''
  });

  newRoom.save((err, room) => {
    if (err) return console.error('Mongo save error', err);
    console.log('New room created, name & id:', room.name, room._id);
    joinSocket(info, socket);
  });
};

function joinSocket(info, socket) {
  socket.join(info.roomName);
  socket.broadcast.to(info.roomName).emit('Someone has been joined to the room', info);
  console.log(`Socket ${socket.id} joined as ${info.nickname} to ${info.roomName}`);
};

function leaveRoom(id, room) {
  Room.findOneAndUpdate(
    {
      users: {
        $elemMatch: {
          socketId: id
        }
      }
    },
    { 
        $pull: { 
          users: { 
            socketId: id
          } 
        }
    })
  .exec((err,room) => {
    if (err) {
      console.log('Mongo update error');
    } else {
      if (room) {
        console.log(`Socket ${id} leave ${room.name}`);
      }
    }
  });
}

function pushToRoom(info, socket) {
  Room.findOneAndUpdate(
    {
      name: info.roomName
    },
    { 
        $push: { 
          users: { 
            nick: info.userNickname,
            socketId: socket.id
          } 
        }
    })
  .exec((err,room) => {
    if (err) {
      console.log('Mongo update error');
    }
  });
}

function onFileUpdate(info) {
  Room.findOneAndUpdate(
    {
      name: info.room
    },
    { 
      editorValue: info.file
    })
  .exec((err,room) => {
    if (err) {
      console.log('Mongo update error');
    } else {
      if (room) {
        // console.log(`Editor in ${room.name} saved.`);
      }
    }
  });
}

function getEditorValue(roomName) {
  Room.findOne({name: roomName}).exec((err,room) => {
      if (err) {
        console.log('Mongo find error');
      } else {
        if (room) {
          io.to(roomName).emit('Someone update file', room.editorValue);
        }
      }
  });
}

function onMessagesRequst(roomName, socket) {
  Room.findOne({name: roomName}).exec((err,room) => {
      if (err) {
        console.log('Mongo find error');
      } else {
        if (room) {
          socket.emit('Initial chat messages', room.chatMessages);
        }
      }
  });
}