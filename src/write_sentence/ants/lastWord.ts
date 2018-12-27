export function lastWordAnt(){
  const container = document.getElementById('ws_answer')
  const last = container.querySelectorAll('span:last-child')[0]

  return window.getComputedStyle(last).visibility === 'visible'
}