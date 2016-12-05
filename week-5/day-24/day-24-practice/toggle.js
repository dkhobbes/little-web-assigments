

var changeDiv = document.querySelector('.block');

setInterval(function() {
  changeDiv.classList.toggle('hide');
}, 3000);


var growingDiv = document.querySelector('.growth');

growingDiv.style.width = '0%';

var width = 0;

var intervalId = setInterval(function() {
  width += 1;
  growingDiv.style.width = width + '%';

  if (width > 49) {
    clearInterval(intervalId);
  }
}, 100);

/* ===============
monster
================*/

var monster = document.querySelector('.monster');

var position = 1;
var direction = right;

setInterval(function() {

  switch (position) {
    case 1:
      console.log('position 1');
      monster.classList.remove('.position-2');
      monster.classList.add('.position-1');
      break;
    case 2:
      console.log('position 2');
      monster.classList.remove('.posiiton-1');
      monster.classList.remove('.posiiton-3');
      monster.classList.add('.position-2');
      break;
    case 3:
      console.log('position 3');
      monster.classList.remove('.posiiton-2');
      monster.classList.add('.position-3');
      break;
  }

  if (direction === 'right') {
    position += 1;
  }
  else {
    position -= 1;
  }
  console.log('the position is ', position);

  if (position >= 3) {
    direction = 'left';
  }
  else if (position <= 1) {
    direction = 'right';
  }

}, 500);
