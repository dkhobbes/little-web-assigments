var clickMe = document.querySelector('.click-me');

clickMe.addEventListener('click', function());

function clicky() {
  console.log('other function');
}

clickMe.addEventListener('click', clicky);
