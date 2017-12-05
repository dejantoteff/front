# Front

Frontend code of I Learn Smarter project - https://ilearnsmarter.com

## Generalization

- currentIndex - used to loop through the list of `DBInstance`   

---

### General

> X -> Y

No need to do that on admin panel, as dbSource will be edited of language direction changes.

### Choose-word

- sentences with one letter words must be filtered out upon init

---
## Logic

### Use xInstance to loop over x list 

### Use *Result to name result of a function call

```
const maskSentenceResult = maskSentence(x)
```

### Use *Raw when variable need normalization

```
const xRaw = await getData()
const x = R.produce(produceFn, xRaw)
```

> use *Value if you need one more step of normalization
 
### Use BASE__x--container BASE__X BASE__X--item Grid pattern

BASE__X--container contains grid-area to connect to the upper grid.

BASE__X contains specific specific cell properties. It could be also new grid.

BASE__X--item contains final touches. It could contain grid-area if BASE__X is a grid.

### Use *Module when exported method and library method match

Example:
```
import {
  maskSentence as maskSentenceModule,
} from 'string-fn'

export function maskSentence(input: string): string[] {
  const {
    hidden,
    visible,
  } = maskSentence(input)

  return hidden
}

```

### Payload as any vs Payload as object

If action payload pass just a single value, then it is not needed to be wrapped inside an object.

### Ready vs Active

Both flags are used, while it makes sense to use only one of them, as they are too similar.

Ready is used in single application to indicate that rendering can happen.

Active is used in the context of navigation, but it could be used for Carrier flags, such as `text-to-speech`.