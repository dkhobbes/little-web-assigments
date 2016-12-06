
(function () {
  var button = document.querySelector('.add-person-button');
  var peopleList = document.querySelector('.people-list');
  button.addEventListener('click', function () {

    var firstName = 'Bob';
    var lastName = 'Smith';

    var li = document.createElement('li');
    peopleList.appendChild(li);

  });


}) ();
