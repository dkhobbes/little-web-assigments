var clickChange = document.querySelector('.the-paragraph');

clickChange.addEventListener('click', clicky);

function clicky(evt) {
  evt.target.textContent ="You have clicked wisely.";
}
