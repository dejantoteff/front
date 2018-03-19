import { filter, pluck } from 'rambdax'
const MIN = 2

export function normalizeDB(input: any): DBInstance[] {
  const plucked = pluck<DBInstance>('doc', input)

  return filter((x: DBInstance) => {
    const first = typeof x.imageSrc === 'string' && x.imageSrc.length > MIN

    const second = typeof x.enPart === 'string' && x.enPart.length > MIN

    const third = typeof x.dePart === 'string' && x.dePart.length > MIN
    const fourth = typeof x.deWord === 'string' && x.deWord.length > MIN
    const fifth = typeof x.enWord === 'string' && x.enWord.length > MIN

    return first && second && third && fourth && fifth
  }, plucked)
}
