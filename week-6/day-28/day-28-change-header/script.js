console.log('tessting script')

window.addEventListener('scroll', function(evt) {

  if (window.pageYOffset > 225) {
    console.log('too low!');
  }

});

window.addEventListener('resize', function() {
  console.log('ael width changed');
});
