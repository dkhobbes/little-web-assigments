(function() {

function getThatData () {
   $.ajax({
      url:'/api/data'
    })
    .done(function(data) {
      console.log('data', data);

      var wordList = document.querySelector('.word-list');
      wordList.innerHTML = '';
      for (var i = 0; i < data.length; i++) {
        var li = document.createElement('li');
        li.textContent = data[i];
        wordList.appendChild(li);
      }
    });
  }

  getThatData();

  var wordInput = document.querySelector('.word-input');
  wordInput.addEventListener('keyup', function(evt) {
    console.log(evt.keyCode);

    if (evt.keyCode === 13) {
      console.log('do something');
      $.ajax ({
        url: '/api/data',
        method: 'POST',
        data: {word: wordInput.value }
      })
      .done(function() {
        console.log('The POST is done!');
        getThatData();

      });
    }
  });

})();
