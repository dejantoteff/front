import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { USER_LOGIN } from '../../constants'
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
        console.log(action);
        const userDBName = snakeCase(action.payload.email)
        const url = `${process.env.COUCH_URL}/${userDBName}`
        
        const userDBCloud: any = new PouchDB(url, { skip_setup: true })
        
        userDBCloud.login(userDBName, action.payload.password)
          .then(({ok}) =>{
            if(ok){
              console.log(1);
              
              observer.next({type:'ff'})
              observer.complete()
            }
            console.log(1);
          })
          .catch(console.warn)

      })
    })
