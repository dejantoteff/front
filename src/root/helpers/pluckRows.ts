import { pluck, filter } from 'rambdax'
const MIN = 2

export function pluckRows(rows: any) {
  const plucked = pluck<DBInstance>('doc', rows)

  return filter((x: DBInstance) => {
    const first: boolean = typeof x.imageSrc === 'string' && x.imageSrc.length > MIN
    const second: boolean = typeof x.enPart === 'string' && x.enPart.length > MIN
    const third: boolean = typeof x.dePart === 'string' && x.dePart.length > MIN
    const fourth: boolean = typeof x.deWord === 'string' && x.deWord.length > MIN
    const fifth: boolean = typeof x.enWord === 'string' && x.enWord.length > MIN
    const sixth: boolean = typeof x.bgWord === 'string' && x.bgWord.length > MIN
    const seventh: boolean = typeof x.bgPart === 'string' && x.bgPart.length > MIN

    // return first && second && third && fourth && fifth && sixth && seventh
    return first && second && third && fourth && fifth
  }, plucked)
}
