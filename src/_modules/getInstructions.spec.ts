import { CHOOSE_WORD } from '../constants'
import { getInstructions } from './getInstructions'

test('', () => {
  expect(typeof getInstructions('')).toBe('string')
})

test('', () => {
  expect(getInstructions(CHOOSE_WORD).length).toBeGreaterThan(0)
})
