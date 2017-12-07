import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { WRITE_SENTENCE_LISTEN } from '../../constants'
import { check, next, setInput } from '../actions'

export const listenEpic = (
  action$: ActionsObservable<WriteSentenceListenAction>,
  store,
): Observable<any> =>

  action$.ofType(WRITE_SENTENCE_LISTEN)
    .switchMap(action => {

      return new Observable(observer => {

        const { listen } = store.getState().writeSentenceStore

        if (action.payload === 'SPACE' && listen) {

          observer.next(check())

        } else if (listen) {

          observer.next(setInput(action.payload))

        } else {
          observer.next(next())
        }

        observer.complete()
      })
    })
