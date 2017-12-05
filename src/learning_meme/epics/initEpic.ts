import { delay } from 'rambdax'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { sharedInit } from '../../common'
import { LEARNING_MEME, LEARNING_MEME_INIT, LEARNING_MEME_INIT_READY, LEARNING_MEME_NEXT, SET_DB, SMALL_DELAY } from '../../constants'

export const initEpic = (
  action$: ActionsObservable<LearningMemeInitAction>,
  store,
): Observable<any> =>

  action$.ofType(SET_DB)
    .sample(action$.ofType(LEARNING_MEME_INIT))
    .switchMap(action => {

      return new Observable(observer => {
        observer.next(sharedInit(LEARNING_MEME))

        const db = store.getState().store.db

        observer.next({ type: LEARNING_MEME_INIT_READY, payload: db })

        delay(SMALL_DELAY).then(() => {
          observer.next({ type: LEARNING_MEME_NEXT })
          observer.complete()
        })
      })
    })
