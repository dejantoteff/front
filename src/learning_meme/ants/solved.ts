export function solvedAnt(){
  const el = document.querySelector('span.fromWord')

  return !el.textContent.includes('_')
}
