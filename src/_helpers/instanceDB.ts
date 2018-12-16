import {random, reverse, shuffle } from 'rambdax'

function fiftyFifty(){
  return random(0, 1) === 1
}

export function instanceDB(randomFlag, dbValue){
  if (randomFlag) { return shuffle(dbValue) }

  return fiftyFifty() ?
    dbValue :
    reverse(dbValue)
}
