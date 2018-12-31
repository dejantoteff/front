import { okCorrectRabbit } from './okCorrect'

test('okCorrectRabbit', () => {
  const state = {
    okCorrect: [null,null, null],
    index: 0
  }
  const expected = {
    okCorrect: [true,null, null],
    index: 0
  }
  const result = okCorrectRabbit(state, true)
  expect(result).toEqual(expected)
})

test('false as payload', () => {
  const state = {
    okCorrect: [null,null, null],
    index: 2
  }
  const expected = {
    okCorrect: [null, null, false],
    index: 2
  }
  const result = okCorrectRabbit(state, false)
  expect(result).toEqual(expected)
})
