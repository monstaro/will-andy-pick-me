var textBox = document.querySelector('#enterQuestion');
var answerButton = document.querySelector('#answerButton');
var newQuestion = document.querySelector('#question')
var clearButton = document.querySelector('#clear');
var newAnswer = document.querySelector('#answer');
var eightBall = document.querySelector('#eightBall');
var randomNum = Math.floor(Math.random() * 20)
var answersArray = ["It is certain",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
]

answerButton.addEventListener('click', showInput);
clearButton.addEventListener('click', clearBox);
window.addEventListener('load', function() {
    console.log('test')
    if (textBox.value = "") {
        answerButton.disabled = true;
    }
})
textBox.addEventListener('onkeyup', checkInput);


function checkInput() {
    if (textBox.value = "") {
        answerButton.disabled = true;
    } else {
        answerButton.disabled = false;
    }
}

function showInput() {
    eightBall.style.display = "none";
    newQuestion.innerText =
        `"${textBox.value}?"`;
    newAnswer.innerHTML = answersArray[randomNum];
    textBox.value = "";
    randomNum = Math.floor(Math.random() * 20)
}


function clearBox() {
    eightBall.setAttribute("style", "display: block;");
    newQuestion.innerHTML = "";
    newAnswer.innerHTML = "";
}