console.log('write code here!');

(function() {
  var theList = document.querySelector('.the-list');
  var promise = $.ajax({
    url: 'http://localhost:5003/api/dragonlance'
  });

  promise.done(function(data) {
    console.log('data is back', data);

    var html = '';


    for (var i = 0; i <data.characters.length; i++) {
      var typeOfThing = data.characters[i];


      // console.log('the creature', typeOf);
      // var li = document.createElement('li');
      // li.textContent = typeOf.name;
      //
      // theList.appendChild(li);
      //
      // var raceP = document.createElement('p');
      // raceP.textContent = typeOf.race;
      // raceP.classList.add ('raceP');
      //
      // li.appendChild(raceP);
      //
      // var descriptionP = document.createElement('p');
      // descriptionP.textContent = typeOf.description;
      //
      // li.appendChild(descriptionP);

      var output = Mustache.render('<li><p class="name">{{name}}</p><p class="raceP">{{race}}</p><p class="descriptionP">{{description}}</p></li>', typeOfThing);
      console.log(output);
      html += output;
    }
    theList.innerHTML = html;
  });

})();
