console.log('script file hooked up!');

var clickMeButton =document.querySelector('.click-me');
var clickMeTooButton = document.querySelector('.click-me-too');
var thursdayDiv = document.querySelector('.thursday-div');


clickMeButton.addEventListener('click', function() {
  changeIt("different one");
});

clickMeTooButton.addEventListener('click', function() {
  changeIt('another option');
});

function changeIt(message) {
  thursdayDiv.textContent = message;
  thursdayDiv.classList.toggle('on');
}
