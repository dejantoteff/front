const enter = 'Submit by simply pressing \'Enter\''

function input(namespace, instruction){

  return {
    element: `#${namespace}_input`,
    popover: {
      title: 'Input field',
      description: instruction,
      position: 'bottom',
    },
  }
}

function question(namespace, instruction){

  return {
    element: `#${namespace}_question`,
    popover: {
      title: 'Question',
      description: instruction,
      position: 'bottom',
    },
  }
}

function context(namespace){

  return {
    element: `#${namespace}_context`,
    popover: {
      title: 'Context',
      description: 'This is a context to help you figure out the answer',
      position: 'bottom',
    },
  }
}

function image(namespace){

  return {
    element: `#${namespace}_image`,
    popover: {
      title: 'Image',
      description: 'This is image related to the context',
      position: 'top',
    },
  }
}

function translated(namespace){

  return {
    element: `#${namespace}_translated`,
    popover: {
      title: 'Translation',
      description: 'Translation of the context section',
      position: 'top',
    },
  }
}

const lmInput = [
  {question: 'This is a hidden word that you need to guess correctly'},
  'context',
  {input: `This is a hidden word that you need to guess correctly.${enter}`},
  'image',
  'translated',
]

const generator = {
  input,
  image,
  question,
  context,
  translated,
}

function generateSteps(namespace, namespaceInput){

  return namespaceInput.map(singleInput => {
    if (typeof singleInput === 'string'){

      return generator[singleInput](namespace)
    }

    const [key, value] = Object.entries(singleInput)[0]

    return generator[key](namespace, value)
  })
}

const lm = generateSteps('lm', lmInput)
console.log(lm)
const info = {
  lm,
}

export function infoSteps(namespace: string): object[]{

  return info[namespace]
}
