function getInputStep(namespace, instruction){

  return {
    element: `#${namespace}_input`,
    popover: {
      title: 'Input field',
      description: instruction,
      position: 'bottom',
    },
  }
}

function getQuestionStep(namespace, instruction){

  return {
    element: `#${namespace}_question`,
    popover: {
      title: 'Question',
      description: instruction,
      position: 'bottom',
    },
  }
}

function getContextStep(namespace){

  return {
    element: `#${namespace}_context`,
    popover: {
      title: 'Context',
      description: 'This is a context to help you figure out the answer',
      position: 'bottom',
    },
  }
}

const learningMemeInput = getInputStep(
  'lm',
  'Here you can type your suggestion for the hidden word',
)
const learningMemeQuestion = getQuestionStep(
  'lm',
  'This is a hidden word that you need to guess correctly',
)
const learningMemeContext = getContextStep('lm')

const lm = [
  learningMemeQuestion,
  learningMemeContext,
  learningMemeInput,
]

const info = {
  lm,
}

export function infoSteps(namespace: string): object[]{

  return info[namespace]
}
