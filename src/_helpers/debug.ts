import { getDB } from '../_modules/getDB'
const input: DBInstance = {
  dePart: 'Ein Tropfen Liebe ist mehr als ein Ozean an Wille und Verstand.',
  deWord: 'der Tropfen',
  enPart: 'A drop of love is more don\'t than an ocean of will and understanding.',
  enWord: 'drop, tear',
  bgPart: 'Някога е имало и по-добри времена',
  // bgWord: 'някога',
  bgWord: 'по-добри',
  imageSrc: 'https://i.imgur.com/MQt16IA.jpg',
  imageSrcOrigin: '',
}

export function appendToDB(db: DBInstance[]): DBInstance[] {
  return [input, ...db]
}

const x = getDB({
  db: [input],
  fromLanguage: 'BG',
  toLanguage: 'EN',
})
console.log(x)
