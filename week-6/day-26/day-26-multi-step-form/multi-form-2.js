// if at first you don't succeed ... scrap everything and start over.

console.log('hi');

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
