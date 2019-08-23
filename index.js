var textBox = document.querySelector(#enterQuestion);
var answerButton = document.querySelector(#answerButton);
var eightBall = document.querySelector(#eightBall);
var newAnswer = document.querySelector(#answer)
var clearButton = document.querySelector(#clear);

answerButton.addEventListener(click, function showInput () {

  document.querySelector(#answer).innerText =
  document.querySelector(#textBox).value;
})
//
// function showInput () {
//
//   document.querySelector(#answer) =
//   document.querySelector(#textBox);
// }
