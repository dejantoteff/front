import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { USER_LOGIN, POUCH_SYNC_ERROR } from '../../constants'
import {snakeCase} from 'string-fn'
import { getPouchDB } from '../../modules/getPouchDB'
import { pouchUserReady } from '../actions'

export const loginEpic = (
  action$: ActionsObservable<UserLoginAction>,
  store,
  {postRequest, getPouchDB}
): Observable<any> =>
  action$
    .ofType(USER_LOGIN)
    .switchMap(action => {

      return new Observable(observer => {
        const PouchDB: Pouch = getPouchDB()
        console.log(action);
        const userDBName = snakeCase(action.payload.email)
        const url = `${process.env.COUCH_URL}/${userDBName}`
        
        const userDBCloud: any = new PouchDB(url, { skip_setup: true })
        
        userDBCloud
          .login(userDBName, action.payload.password)
          .then(({ok}) =>{
          
            if(!ok){
          
              observer.complete()
            }

            const userDBLocal: any = new PouchDB (
              userDBName, 
              { skip_setup: true }
            )

            const syncOptions = { live: true, retry: true }
            const sync = PouchDB.sync(userDBName, userDBCloud, syncOptions)

            sync.on('error', err => {
              console.log(err, 'error sync')
              observer.complete()
            })

            sync.on('change', change => {
              console.log(change, 'change.user')
            })

            observer.next(pouchUserReady(userDBLocal))

          })
          .catch(console.warn)

      })
    })
