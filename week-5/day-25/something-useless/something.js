var playButton = document.querySelector('.Play-button');

var trumpIntro = document.querySelector('.trump-intro');
trumpIntro.classList.add('show');

playButton.addEventListener('click', function() {
  console.log('hi');

  trumpIntro.classList.remove('show');
  var addGamePlay = document.querySelector('.playing-page');
  addGamePlay.classList.add('show');

  var hideStartButton = document.querySelector('.Play-button')
  hideStartButton.classList.add('hide');
});

var quoteOneShow = document.querySelector('.quote-1');
quoteOneShow.classList.add('show');

var HeSaidIt = document.querySelector('.he-said-it');
var HeDidNotSayIt = document.querySelector('.he-did-not-say-it');

HeSaidIt.addEventListener('click', function() {

})

var whichQuestionPosition = 
