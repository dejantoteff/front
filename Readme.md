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

### Payload as any vs Payload as object

If action payload pass just a single value, then it is not needed to be wrapped inside an object.

### Ready vs Active

Both flags are used, while it makes sense to use only one of them, as they are too similar.

Ready is used in single application to indicate that rendering can happen.

Active is used in the context of navigation, but it could be used for Carrier flags, such as `text-to-speech`.