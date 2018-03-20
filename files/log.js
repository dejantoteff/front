const server = require('http').createServer()
const io = require('socket.io')(server)
const {log} = require('log')
const {sepx} = require('./socket')

io.on('connection', client => {
  client.on('log', (...input) => {
    log('LOG', ...input, 'tag=log')
    sepx()
  })
})

server.listen(4001)
