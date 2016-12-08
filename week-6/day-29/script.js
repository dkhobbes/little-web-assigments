console.log('script file hooked up!');

var clickMeButton =document.querySelector('.click-me');
var clickMeTooButton = document.querySelector('.click-me-too');
var thursdayDiv = document.querySelector('.thursday-div');


clickMeButton.addEventListener('click', function() {
  thursdayDiv.textContent = "different now";
  thursdayDiv.classList.toggle('on');
});

clickMeTooButton.addEventListener('click', function() {
  thursdayDiv.textContent = "different now";
  thursdayDiv.classList.toggle('on');
});
