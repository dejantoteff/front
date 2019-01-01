type InputLabels = 'next' | 'submit'

export function clickBee(label: InputLabels){
  document.getElementById(`icon_${label}`).click()
}
