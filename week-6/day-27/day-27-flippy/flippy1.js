(function() {

  var position = 1;

  var allTheThings = document.querySelectorAll('.contains-things div')
  var maxPostiion = allTheThings.length;

  var nextButton = document.querySelector('.button-next');
  var previousButton = document.querySelector('.button-previous');


  nextButton.addEventListener('click',function() {
    if (position < 4){

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

    var currentlyShowing = document.querySelector('.showing');
    currentlyShowing.classList.remove('showing');

    var selector = '.thing-' + position;
    console.log('selector', selector);

    var thing = document.querySelector(selector);
    thing.classList.add('showing');

  }


})();
