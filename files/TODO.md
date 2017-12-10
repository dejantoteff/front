- pm2 start generate the 'data' document so client can use it straight away

- Auth cookie

- Solve dependencies in separate file, which index.tsx requests

# User story

- pm2-start service host it

- Send email to confirm

- Store confimation token in expiring Redis

---

- clear typecheck warnings

- autofocus

- font awesome

> cogs

- random order settings

- toggle text-to-speak

- media queries

- change language direction

- Carrier component

- X->Y support

- Session points

- props: any

- e2e test on 8080

- Cannot read property 'dePart' of undefined, because choose_word epic doesn't assure that db sync is active.

- common webpack config

- webpack analyze

- choose word alt - one word from the sentence is answer to question with 3 options

- learningmeme mobile app(custom keyboard containing all correct chars plus 5 that are not part of the answer)

- use placeholder images where only images are missing from being sentence complete

- mobile learning meme implement own keyboard

- ils - cram game alike

### ils - dictation with speech recognition

- use as input for learningMeme and co

- dictation accuracy app

### ils - each app is used as imported module

each app is used as npm module and we also have a carrier module, that show/minimize info, show/update score, receive bookmark request ....

so app modules emit only two actions 'NAME_OF_MODULE_UPDATE_SCORE' and 'SET_CURRENT_ID'

### als/die, der/die/das/den..,wenn/weil ChooseWordApp

```
var flagFirst = mightyWhileDas("\s(dem|den|des|der|die|das)\s", $scope.question)
var flagSecond = mightyWhile("\s(eines|einen|einem|einer|eine|ein)\s", ('ein'), flagFirst)
var flagThird = mightyWhile("\s(meines|meinen|meinem|meiner|meine|mein)\s", ('mein'), flagSecond)
var flagFourth = mightyWhile("\s(deines|deinen|deinem|deiner|deine|dein)\s", ('dein'), flagThird)
var flagFifth = mightyWhile("\s(seines|seinen|seinem|seiner|seine|sein)\s", ('sein'), flagFourth)
var flagSixth = mightyWhile("\s(ihrem|ihren|ihres|ihrer|ihre|ihr)\s", ('ihr'), flagFifth)
var flagEighth = mightyWhile("\s(unserem|unseren|unseres|unserer|unsere|unser)\s", ('unser'), flagSixth)
var flagNinth = mightyWhile("\s(eurem|euren|eures|eurer|eurere|euer)\s", ('euer'), flagEighth)
```