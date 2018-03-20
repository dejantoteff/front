const server = require('http').createServer()
const io = require('socket.io')(server)

const { logActionState } = require('./socket')

io.on('connection', client => {
  client.on('action', logActionState)
})

server.listen(4000)
