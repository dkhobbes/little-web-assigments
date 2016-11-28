
var rightButton = document.querySelector('#right-button');

var left =0;

rightButton.addEventListener('click', function() {
  var box = document.querySelector('.alone-box');
  left += 50;
  box.style.left = left + 'px';
});

var leftButton = document.querySelector('#left-button');

var left =0;

leftButton.addEventListener('click', function() {
  var box = document.querySelector('.alone-box');
  left -= 50;
  box.style.left = left + 'px';
});
