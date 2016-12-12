console.log('write code here!');

(function() {
  var theList = document.querySelector('.the-list');
  var promise = $.ajax({
    url: 'http://localhost:5003/api/dragonlance'
  });

  promise.done(function(data) {
    console.log('data is back', data);

    for (var i = 0; i <data.characters.length; i++) {
      var typeOf = data.characters[i];
      console.log('the creature', typeOf);
      var li = document.createElement('li');
      li.textContent = typeOf.name;

      theList.appendChild(li);

      var raceP = document.createElement('p');
      raceP.textContent = typeOf.race;
      raceP.classList.add ('raceP');

      li.appendChild(raceP);

      var descriptionP = document.createElement('p');
      descriptionP.textContent = typeOf.description;

      li.appendChild(descriptionP);


    }
  });

})();
