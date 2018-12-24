import { infoSteps } from './infoSteps'
import { pass, startsWith } from 'rambdax'

const schema = {
  element: startsWith('#'),
  popover: 'object'
}

test('', () => {
  // lm stands for Learning Meme
  ///////////////////////////
  const result = infoSteps('lm')
  expect(
    pass(result)([schema])
  ).toBe(true)
})