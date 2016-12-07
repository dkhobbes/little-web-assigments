

(function() {

  var position = 1;
  var allTheThings = document.querySelectorAll('.form-name')
  // allTheThings.classList.add('on');

  var nextButton = document.querySelector('.next-button');
  var previousButton = document.querySelector('.previous-button');
  var selector = '.form-' + position;
  var thing = document.querySelector(selector);
  var currentlyShowing = document.querySelector('.on');

  function showBasedOnCurrentPosition() {

      thing.classList.add('on');
      currentlyShowing.classList.remove('on');


    }

  nextButton.addEventListener('click',function() {
      if (position < 3){
      position++;
      showBasedOnCurrentPosition();
      }
    });

  previousButton.addEventListener('click',function() {
    if (position > 1) {
      position--;
      showBasedOnCurrentPosition();
    }
  });



})();
