import { glueRelated } from './glueRelated'

test('', () => {
  const input = [
    'foo',
    'bar',
    'baz',
    'grandeveour',
    'obnoixnousness',
    'when i leave my proven record',
    'loving yourself is hard when you suck',
    "that is precicely the point you don't jump unless",
    'having trouble recreating my dreams',
  ]

  const result = glueRelated(input)
  const expectedResult = [
    "that is precicely the point you don't jump unless | obnoixnousness | foo",
    'loving yourself is hard when you suck | when i leave my proven record',
  ]

  expect(
    result,
  ).toEqual(expectedResult)
})
