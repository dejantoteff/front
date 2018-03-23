import { has } from 'rambdax'
import { wordsX } from 'string-fn'

const dem = ['dem', 'den', 'des', 'der', 'die', 'das']
const einem = ['eines', 'einen', 'einem', 'einer', 'eine', 'ein']
const meinem = [ 'meines', 'meinen', 'meinem', 'meiner', 'meine', 'mein']
const deinem = ['deines', 'deinen', 'deinem', 'deiner', 'deine', 'dein']
const seinem = ['seines', 'seinen', 'seinem', 'seiner', 'seine', 'sein']
const ihrem = ['ihrem', 'ihren', 'ihres', 'ihrer', 'ihre', 'ihr']
const unserem = ['unserem', 'unseren', 'unseres', 'unserer', 'unsere', 'unser']
const eurem = ['eurem', 'euren', 'eures', 'eurer', 'eurere', 'euer']

const all: string[] = [
  ...dem,
  ...einem,
  ...meinem,
  ...deinem,
  ...seinem,
  ...ihrem,
  ...unserem,
  ...eurem,
]

function count(sentence: string): number{
  const words = wordsX(sentence)

  return words.reduce((prev, current) => {
    return all.includes(current) ?
      prev + 1 :
      prev
  }, 0)
}

export function filterSelectArticle(db: DBInstance[]): any {
  const hasDePart = db.filter(
    has('dePart'),
  )

  const filtered = hasDePart.filter(
    x => count(x.dePart) > 1,
  )

  return filtered
}
