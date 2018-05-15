import { LESSON_INIT_READY } from '../constants'
const initialState = {
  ready: false,
  "isExample": false,
  "currentIndex": 0,
  "steps": {},
}
  
export function lessonStore(
  state: LessonStore = initialState,
  action: Action,
): LessonStore {

  switch (action.type) {
    // STORE_SWITCH
    case LESSON_INIT_READY:
    return {
      ...state,
      ready: true,
      steps:action.payload
    }
    default:
      return state
  }
}