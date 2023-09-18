const express = require('express');
const app = express();

const messages = [];
const newClients = [];

const io = require('socket.io')(3000, {
  cors: {
    origin: ['http://localhost:8080']
  }
});

io.on('connection', socket => {
  io.to(socket.id).emit('recieve-all-messages', messages);

  socket.on('message', (message) => {
    messages.push(message);
    io.emit('recieve-message', message);
  });

});

app.use(express.static('client/dist'));

app.listen(8080, () => {
  console.log('server listening on port ' + 8080);
});