import { media, mediaImportant } from './media'
import { glue } from 'rambdax'

test('media', () => {
  const result = media('grid-template-areas: "fiu fio";')
  const expected = glue(`@media (max-width: 800px) {
    grid-template-areas: "fiu fio";    
  }
  @media (max-height: 800px) {
    grid-template-areas: "fiu fio";
  }`)
  expect(result).toBe(expected)
})

test('mediaImportant', () => {
  const result = mediaImportant('grid-template-areas: "fiu fio";')
  const expected = glue(`@media (max-width: 2800px) {
    grid-template-areas: "fiu fio";    
  }`)
  expect(result).toBe(expected)
})
