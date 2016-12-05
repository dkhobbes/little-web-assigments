(function(){

  var counter = 0;
  var minusButton = document.querySelector('.minus');
  var addButton = document.querySelector('.add');
  var display = document.querySelector('.display');

  display.textContent = counter;

  minusButton.addEventListener('click', function() {
    counter--;
    display.textContent = counter;
  });

  addButton.addEventListener('click', function() {
    counter++;
    display.textContent = counter;
  });

})();
