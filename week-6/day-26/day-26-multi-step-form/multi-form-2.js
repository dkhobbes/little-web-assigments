/* if at first you don't succeed ... scrap everything and start over.
Based on flippy 2 example.

Currently only part one is complete, and works.
*/

console.log('hi');

var getLocalStorage = localStorage.getItem();
/*Need to understand what variables need to go up here*/

var next1 = document.querySelector('.formName .next-button');
var next2 = document.querySelector('.formAge .next-button');
var previous2 = document.querySelector('.formAge .previous-button');
var previous3 = document.querySelector('.formCareer .previous-button');

next1.addEventListener('click', function() {
  hideDiv();
  show('.formAge');
});

next2.addEventListener('click', function() {
  hideDiv();
  show('.formCareer');

});

previous2.addEventListener('click', function() {
  hideDiv();
  show('.formName');
});

previous3.addEventListener('click', function() {
  hideDiv();
  show('.formAge');
});

function hideDiv() {
  var currentlyShowing = document.querySelector('.on');
  currentlyShowing.classList.remove('on');
}

function show (selector) {
  var thing = document.querySelector(selector)
  thing.classList.add('on');
}

/* adding part two: local storage*/

/*need to set variables for part 2*/

var value = /* variable goes here*/;

value = JSON.stringify(value);
localStorage.getItem('value', value)

var getItBack = localStorage.getItem('value');
console.log('I got it back', getItBack);

var parsed = JSON.parse(getItBack);
console.log(parsed);

/*Adding validation: Part 3*/
var moveToNextButton = document.querySelector('.next-button');

moveToNextButton.addEventListener('click', function(evt) {

  var firstNameInput = document.querySelector('.first-name');
  var lastNameInput = document.querySelector('.last-name');

  validateRequired(evt, firstNameInput);
  validateRequired(evt, lastNameInput);

});


function validateRequired(evt, theDomElement) {
  if (theDomElement.value === '' && ) {
    evt.preventDefault();
    theDomElement.classList.add('error');
  }
  else {
    theDomElement.classList.remove('error');
  }
}
