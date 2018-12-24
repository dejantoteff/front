const enter = 'Submit by simply pressing \'Enter\''

function input(namespace: string, instruction: string) {

  return {
    element: `#${namespace}_input`,
    popover: {
      description: instruction,
      position: 'bottom',
      title: 'Input field',
    },
  }
}

function question(namespace: string, instruction: string) {

  return {
    element: `#${namespace}_question`,
    popover: {
      description: instruction,
      position: 'bottom',
      title: 'Question',
    },
  }
}

function context(namespace: string) {

  return {
    element: `#${namespace}_context`,
    popover: {
      description: 'This is a context to help you figure out the answer',
      position: 'bottom',
      title: 'Context',
    },
  }
}

function image(namespace: string) {

  return {
    element: `#${namespace}_image`,
    popover: {
      description: 'This is image related to the context',
      position: 'top',
      title: 'Image',
    },
  }
}

function translated(namespace: string) {

  return {
    element: `#${namespace}_translated`,
    popover: {
      description: 'Translation of the context section',
      position: 'top',
      title: 'Translation',
    },
  }
}

const lmInput = [
  { question: 'This is a hidden word that you need to guess correctly' },
  'context',
  { input: `This is a hidden word that you need to guess correctly.${enter}` },
  'image',
  'translated',
]

const generator = {
  context,
  image,
  input,
  question,
  translated,
}

function generateSteps(namespace: string, namespaceInput: any[]) {

  return namespaceInput.map(singleInput => {
    if (typeof singleInput === 'string') {

      return generator[singleInput](namespace)
    }

    const [key, value] = Object.entries(singleInput)[0]

    return generator[key](namespace, value)
  })
}

const lm = generateSteps('lm', lmInput)

const info = {
  lm,
}

export function infoSteps(namespace: string): object[] {
  return info[namespace]
}
