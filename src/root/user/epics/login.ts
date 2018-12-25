import { omit } from 'rambdax'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { snakeCase } from 'string-fn'
import { failLoginNotify, successLoginNotify } from '../../../_helpers/notify'
import { POUCH_USER_READY, USER_LOGIN } from '../../../constants'
import { saveCredentials } from '../_helpers/saveCredentials'

export const loginEpic = (
  action$: ActionsObservable<UserLoginAction>,
  store: ObservableStore,
  deps,
): Observable<any> =>
  action$
    .ofType(USER_LOGIN)
    .switchMap(action => new Observable(observer => {
      const PouchDB = deps.getPouchDB()
      const userDBName = snakeCase(action.payload.email)

      const url = `${process.env.COUCH_URL}/${userDBName}`
      const userDBCloud: any = new PouchDB(url, { skip_setup: true })

      userDBCloud
        .login(userDBName, action.payload.password)
        .then(({ ok }) => {

          if (!ok) {
            observer.next(failLoginNotify())

            return observer.complete()
          }

          saveCredentials(userDBName, action.payload.password)
          observer.next(successLoginNotify())

          userDBCloud.get('data')
            .then(doc => {
              const actionToDispatch: PouchUserReadyAction = {
                payload: {
                  data: omit('_id,_rev', doc),
                  userDBCloud: userDBCloud,
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
    }),
  )
