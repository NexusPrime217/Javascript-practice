
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



