export function takeInputBee(maybeInputValue){
  if (maybeInputValue.trim().length > 0) return maybeInputValue.trim()

  const input = document.getElementsByTagName('input')
  return input[0].value
}
