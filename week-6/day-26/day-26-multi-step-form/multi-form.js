

(function() {

  var position = 1;



  var allTheThings = document.querySelectorAll('.form-name')
  allTheThings.classList.add('on');


  var nextButton = document.querySelector('.next-button');
  var previousButton = document.querySelector('.previous-button');

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

  function showBasedOnCurrentPosition() {

      var currentlyShowing = document.querySelector('.on');
      currentlyShowing.classList.remove('on');

      var selector = '.form-' + position;
      console.log('selector', selector);

      var thing = document.querySelector(selector);
      thing.classList.add('on');

    }

})();
