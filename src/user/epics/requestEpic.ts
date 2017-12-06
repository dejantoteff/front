import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { USER_REQUEST_LOGIN, USER_REQUEST_REGISTER } from '../../constants'
import {NotifyInput} from 'notify'

export const requestEpic = (
  action$: ActionsObservable<UserSubmitAction>,
  store,
  { postRequest },
): Observable<any> =>

  action$
    .ofType(USER_REQUEST_REGISTER, USER_REQUEST_LOGIN)
    .switchMap(action => {
      return new Observable(observer => {
        const url = `${process.env.NGROK_URL}/user-register`
        
        const notifyAction: NotifyInput = {
          type:'NOTIFY_INFO',
          payload:{message:`Sent validation email to ${action.payload.email}`}
        }

        const result$ = postRequest(url, action.payload)
        
        result$.subscribe(result => {
          console.log(result.status);
          observer.next(notifyAction)
          observer.complete()
        })

      })
    })
