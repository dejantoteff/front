import { CHOOSE_WORD } from '../constants'

export function getInstructions(name: string): string {
  switch (name) {
    case CHOOSE_WORD:
      return 'Use UP, DOWN and RIGHT arrow'
    default:
      return ''
  }
}
