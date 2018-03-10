import { 
  CHOOSE_WORD, 
  LEARNING_MEME, 
  USER, 
  WRITE_SENTENCE,
  GUESS_WORD,
} from '../constants'

export function getInstructions(name: string): string {
  switch (name) {
    case CHOOSE_WORD:
      return 'Use arrows to make a selection'
    case GUESS_WORD:
      return 'Use related words to guess the masked word'
    case LEARNING_MEME:
      return 'Guess the masked word'
    case WRITE_SENTENCE:
      return 'Write the hidden words'
    case USER:
      return 'Register or login'
    default:
      return ''
  }
}
