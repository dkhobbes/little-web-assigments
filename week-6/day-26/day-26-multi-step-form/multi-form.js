

(function() {
console.log('hi');
  var position = 1;
  var allTheThings = document.querySelectorAll('.form-1')

  var nextButtons = document.querySelectorAll('.next-button');
  var previousButtons = document.querySelector('.previous-button');

  var currentlyShowing = document.querySelector('.on');



  // nextButton.addEventListener('click', advance);
  for (var i = 0; i < nextButtons.length; i++) {
    nextButtons[i].addEventListener('click', advance);
  }

  // previousButton
  for (var i = 0; i < previousButtons.length; i++) {
    previousButtons[i].addEventListener('click', previous);
  }

  function advance() {
    if (position < 3) {
      position++;
      showBasedOnCurrentPosition();
    }
  }

  function previous() {
    if (position > 1) {
      position--;
      showBasedOnCurrentPosition();
    }
  }

  function showBasedOnCurrentPosition() {
    console.log('checking');
    var selector = '.form-' + position;
    var thing = document.querySelector(selector);

    currentlyShowing.classList.remove('on');
    thing.classList.add('on');

    }

})();
