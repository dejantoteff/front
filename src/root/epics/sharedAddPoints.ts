import { navy, pink, pink6 } from 'colors'
import { delay } from 'rambdax'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'

import { SHARED_ADD_POINTS } from '../../constants'
import { sharedAddPointsReady } from '../actions'

const ANIMATE = 700

const second = {
  ['animation-timing-function']: 'cubic-bezier(0.42, 0, 0.58, 1)',
  color: pink,
  opacity: 0.77,
  transform: 'scale3d(1.18, 1.18, 1.18)',
}
const third = {
  ['animation-timing-function']: 'cubic-bezier(0.42, 0, 0.58, 1)',
  color: pink6,
  opacity: 0.6,
  transform: 'scale3d(0.97, 0.97, 0.97)',
}
const fourth = {
  ...second,
  transform: 'scale3d(1.03, 1.03, 1.03)',
}
const startEnd = {
  ['animation-timing-function']: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  color: navy,
  opacity: 1,
  transform: 'scale3d(1, 1, 1)',
}

const animation = [
  startEnd,
  second,
  third,
  fourth,
  startEnd,
]

function animateStart() {
  const el: any = document.getElementById('points')
  el.animate(animation, {
    direction: 'normal',
    duration: ANIMATE,
    easing: 'ease-in',
    iterations: 1,
  })
}

export const sharedAddPointsEpic = (
  action$: ActionsObservable<SharedAddPointsAction>,
  store: ObservableStore,
): Observable<any> =>

  action$.ofType(SHARED_ADD_POINTS)
    .switchMap(action =>

      new Observable(observer => {
        const { userDBCloud, points, logged } = store.getState().store
        const newPoints = points + Number(action.payload)

        if (!logged) { localStorage.setItem('points', `${newPoints}`) }

        animateStart()

        delay(ANIMATE / 2)
          .then(() => {
            observer.next(sharedAddPointsReady(newPoints))

            if (userDBCloud === undefined) {
              return observer.complete()
            }

            userDBCloud
              .get('data')
              .then((doc: any) => {
                const updatedDoc = { ...doc, points }

                userDBCloud
                  .put(updatedDoc)
                  .then(observer.complete)
              })
              .catch(e => {
                console.error(e)
                observer.complete()
              })
        })
      }),
  )
