import { omit, pick } from 'rambdax'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { snakeCase } from 'string-fn'
import { POUCH_USER_READY, USER_LOGIN, POUCH_USER_CHANGE } from '../../constants'

export const loginEpic = (
  action$: ActionsObservable<UserLoginAction>,
  store,
  { postRequest, getPouchDB },
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
          .then(({ ok }) => {

            if (!ok) {

              observer.complete()
            }

            const userDBLocal: any = new PouchDB(
              userDBName,
              { skip_setup: true },
            )

            const syncOptions = { live: true, retry: true }
            const sync = PouchDB.sync(userDBName, userDBCloud, syncOptions)

            sync.on('error', err => {
              console.log(err, 'error.sync.user')
              observer.complete()
            })

            sync.on('change', change => {
              
              userDBCloud.get('data').then(doc => {
                
                const actionToDispatch = {
                  payload: {data:  omit('_id,_rev', doc)},
                  type: POUCH_USER_CHANGE,
                } 

                observer.next(actionToDispatch)
              })

            })

            userDBCloud.get('data').then(doc => {

              const actionToDispatch: PouchUserReadyAction = {
                payload: {
                  data: omit('_id,_rev', doc),
                  userDB: userDBLocal,
                },
                type: POUCH_USER_READY,
              }

              observer.next(actionToDispatch)
            })

          })
          .catch(err => {
            console.warn(err)
            observer.complete()
          })

      })
    })
