import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { USER_REGISTER } from '../../constants'
import {NotifyInput} from 'notify'

export const registerEpic = (
  action$: ActionsObservable<UserRegisterAction>,
  store,
  {postRequest}
): Observable<any> =>
  action$
    .ofType(USER_REGISTER)
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
