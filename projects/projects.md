
# Projects related to DOM

## Project 1: Color switcher Scheme
[Color switcher scheme](https://stackblitz.com/edit/dom-project-chaiaurcode-sl2n5w?file=1-colorChanger%2Findex.html)
```
const buttons = document.querySelectorAll('.button');
const body = document.body;

buttons.forEach((button) => {
  button.addEventListener('mouseover', (e) => { //mouseover , click
    // console.log(e);
    // console.log(e.target);

    if (e.isTrusted === true) {
      body.style.backgroundColor = e.target.id;
    }

    // if (e.target.id === 'grey') body.style.backgroundColor=e.target.id
    // else if (e.target.id === 'white') body.style.backgroundColor=e.target.id
    // else if (e.target.id === 'blue') body.style.backgroundColor=e.target.id
    // else if (e.target.id === 'yellow') body.style.backgroundColor=e.target.id
  });
});
```

## Project 2: BMI calculator
[BMI Calculator](https://stackblitz.com/edit/dom-project-chaiaurcode-sl2n5w?file=2-BMICalculator%2Findex.html)

```
const form = document.querySelector('form');

//if height and weight is taken outside event listener it will always contain 0 value, so Always take it inside event Listener so it will take value after the form is submitted.

form.addEventListener('submit', (e) => {
  e.preventDefault(); //By default the data is sent to server, we need to prevent it

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  // console.log(`${height},${weight}`);

  if (height === '' || height <= 0 || isNaN(height)) {
    result.innerHTML = `${height} is not a valid height`;
  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    result.innerHTML = `${weight} is not a valid weight`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      result.innerHTML = `<span>${bmi} is Under weight</span>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      result.innerHTML = `<span>${bmi} is Normal range</span>`;
    } else {
      result.innerHTML = `<span>${bmi} is Over Weight</span>`;
    }
  }
});
```
## Project 3:Digital Clock
[Digital Clock](https://stackblitz.com/edit/dom-project-chaiaurcode-sl2n5w?file=3-DigitalClock%2Findex.html)

```
const clock = document.querySelector('#clock');

setInterval(() => {
  let date = new Date();
  let time = date.toLocaleTimeString();
  clock.innerHTML = `<h3>${time}</h3>`;
}, 1000);
//Runs the function provided as parameter at given interval of time(in msec).
```
# Project 4: Guess a number
[Guess a number](https://stackblitz.com/edit/dom-project-chaiaurcode-sl2n5w?file=4-GuessTheNumber%2Findex.html)

```
const form = document.querySelector('form');
let answer = Math.floor(Math.random() * 100 + 1);
const guesses = document.querySelector('.guesses');
let remaining = document.querySelector('.lastResult');
let playGame = true;
let Totaltry = 1;
const result = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const retry = document.createElement('p');

//let guessArray = [];
//console.log(answer);
if (playGame) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const guess = parseInt(document.querySelector('#guessField').value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1 || guess > 100) {
    alert('Please enter a number between 1 and 100');
  } else {
    if (Totaltry == 10) {
      endGame();
      displayMessage(`Game Over. Random number was ${answer}`);
    } else {
      // Totaltry++;
      addGuess(guess);
      checkAnswer(guess);
    }
  }
}

//check is answer is correct high or low.
function checkAnswer(guess) {
  if (guess < answer) {
    displayMessage(`Guess too low!`);
  } else if (guess > answer) {
    displayMessage(`Guess too high!`);
  } else if (guess === answer) {
    displayMessage(`You guess correctly!`);
    endGame();
  }
}

//add guess in previous guess and update total guesses.
function addGuess(guess) {
  document.querySelector('#guessField').value = '';
  Totaltry++;
  guesses.innerHTML += `${guess}, `;
  remaining.innerHTML = `${11 - Totaltry}`;
}

//display whatever message is given
function displayMessage(Message) {
  // document.querySelector('#guessField').value = '';
  result.innerHTML = `<h3>${Message}</h3>`;
}

function endGame() {
  document.querySelector('#guessField').value = '';
  document.querySelector('#guessField').setAttribute('disabled', '');
  // displayMessage('Game Over');
  remaining.innerHTML = `0`;
  retry.innerHTML = `<button id="newGame">Try again</h2>`;
  startOver.appendChild(retry);
  newGame();
}
function newGame() {
  const retryButton = document.querySelector('#newGame');
  retryButton.addEventListener('click', (e) => {
    answer = Math.floor(Math.random() * 100 + 1);
    Totaltry = 1;
    guesses.innerHTML = '';
    remaining.innerHTML = `${11 - Totaltry}`;
    startOver.removeChild(retry);
    document.querySelector('#guessField').removeAttribute('disabled');
    playGame = true;
  });
}
```


