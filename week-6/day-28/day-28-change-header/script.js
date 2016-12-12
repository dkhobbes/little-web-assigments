
window.addEventListener('scroll', function(evt) {

  if (window.pageYOffset > 100) {
    var headerSmall = document.querySelector('.heading-set');
    headerSmall.classList.add('header-change');
  }
  if (window.pageYOffset < 99) {
    var headerTall = document.querySelector('.heading-set');
    headerTall.classList.remove('header-change');
  }


});
