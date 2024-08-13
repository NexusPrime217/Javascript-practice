
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




