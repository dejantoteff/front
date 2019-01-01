import { findIndex, random, replace, reverse, shuffle } from 'rambdax'
import { putAhead } from './mini/putAhead'

function fiftyFifty(){
  return random(0, 1) === 1
}

function putAheadId(dbValue: any[], initAction: any){
  if (!initAction) { return dbValue }

  const altTag = replace(/-/g, ' ' , initAction.payload)
  const index = findIndex(
    dbInstance => (dbInstance).altTag === altTag,
    dbValue,
  )

  return putAhead(dbValue, index)
}

export function instanceDB(
    randomFlag: boolean,
    dbValue: any[],
    initAction?: any,
  ){
  if (randomFlag) { return putAheadId(shuffle(dbValue), initAction) }

  return fiftyFifty() ?
    putAheadId(dbValue, initAction)  :
    putAheadId(reverse(dbValue), initAction)
}
