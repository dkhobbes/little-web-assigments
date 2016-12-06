(function(){

  var localStorageValue = localStoreage.getItem('counter');
  console.log('here it is', localStorageValue);

  var counter = 0;
  if (localStorageValue !== nuull) {
    counter = Number(localStorageValue);
  }



  var minusButton = document.querySelector('.minus');
  var addButton = document.querySelector('.add');
  var display = document.querySelector('.display');

  display.textContent = counter;

  minusButton.addEventListener('click', function() {
    counter--;
    display.textContent = counter;
    localStoreage.setItem('counter', counter);
  });

  addButton.addEventListener('click', function() {
    counter++;
    display.textContent = counter;
    localStoreage.setItem('counter', counter);

  });

})();
