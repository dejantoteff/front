import { pass } from 'rambdax'
import { parseLesson } from './parseLesson'

const input = `
# Third person

Трето лице **единствено число**
---
# Пример 1

Kate has[have][had] a nice[polite][expensive] smile.

> Кейт има хубава усмивка.
---
# Кога завършваме с 's'

description of why we have such rules
It can contain a list:

- foo
- bar
---
# Пример 2

Kate used[had][need] to smoke but now she runs[run][ran] a lot instead.
`

test('', () =>{
  const result = parseLesson(input)
  
  result.forEach(x => {
    const okExample = pass(x)({title:'string', example:'string', translation:'string'})
    const okContent = pass(x)({title:'string', text:['string']})
    expect(okExample || okContent).toBeTruthy()
  })
})