const server = require('http').createServer()
const io = require('socket.io')(server)
const {log} = require('log')
const xMode = process.argv[2] === '--x'

let counter = 0

const separator = Array(70).fill('=').join('')

const getTag = () => {
  if(counter === 2){
    counter = 0
  }

  return {
    sepTag: `tag=sep${counter}`,
    logTag: `tag=log${counter}`,
  }
} 

io.on('connection', client => {
  client.on('log', (...input) => {
    if(input[0] === 'REDUX' && !xMode){
      
      return
    }
    
    const {
      sepTag,
      logTag
    } = getTag()
    
    log(...input, logTag)
    log(separator, sepTag)

    counter++
  })
})

server.listen(4000)
