import { NotifyInput } from 'notify'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { USER_REGISTER } from '../../../constants'

export const registerEpic = (
  action$: ActionsObservable<UserRegisterAction>,
  store: ObservableStore,
  { postRequest },
): Observable<any> =>
  action$
    .ofType(USER_REGISTER)
    .switchMap(action => new Observable(observer => {
      const url = `${process.env.NGROK_URL}/user-register`

      const notifyAction: NotifyInput = {
        payload: { message: `Sent validation email to ${action.payload.email}` },
        type: 'notify@INFO',
      }

      const result$ = postRequest(url, action.payload)

      result$.subscribe(result => {
        observer.next(notifyAction)
        observer.complete()
      })
    }),
  )
