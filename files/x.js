var server = require('http').createServer();
var io = require('socket.io')(server);

io.on('connection', function(client){
  client.on('event', function(data){
    console.log(data)
  });
  client.on('foo', function(data){
    console.log(1,data)
  });
  client.on('disconnect', function(){});
})

server.listen(4000)