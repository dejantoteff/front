import { CHOOSE_WORD, LEARNING_MEME, USER, WRITE_SENTENCE } from '../constants'

export function getInstructions(name: string): string {
  switch (name) {
    case CHOOSE_WORD:
      return 'Use UP, DOWN and RIGHT arrow'
    case LEARNING_MEME:
      return 'Guess the hidden word'
    case WRITE_SENTENCE:
      return 'Write the hidden words'
    case USER:
      return 'Register or login'
    default:
      return ''
  }
}
