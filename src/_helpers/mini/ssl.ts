import { replace } from 'rambdax'

export function ssl(input: string){
  if (input.startsWith('https:')) { return input }

  return replace('http:', 'https:', input)
}
