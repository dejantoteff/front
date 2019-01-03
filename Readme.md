# Front

Frontend code of I Learn Smarter project - https://ilearnsmarter.com

## Levels of difficulty

> LearningMeme

- http://localhost:8080/learning-meme?easier?easiest?random

## Accept speech

- http://localhost:8080/learning-meme?mic

### Pause acts as auto click to shared.next

- http://localhost:8080/learning-meme?mic?pause=2

## Lock keypress to correct char

- http://localhost:8080/write-sentence?lock

## Write Sentence Auto mode

- http://localhost:8080/write-sentence?auto=2

- http://localhost:8080/write-sentence?auto=2?pause=10

Each step is 2 seconds and it pauses for 10s at the end of each sentence.

- http://localhost:8080/write-sentence?auto=0.3?pause=0.5

It works with decimals

## Easy mode

- http://localhost:8080/write-sentence?auto=2?easier?random

## Passing id

- http://localhost:8080/write-sentence?id=you-ready-new-something

- http://localhost:8080/write-sentence?id=you ready new something

There is DB instance with alt tag 'you ready new something' and it will be placed ahead of other indexes. That won't happen if the instance doesn't pass the filters of the current application.

## Force mobile or desktop

- http://localhost:8080/write-sentence?big

- http://localhost:8080/write-sentence?small

---

## Select article

Click, after all questions are answered, leads emits shared next.

---

## Issues

- Upgrade of Driver.js leaves breaks the build

## TODO

### cram game alike

## Ignorable TODO

- all use base64

- learningmeme mobile app(custom keyboard containing all correct chars plus 5 that are not part of the answer)

- mobile learning meme implement own keyboard

- try react-fa https://github.com/andreypopp/react-fa

## Choose-word

- sentences with one letter words must be filtered out upon init