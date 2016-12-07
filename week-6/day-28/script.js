console.log('script file hooked up!');

var submitButton = document.querySelector('.submit-button');

submitButton.addEventListener('click', function(evt) {

  var firstNameInput = document.querySelector('.first-name');
  var lastNameInput = document.querySelector('.last-name');

  if (firstNameInput.value === '') {
    evt.preventDefault();
    firstNameInput.classList.add('error');
  }
  else {
    firstNameInput.classList.remove('error');
  }
  if (lastNameInput.value === '') {
    evt.preventDefault();
    lastNameInput.classList.add('error');
  }
  else {
    lastNameInput.classList.remove('error');
  }
});

var googleLink = document.querySelector('.google-link');
googleLink.addEventListener('click', function(evt) {
  evt.preventDefault();
});
