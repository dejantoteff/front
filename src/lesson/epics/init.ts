import { multiline, remove } from 'rambdax'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { parseLesson } from '../../_helpers/parseLesson'
import { LESSON_INIT } from '../../constants'
import { initReady } from '../actions'

async function getLesson(url: string) {
  const result = await fetch(url, {
    method: 'GET',
  })

  return result.text()
}

async function getDataFn(tag){
  const url = multiline(`
    https://raw.githubusercontent.com
    dejantoteff
    lessons
    master
    ${remove('lesson-', tag)}.md
  `, '/')

  const lesson = await getLesson(url)

  return initReady(parseLesson(lesson))
}

function asyncWrapper(fn){
  return (...inputs) => Observable.fromPromise(
    fn(...inputs),
  )
}

const getData = tag => Observable.fromPromise(
  getDataFn(tag),
)

export const initEpic = (
  action$: ActionsObservable<LessonInitAction>,
  store: ObservableStore,
): Observable<Action> =>
  action$
    .ofType(LESSON_INIT)
    .switchMap(({payload}) => getData(payload))
