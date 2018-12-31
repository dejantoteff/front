import { putAhead } from './putAhead'

test('happy', () =>{
  const result = putAhead([1,2,3,4], 3)
  const expectedResult = [4,2,3,1]

  expect(
    result
  ).toEqual(expectedResult)
})

test('index is -1', () =>{
  const result = putAhead([1,2,3,4], -1)
  const expectedResult = [2,3,1,4]

  expect(
    result
  ).toEqual(expectedResult)
})