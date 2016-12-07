console.log('script file hooked up!');

var submitButton = document.querySelector('.submit-button');

submitButton.addEventListener('click', function(evt) {

  var firstNameInput = document.querySelector('.first-name');
  var lastNameInput = document.querySelector('.last-name');

  // if (firstNameInput.value === '') {
  //   evt.preventDefault();
  //   firstNameInput.classList.add('error');
  // }
  // else {
  //   firstNameInput.classList.remove('error');
  // }
  // if (lastNameInput.value === '') {
  //   evt.preventDefault();
  //   lastNameInput.classList.add('error');
  // }
  // else {
  //   lastNameInput.classList.remove('error');
  // }

  var bioText = document.querySelector('.bio');

  // if (bioText.value.length < 20) {
  //   evt.preventDefault();
  //   bioText.classList.add('error');
  // }
  // else {
  //   bioText.classList.remove('error');
  // }

  validateRequired(evt, firstNameInput);
  validateRequired(evt, lastNameInput);
  validateLength(evt, bioText);

});

function validateRequired(evt, theDomElement) {
  if (theDomElement.value === '') {
    evt.preventDefault();
    theDomElement.classList.add('error');
  }
  else {
    theDomElement.classList.remove('error');
  }
}

function validateLength(evt, theDomElement) {
  if (theDomElement.value.length < 20 ) {
    evt.preventDefault();
    theDomElement.classList.add('error');
  }
  else {
    theDomElement.classList.remove('error');
  }
}


var googleLink = document.querySelector('.google-link');
googleLink.addEventListener('click', function(evt) {
  evt.preventDefault();
});
