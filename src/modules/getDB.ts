import { 
  head,
  filter, 
  once, 
  map, 
  last,
  prop
} from 'rambdax'

import { wordsX } from 'string-fn';

// const log = once(console.warn)

export const getDB = (input: GetDB): DataPattern[] =>{
  const {fromLanguage, toLanguage, db} = input

  const filterFn = (xInstance) => {
    try{
      const fromPart =xInstance[`${fromLanguage.toLowerCase()}Part`] 
      
      const fromWordRaw: string =xInstance[`${fromLanguage.toLowerCase()}Word`] 
      
      const fromWord: string = head(fromWordRaw.split(','))
      
      const fromWordBase: string = last(fromWord.split(' '))
    
      return wordsX(fromPart).includes(fromWordBase)
    }catch(err){
      console.warn(err)
    }
  }
  console.log(db);
  
  const filtered = filter(filterFn,db)
  console.log(filtered);
  
  const mapped = map((xInstance: any) => {
    const fromPart =xInstance[`${fromLanguage.toLowerCase()}Part`] 
    const toPart =xInstance[`${toLanguage.toLowerCase()}Part`] 
    const fromWord =xInstance[`${fromLanguage.toLowerCase()}Word`] 
    const toWord =xInstance[`${toLanguage.toLowerCase()}Word`] 
    const imageSrc = xInstance.imageSrc

    return {
        toWord,
        fromWord,
        imageSrc,
        toPart,
        fromPart,
      }
  }, filtered)

  return mapped
}

// const LOCATION =  `${__dirname}/db.json`

// const test = async () => {
// import { writeFileSync,readFileSync } from 'fs';

//   const dbRaw = JSON.parse(
//     readFileSync(LOCATION).toString()
//   )

//   const db = map(prop('doc'))(dbRaw.rows)

//   const dbValue = filter((x: any) => {
//     return prop('imageSrc', x) && prop('enPart', x) && prop('deWord', x) && prop('dePart', x)
//   })(db)

//   const toLanguage = 'EN'
//   const fromLanguage = 'DE'

//   const result = getDB({db: dbValue, fromLanguage,toLanguage})
//   return result
// }
