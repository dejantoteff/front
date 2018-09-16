import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { LESSON_INIT } from '../../constants'
import { initReady } from '../actions'

const data = [
  {
    title: 'Пример 1', 
    example:'Kate has[have][had] a nice[polite][expensive] smile.', 
    translation:'Кейт има хубава усмивка.'
  },
  {title: 'Third person', text: 'Трето лице <strong>единствено</strong> число'},
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

async function getDataFn(){
  return initReady(data)
}

const getData = () =>Observable.fromPromise(
  getDataFn(),
)

export const initEpic = (
  action$: ActionsObservable<LessonInitAction>,
  store: ObservableStore,
): Observable<Action> =>
  action$
    .ofType(LESSON_INIT)
    .switchMap( () => getData() )