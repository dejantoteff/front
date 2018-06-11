import { LESSON_INIT_READY, LESSON_NEXT } from '../constants'
import { getNextIndex } from '../_helpers/getNextIndex'
const initialState = {
  ready: false,
  "isExample": false,
  "currentIndex": 0,
  "currentStep": {},
  "steps": [],
}
  
export function lessonStore(
  state: LessonStore = initialState,
  action: Action,
): LessonStore {

  switch (action.type) {
    // STORE_SWITCH
    case LESSON_NEXT:
      return {
        ...state,
        currentIndex: getNextIndex({
          length: state.steps.length, 
          index: state.currentIndex
        }),
        currentStep: state.steps[
          getNextIndex({
            length: state.steps.length, 
            index: state.currentIndex
          })
        ],
      }
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