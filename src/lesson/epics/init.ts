import { multiline,remove } from 'rambdax'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { LESSON_INIT } from '../../constants'
import { initReady } from '../actions'
import { parseLesson } from '../../_helpers/parseLesson';

const data = [
  {title: 'Third person', text: 'Трето лице <strong>единствено</strong> число'},
  {
    title: 'Пример 1', 
    example:'Kate has[have][had] a nice[polite][expensive] smile.', 
    translation:'Кейт има хубава усмивка.'
  },
  {title: "Кога завършваме с 's'", text: `description of first
  <ol>
    <li>foo</li>
    <li>bar</li>
    <li>baz</li>
  </ol>`},
  {title: "Кога не завършваме с 's'", text: `description of second`},
  {
    title: 'Пример 2', 
    example:'Kate could have[has][had] a nice smile.', 
    translation:'Кейт би могла да има хубава усмивка.'
  },
  {
    title: 'Общ пример 1',
    example:'When she was in Paris, she saw[sees][see] the Eiffel tower.',
    transation: 'Когато тя бе в Париж ...'
  }
]

async function getURL(url: string) {
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
    ${remove('lesson-',tag)}.md
  `,'/')
  const response = await getURL(url)
  const data = parseLesson(response)

  return initReady(data)
}

function asyncWrapper(fn){
  return (...inputs) => Observable.fromPromise(
    fn(...inputs)
  )
}

const getData = (tag) => Observable.fromPromise(
  getDataFn(tag),
)

export const initEpic = (
  action$: ActionsObservable<LessonInitAction>,
  store: ObservableStore,
): Observable<Action> =>
  action$
    .ofType(LESSON_INIT)
    .switchMap( ({payload}) => getData(payload) )