var playButton = document.querySelector('.Play-button');
var trumpIntro = document.querySelector('.trump-intro');
var addGamePlay = document.querySelector('.playing-page');
var winningPage = document.querySelector('.winning-page');
var losingPage = document.querySelector('.losing-page');




trumpIntro.classList.add('show');

playButton.addEventListener('click', function() {
  console.log('hi');

  trumpIntro.classList.remove('show');
  addGamePlay.classList.add('show');

  var hideStartButton = document.querySelector('.Play-button')
  hideStartButton.classList.add('hide');
});

var quoteOneShow = document.querySelector('.quote-1');
quoteOneShow.classList.add('show');

var HeSaidIt = document.querySelector('.he-said-it');
var HeDidNotSayIt = document.querySelector('.he-did-not-say-it');

HeSaidIt.addEventListener('click', function() {
  winningPage.classList.add('show');
  addGamePlay.classList.add('hide');
})

HeDidNotSayIt.addEventListener('click', function() {
  losingPage.classList.add('show');
  addGamePlay.classList.add('hide');

});

// var whichQuestionPosition =
