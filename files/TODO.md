- props: any

- Notify upon success/fail in user.form

- Auth cookie

- media queries

- change language direction

- X->Y support

- e2e test on 8080

- learningmeme mobile app(custom keyboard containing all correct chars plus 5 that are not part of the answer)

- mobile learning meme implement own keyboard

- ils - cram game alike

### ils - dictation with speech recognition

- use as input for learningMeme and co

- dictation accuracy app

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