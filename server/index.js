const express = require('express');
const app = express();

const io = require('socket.io')(3000, {
  cors: {
    origin: ['http://localhost:8080']
  }
});

io.on('connection', socket => {
  console.log(socket.id);
});

app.use(express.static('client/dist'));

app.listen(8080, () => {
  console.log('server listening on port ' + 8080);
});