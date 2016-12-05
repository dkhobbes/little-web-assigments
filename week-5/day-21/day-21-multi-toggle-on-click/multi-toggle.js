var clickMe = document.querySelector('.container');

// clickMe[0].addEventListener('click', function() {
//   clickMe[0].classList.toggle("on");
// });
//
// clickMe[1].addEventListener('click', function() {
//   clickMe[1].classList.toggle("on");
// });
//
// clickMe[2].addEventListener('click', function() {
//   clickMe[2].classList.toggle("on");
// });
//
// clickMe[3].addEventListener('click', function() {
//   clickMe[3].classList.toggle("on");
// });
//
// clickMe[4].addEventListener('click', function() {
//   clickMe[4].classList.toggle("on");
// });

clickMe.addEventListener('click', function(evt) {
  console.log('clicked', evt.target, evt.target.tagName);

  if (evt.target.tagName === 'P') {
      evt.target.classList.toggle('on');
  }
});
