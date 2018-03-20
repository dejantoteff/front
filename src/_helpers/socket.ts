import * as io from 'socket.io-client'
import { type } from 'rambdax'

function toString(input){
  const inputType: any = type(input)

  if(inputType === 'String'){

    return input
  }

  if(inputType === 'Null' || inputType === 'Undefined'){
    
    return inputType
  }

  if(inputType === 'Object' || inputType === 'Array'){

    return JSON.stringify(input, null, 2)
  }

  if(input.toString){
  
    return input.toString()
  }

  return inputType
}

const socket = io('http://localhost:4000')
let connected = false

let holder = []

const log = console.log

console.log = (...input) => {
  log(...input)
  const normalizedInput = input.map(toString)

  if(connected){
    socket.emit('log', ...normalizedInput);
  }else if(holder.length < 10){
    holder.push(normalizedInput)
  }
}

socket.on('disconnect', ()=> {
  connected = false
  holder = []
})

socket.on('connect', ()=>{
  connected = true

  if(holder.length > 0){
    holder.forEach(input => {
      socket.emit('log', ...input);
    })
  }
})
