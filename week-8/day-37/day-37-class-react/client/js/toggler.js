(function(){
//   var toggleDiv = document.querySelector('.toggle-me');
//
// toggleDiv.addEventListener('click', function() {
//   toggleDiv.classList.toggle('on');
// });
//
// var toggleTooDiv = document.querySelector('.toggle-me-too');
//
// toggleTooDiv.addEventListener('click', function() {
// toggleTooDiv.classList.toggle('on');
// });

class CustomView {
  constructor(selector) {
    console.log('cutom view constructor. Selector: ', selector);
    this.selector = selector;
    this.element = document.querySelector(selector);
  }

  setupToggling(className) {
    this.element.addEventListener('click', function(evt) {
      evt.target.classList.toggle(className);
    });
  }
}

var firstToggler = new CustomView('.toggle-me');
console.log('first toggler', firstToggler);
firstToggler.setupToggling('on');

var secondToggler = new CustomView('.toggle-me-too');
secondToggler.setupToggling('on');

})();
