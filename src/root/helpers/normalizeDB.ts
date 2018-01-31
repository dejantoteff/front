import { pluck, filter } from 'rambdax'
const MIN = 2

export function normalizeDB(input: any): DBInstance[]{
  const plucked = pluck<DBInstance>('doc', input)

  return filter((x: DBInstance) => {
    const first: boolean = typeof x.imageSrc === 'string' && x.imageSrc.length > MIN
    const second: boolean = typeof x.enPart === 'string' && x.enPart.length > MIN
    const third: boolean = typeof x.dePart === 'string' && x.dePart.length > MIN
    const fourth: boolean = typeof x.deWord === 'string' && x.deWord.length > MIN
    const fifth: boolean = typeof x.enWord === 'string' && x.enWord.length > MIN

    return first && second && third && fourth && fifth
  }, plucked)
}