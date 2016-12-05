var clickMe = document.querySelector('.container');

clickMe.addEventListener('click', function(evt) {


  if (evt.target.tagName === 'LI') {
    var listChange = document.querySelector('.red');
    if(listChange !== null) {
      listChange.classList.remove('red');
    }
    evt.target.classList.toggle('red');
  }
});
