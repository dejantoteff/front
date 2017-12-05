import { WRITE_SENTENCE_INIT_READY, WRITE_SENTENCE_READY, WRITE_SENTENCE_SET_INPUT, WRITE_SENTENCE_SET_NEXT, WRITE_SENTENCE_STOP, WRITE_SENTENCE_SET_INDEX } from '../constants'

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
    case WRITE_SENTENCE_SET_INDEX:
      return {
        ...state,
        inputState: '',
        index: state.index+1,
      }  
    case WRITE_SENTENCE_STOP:
      return {
        ...state,
        listen: false,
        index: state.index+1,
        inputState: '',
      }  
    case WRITE_SENTENCE_SET_NEXT:
      return {
        ...state,
        index: 0,
        inputState: '',
        listen: true,
        question: action.payload.question,
        currentIndex: action.payload.currentIndex,
        currentInstance: action.payload.currentInstance
      }  
    default:
      return state
  }
}
