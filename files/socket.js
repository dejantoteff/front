const server = require('http').createServer()
const io = require('socket.io')(server)

const { type, debug } = require('rambdax')
const { log } = require('log')

io.on('connection', client => {
  client.on('log', (...input) => {
    log(...input, '')
  })

  client.on('action', (...input) => {
    console.log(...input)
  })
})

server.listen(4000)
