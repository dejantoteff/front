import { sortBy, pass } from 'rambdax'
import { questionListBee, wordListAnt } from './questionList'

const input = "used[had][need][want][require]"  
const schema = {
  correct: Boolean,
  text: String,
  status: ['ACTIVE']
}

test('word list', () => {
  const result = wordListAnt(input)
  const expected = [ 'used', 'had', 'need', 'want', 'require' ] 
  expect(result).toEqual(expected)
})

test('question list', () => {
  const result = questionListBee(input)
  result.forEach(singleResult => {
    expect(
      pass(singleResult)(schema)
    ).toBeTruthy()
  })
})


test('with two options', () => {
  const result = questionListBee('used[had]')

  const sorted = sortBy(
    x => x.text
  )(result)
  const expected = [ 
    { correct: false, text: '_', status: 'ACTIVE' },
    { correct: false, text: 'had', status: 'ACTIVE' },
    { correct: true, text: 'used', status: 'ACTIVE' },
  ]

  expect(sorted).toEqual(expected)
})
