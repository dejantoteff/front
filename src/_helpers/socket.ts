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

const socket = io('http://localhost:4000');
let connected = false

let holder = []
let actionHolder = []

const log = console.log

console.log = (...input) => {
  log(...input)
  const normalizedInput = input.map(toString)

  if(connected){
    socket.emit('log', ...normalizedInput);
  }else if(holder.length < 5){
    holder.push(normalizedInput)
  }
}

socket.on('disconnect', ()=> {
  connected = false
  holder = []
  actionHolder = []
})

socket.on('connect', ()=>{
  connected = true
  console.log('connect ' + socket.id)

  if(holder.length > 0){
    holder.forEach(input => {
      socket.emit('log', ...input);
    })
  }
  
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
  );  
}