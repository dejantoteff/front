import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { USER_LOGIN, POUCH_USER_READY } from '../../constants'
import {snakeCase} from 'string-fn'
import { getPouchDB } from '../../modules/getPouchDB'

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
              console.log(err, 'error.sync.user')
              observer.complete()
            })

            sync.on('change', change => {
              console.log(change, 'change.user')
            })

            
            userDBCloud.get('data').then((doc)=> {

              console.log(doc);
              
              const actionToDispatch: PouchUserReadyAction = {
                type: POUCH_USER_READY,
                payload: {
                  points: doc.points,
                  userDB: userDBLocal,
                }
              }

              observer.next(actionToDispatch)
            })

          })
          .catch(console.warn)

      })
    })
