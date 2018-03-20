import * as io from 'socket.io-client';
import { type } from 'rambdax'

function toString(input){
  const inputType: any = type(input)

  if(inputType === 'String'){

    return inputType
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
const logSocket = io('http://localhost:4001')
let connected = false
let logConnected = false

let holder = []
let actionHolder = []

const log = console.log

console.log = (...input) => {
  log(...input)
  const normalizedInput = input.map(toString)

  if(connected){
    logSocket.emit('log', ...normalizedInput);
  }else if(holder.length < 5){
    holder.push(normalizedInput)
  }
}

socket.on('disconnect', ()=> {
  connected = false
  actionHolder = []
})

logSocket.on('disconnect', ()=> {
  logConnected = false
  holder = []
})

logSocket.on('connect', ()=>{
  logConnected = true

  if(holder.length > 0){
    holder.forEach(input => {
      logSocket.emit('log', ...input);
    })
  }
})

socket.on('connect', ()=>{
  connected = true

  if(actionHolder.length > 0){
    actionHolder.forEach(input => {
      socket.emit(
        'action', 
        JSON.stringify(input.action, null, 2), 
        JSON.stringify(input.state)
      )
    })
  }
})

export const logActionState = (action: Action, state: any) => {
  if(!connected && actionHolder.length < 10){
    actionHolder.push({action,state})

    return
  }

  socket.emit(
    'action', 
    JSON.stringify(action, null, 2), 
    JSON.stringify(state)
  )
}