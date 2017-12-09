import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { SHARED_ADD_POINTS, LONG_DELAY, POUCH_USER_READY } from '../../constants'

export const sharedAddPointsEpic = (
  action$: ActionsObservable<SharedAddPointsAction>,
  store,
): Observable<any> => {
  const user$ = action$.ofType(POUCH_USER_READY)
  const points$ = action$.ofType(SHARED_ADD_POINTS)

  const willListen = points$.concat(user$)

  return willListen.switchMap((action) => {
    
    return new Observable(observer => {
      const {userDB} = store.getState().userStore

      userDB.get('data').then((doc:any)=>{
        const points = doc.points + Number(action.payload)        
        const updatedDoc = Object.assign({}, doc, {points})
        
        userDB.put(updatedDoc).then(()=>{
          observer.complete()
        })
      })

    })
  })
  .debounceTime(LONG_DELAY)  
}
