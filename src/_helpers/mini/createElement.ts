export function createElement(id){
  const element = document.createElement('div')
  element.setAttribute('id', id)
  document.body.appendChild(element)
}
