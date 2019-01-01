import { glue } from 'rambdax'

export function media(input: string){
  return glue(`
  @media (max-width: 800px) {
    ${input}
  }
  @media (max-height: 800px) {
    ${input}    
  }
  `)
}

export function mediaImportant(input: string){
  return glue(`
  @media (max-width: 2800px) {
    ${input}
  }
  `)
}
