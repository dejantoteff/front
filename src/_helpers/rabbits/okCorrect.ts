import { update } from 'rambdax'

export function okCorrectRabbit(state, payload) {

  return {
    ...state,
    okCorrect: update(state.index, payload, state.okCorrect),
  }
}
