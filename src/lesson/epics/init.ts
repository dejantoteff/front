import { glue, remove } from 'rambdax'
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

async function getDataFn(tag: string){
  const url = glue(`
    https://gl.githack.com
    dejantoteff
    lessons
    raw
    master
    ${remove('lesson-', tag)}.md
  `, '/')

  const lesson = await getLesson(url)

  return initReady(parseLesson(lesson))
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
