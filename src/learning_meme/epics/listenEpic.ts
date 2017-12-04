import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { distanceGerman } from 'string-fn'
import { sharedAddPoints } from '../../common'
import { LEARNING_MEME_LISTEN } from '../../constants'
import { check, next, setInput } from '../actions'

export const listenEpic = (
  action$: ActionsObservable<LearningMemeListenAction>,
  store,
): Observable<any> =>

  action$.ofType(LEARNING_MEME_LISTEN)
    .switchMap(action => {

      return new Observable(observer => {

        const {
          listen,
        } = store.getState().learningMemeStore

        if (action.payload.key === 'Enter' && listen) {

          observer.next(check())

        } else if (listen) {

          observer.next(setInput(action.payload.target.value))

        } else {
          observer.next(next())
        }

        observer.complete()
      })
    })
