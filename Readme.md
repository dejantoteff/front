# Front

Frontend code of I Learn Smarter project - https://ilearnsmarter.com

## Issues

- when home is application X and we move to the other X with navigation

- Upgrade of Driver.js leaves it not working

## TODO

- Notify upon language change

- base64

- animations

### als/die, der/die/das/den..,wenn/weil ChooseWordApp

```javascript
var flagFirst = mightyWhileDas("\s(dem|den|des|der|die|das)\s", $scope.question)
var flagSecond = mightyWhile("\s(eines|einen|einem|einer|eine|ein)\s", ('ein'), flagFirst)
var flagThird = mightyWhile("\s(meines|meinen|meinem|meiner|meine|mein)\s", ('mein'), flagSecond)
var flagFourth = mightyWhile("\s(deines|deinen|deinem|deiner|deine|dein)\s", ('dein'), flagThird)
var flagFifth = mightyWhile("\s(seines|seinen|seinem|seiner|seine|sein)\s", ('sein'), flagFourth)
var flagSixth = mightyWhile("\s(ihrem|ihren|ihres|ihrer|ihre|ihr)\s", ('ihr'), flagFifth)
var flagEighth = mightyWhile("\s(unserem|unseren|unseres|unserer|unsere|unser)\s", ('unser'), flagSixth)
var flagNinth = mightyWhile("\s(eurem|euren|eures|eurer|eurere|euer)\s", ('euer'), flagEighth)
```

- cram game alike

## Ignorable TODO

- learningmeme mobile app(custom keyboard containing all correct chars plus 5 that are not part of the answer)

- mobile learning meme implement own keyboard

- try react-fa https://github.com/andreypopp/react-fa

## Choose-word

- sentences with one letter words must be filtered out upon init
