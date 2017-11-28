import { ActionsObservable, combineEpics, Epic } from 'redux-observable'
import { Observable as ObservableType } from 'rxjs'
import { Observable } from 'rxjs/Observable'
import { DATA_READY, DB_DEV_URL, INIT } from '../../constants'

import { delay } from 'rambdax'

import * as PouchDBLib from 'pouchdb'
const PouchDB: Pouch = (PouchDBLib as any).default

PouchDB.plugin(require('pouchdb-authentication'))

const work: Work = async () => {
  console.log('work')

  const DB = 'db'
  const url = `${process.env.COUCH_URL}/${DB}`
  const dbLocal = new PouchDB(DB, { skip_setup: true })
  const dbCloud: any = new PouchDB(url, { skip_setup: true })

  return {
    dbCloud: dbCloud,
    dbLocal: dbLocal,
    dbName: DB,
    dbURL: url,
  }
}

const work$ = Observable.fromPromise(work())

export const initEpic = (
  action$: ActionsObservable<Init>,
  store,
  { getRequest },
): ObservableType<any> =>
  action$
    .ofType(INIT)
    .concatMap(action => {
      return new Observable(observer => {
        work$.subscribe((workOutput: WorkOutput) => {
          const { dbName, dbURL, dbLocal, dbCloud } = workOutput
          const opts = {
            live: true,
            retry: true,
          }

          observer.next({ type: 'POUCH_READY', payload: { dbLocal, dbCloud } })

          PouchDB.sync(dbName, dbURL, opts)
            .on('change', change => {
              console.log(change, 'change')
              if (change.direction === 'pull') {
                console.log('PULL')
                observer.next({ type: 'CHOOSE_WORD_INIT', payload: '' })
              }
            })
            .on('active', () => {
              console.log('active sync')
            })
            .on('denied', err => {
              console.log(err, 'denied sync')
            })
            .on('complete', info => {
              console.log(info, 'complete sync')
            })
            .on('error', err => {
              console.log(err, 'error sync')
              observer.complete()
            })

        })
      })
    })
