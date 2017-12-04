import { WRITE_SENTENCE_INIT_READY, WRITE_SENTENCE_READY, WRITE_SENTENCE_SET_INPUT, WRITE_SENTENCE_SET_NEXT } from '../constants'

const initialState = {
  ready: false,
}

export function writeSentenceStore(
  state: WriteSentenceStore = initialState,
  action: Action,
): WriteSentenceStore {

  switch (action.type) {
    case WRITE_SENTENCE_INIT_READY:
    return {
      ...state,
      currentIndex: -1,
      db: action.payload,
    }
    case WRITE_SENTENCE_READY:
      return {
        ...state,
        ready: true,
      }
    case WRITE_SENTENCE_SET_INPUT:
      return {
        ...state,
        inputState: action.payload,
      }  
    case WRITE_SENTENCE_SET_NEXT:
      return {
        ...state,
        index: 0,
        question: action.payload.question,
        currentIndex: action.payload.currentIndex,
        currentInstance: action.payload.currentInstance
      }  
    default:
      return state
  }
}
