import { findIndex, replace, shuffle } from 'rambdax'
import { putAhead } from './mini/putAhead'

function putAheadId(dbValue: any[], initAction: any){
  if (!initAction) { return dbValue }
  const altTag = replace(/-|%20/g, ' ' , initAction.payload)

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
  if (randomFlag) return shuffle(dbValue)

  return dbValue
}
