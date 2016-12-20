'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
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

  var CustomView = function () {
    function CustomView(selector) {
      _classCallCheck(this, CustomView);

      console.log('cutom view constructor. Selector: ', selector);
      this.selector = selector;
      this.element = document.querySelector(selector);
    }

    _createClass(CustomView, [{
      key: 'setupToggling',
      value: function setupToggling(className) {
        this.element.addEventListener('click', function (evt) {
          evt.target.classList.toggle(className);
        });
      }
    }]);

    return CustomView;
  }();

  var firstToggler = new CustomView('.toggle-me');
  console.log('first toggler', firstToggler);
  firstToggler.setupToggling('on');

  var secondToggler = new CustomView('.toggle-me-too');
  secondToggler.setupToggling('on');
})();
//# sourceMappingURL=toggler.js.map