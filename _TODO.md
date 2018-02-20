# Current

- base64

- add description, synonyms to xWord and create app guestTheWord

- click on instruction opens detailed instructions

- click on flag icon notifies

- animations

- instead of translation use definitions API

---

## Can ignore

- learningmeme mobile app(custom keyboard containing all correct chars plus 5 that are not part of the answer)

- mobile learning meme implement own keyboard

- cram game alike

- dictation with speech recognition

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