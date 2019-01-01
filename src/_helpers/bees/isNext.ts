const nextList = [
  'nächste',
  'tschüss',
  'next',
  'следващ',
]

export function isNextBee(spoken){
  return nextList.includes(spoken)
}
