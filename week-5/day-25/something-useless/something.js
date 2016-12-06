var playButton = document.querySelector('.Play-button');

var trumpIntro = document.querySelector('.trump-intro');
trumpIntro.classList.add('show');

playButton.addEventListener('click', function() {
  console.log('hi');

  trumpIntro.classList.remove('show');
  var addGamePlay = document.querySelector('.playing-page');
  addGamePlay.classList.add('show');
});
