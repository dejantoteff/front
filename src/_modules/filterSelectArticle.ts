import { has, switcher, flip, includes, toLower } from 'rambdax'
const includesx = flip(includes)

import { wordsX } from 'string-fn'

const dem = ['der', 'die', 'das', 'den', 'dem', 'des']
const einem = ['eines', 'einen', 'einem', 'einer', 'eine', 'ein']
const meinem = [ 'meines', 'meinen', 'meinem', 'meiner', 'meine', 'mein']
const deinem = ['deines', 'deinen', 'deinem', 'deiner', 'deine', 'dein']
const seinem = ['seines', 'seinen', 'seinem', 'seiner', 'seine', 'sein']
const ihrem = ['ihrem', 'ihren', 'ihres', 'ihrer', 'ihre', 'ihr']
const unserem = ['unserem', 'unseren', 'unseres', 'unserer', 'unsere', 'unser']
const eurem = ['eurem', 'euren', 'eures', 'eurer', 'eurere', 'euer']

export function whichArticleSet(word: string): string[]{

  return switcher<string[]>(word)
    .is(includesx(dem), dem)
    .is(includesx(deinem), deinem)
    .is(includesx(einem), einem)
    .is(includesx(ihrem), ihrem)
    .is(includesx(meinem), meinem)
    .is(includesx(seinem), seinem)
    .is(includesx(unserem), unserem)
    .default(eurem)
}

export const allArticles: string[] = [
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
  const words = wordsX(sentence).map(toLower)

  return words.reduce((prev, current) => {

    return allArticles.includes(current) ?
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
