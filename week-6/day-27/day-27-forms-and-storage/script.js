
(function () {

  var button = document.querySelector('.add-person-button');
  var firstNameInput = document.querySelector('.first-name-input')
  var LastNameInput = document.querySelector('.last-name-input')


  var peopleList = document.querySelector('.people-list');
  button.addEventListener('click', addPerson);

  function addPerson() {
    var firstName = firstNameInput.value;
    var lastName = LastNameInput.value;
    var li = document.createElement('li');
    li.textContent = firstName + ' ' + lastName;
    peopleList.appendChild(li);
    firstNameInput.value = '' ;
    LastNameInput.value = '' ;
  }


  LastNameInput.addEventListener('keyup', function(evt) {
    console.log('keyup', LastNameInput.value, evt);
    if (evt.keyCode === 13) {
      addPerson();
    }
  });



}) ();
