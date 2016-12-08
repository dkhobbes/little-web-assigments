console.log('script file hooked up!');

var clickMeButton =document.querySelector('.click-me');

var clickMeTooButton = document.querySelector('.click-me-too');

clickMeButton.addEventListener('click', function() {
  var thursdayDiv = document.querySelector('.thursday-div');
  thursdayDiv.textContent = "different now";
  thursdayDiv.classList.toggle('on');
});

clickMeTooButton.addEventListener('click', function() {
  var thursdayDiv = document.querySelector('.thursday-div');
  thursdayDiv.textContent = "different now";
  thursdayDiv.classList.toggle('on');
});
