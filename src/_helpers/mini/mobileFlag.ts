import { getterAnt } from 'client-helpers'

const hash = {
  big: false,
  small: false,
}

export const mobileFlag = () => {
  const {big, small} = getterAnt(hash)
  if (window.outerWidth > 800){
    return !small
  }
  return !big
}
