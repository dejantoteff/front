import { greater, switcher } from 'rambdax'
import styled, {keyframes} from 'styled-components'
import {
  IN,
  LARGE_MESSAGE,
  LARGE_MS,
  MEDIUM_MESSAGE,
  MEDIUM_MS,
  XXL_MESSAGE,
} from './constants'

const opacityIn = keyframes`
  from {
    opacity: 0;
  }
  
  to {
    opacity: 1;
  }
`

const opacityOut = keyframes`
  from {
    opacity: 1;
  }
  
  to {
    opacity: 0;
  }
`
function getOpacityAnimation(store): string{

  return switcher<string>(store.status)
    .is(IN, opacityIn)
    .default(opacityOut)
}

function getAnimationTime(store): string{

  return switcher<string>(store.ms)
  .is(greater(LARGE_MS), '0.9s')
  .is(greater(MEDIUM_MS), '0.7s')
  .default('0.4s')
}

function getOpacity(store): number{

  return switcher<number>(store.status)
    .is(IN, 1)
    .default(0)
}

function getLineHeight(store): string{

  return switcher<string>(store.message.length)
  .is(greater(XXL_MESSAGE), 1)
  .default('15vh')
}

function getPaddingTop(store): string{

  return switcher<string>(store.message.length)
  .is(greater(XXL_MESSAGE), '2vh')
  .default('0')
}

function getWidth(store): string{

  return switcher<string>(store.message.length)
  .is(greater(LARGE_MESSAGE), '94.5vw')
  .is(greater(MEDIUM_MESSAGE), '50vw')
  .default('25vw')
}

function getBackground(store): string{

  return switcher<string>(store.mode)
    .is('INFO', '#607D8B')
    .is('ERROR', '#d71729')
    .is('WARNING', '#f46f19')
    .default('#17B978')
}

function getFontColor(store): string{

  return switcher<string>(store.mode)
    .is('INFO', '#d8e6e7')
    .is('ERROR', '#F1F1F1')
    .is('WARNING', '#EFE891')
    .default('#212125')
}

export const Container = styled.div`
animation: ${getOpacityAnimation} ${getAnimationTime} linear;
opacity: ${getOpacity}; 
position: fixed;
top: 2vh;
font-size: 2.5vh;
right: 0.5vw;
line-height: ${getLineHeight};
padding-top: ${getPaddingTop};
padding-left: 2vw;
padding-right: 2vw;
width: ${getWidth};
background: ${getBackground};
color: ${getFontColor};
border: #132333 2px solid;
text-align: center;
height: 15vh;
z-index:9999;
`
