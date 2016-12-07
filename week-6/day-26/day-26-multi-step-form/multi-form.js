
(function() {

  var position = 1;
  var nextButton = document.querySelector('.next-button');
  var previousButton = document.querySelector('.previous-button');

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

      var currentlyShowing = document.querySelector('.on');
      currentlyShowing.classList.remove('on');

      var selector = '.form-' + position;
      console.log('selector', selector);

      var thing = document.querySelector(selector);
      thing.classList.add('on');

    }

})();



// note for now





 var start = document.querySelector(".next-button");

start.addEventListener('click', function(){
  var show = document.querySelector('.age-form');
  show.classList.add('on')
});
