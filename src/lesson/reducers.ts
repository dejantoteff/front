import { LESSON_INIT_READY } from '../constants'
const initialState = {
  ready: false,
  "isExample": false,
  "currentIndex": 0,
  "currentStep": {},
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
      currentStep: action.payload[0],
      steps:action.payload
    }
    default:
      return state
  }
}