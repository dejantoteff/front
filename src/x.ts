import * as io from 'socket.io-client';

const socket = io('http://localhost:4000');

socket.on('connect', onConnect);

function onConnect(){  
  socket.emit('foo', 'world');
  console.log('connect ' + socket.id);
}