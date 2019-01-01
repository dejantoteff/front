import { getterAnt } from 'client-helpers'

const hash = {
  big: undefined,
  small: undefined,
}

export const mobileFlag = () => {
  const {big, small} = getterAnt(hash)
  console.log({big, small})
  if (big === true) { return false }
  if (small === true) { return true }
  console.log(window.outerHeight)

  return window.outerWidth < 800
}
