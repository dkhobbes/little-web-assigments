'use strict';

(function () {
  var peopleListUL = document.querySelector('.people-list');

  console.log('hello', peopleListUL);

  var people = ['Bob', 'Will', 'Natalie', 'Brittany'];

  people.forEach(function (name) {
    var li = document.createElement('li');
    li.textContent = name;

    peopleListUL.appendChild(li);
  });

  peopleListUL.addEventListener('click', function (evt) {
    console.log('you hit it', evt.target);
  });
})();
//# sourceMappingURL=script.js.map