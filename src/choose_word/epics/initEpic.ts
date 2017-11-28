import { ActionsObservable, combineEpics, Epic } from 'redux-observable'
import { Observable as ObservableType } from 'rxjs'
import { Observable } from 'rxjs/Observable'
import { DATA_READY, DB_DEV_URL, INIT } from '../../constants'

import { delay } from 'rambdax'


import * as PouchDBLib from 'pouchdb'
const PouchDB: Pouch = (PouchDBLib as any).default

PouchDB.plugin(require('pouchdb-authentication'))

const work: Delay = async (x) => {
  console.log('work2');
  await delay(3000)
  const DB = 'db'
  const DRAFT = 'draft'
  const url = `${process.env.COUCH_URL}/${DB}`
  return url
}

const work$ = Observable.fromPromise(work(1))

export const initEpic = (
  action$: ActionsObservable<Init>,
  store,
  { getRequest },
): ObservableType<any> =>
  action$
    .ofType(INIT)
    .concatMap(action => {
      return new Observable(observer => {
        work$.subscribe(response =>{
          console.log(response,7);
          
        })
        console.log('initEpic chooseword')
        observer.next({ type: 'CHOOSE_WORD_INIT', payload: '' })
        observer.complete()
      })
    })
