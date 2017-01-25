'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.RouterDemo === undefined) {
  window.RouterDemo = {};
}

(function () {
  var FirstComponent = function (_React$Component) {
    _inherits(FirstComponent, _React$Component);

    function FirstComponent() {
      _classCallCheck(this, FirstComponent);

      return _possibleConstructorReturn(this, (FirstComponent.__proto__ || Object.getPrototypeOf(FirstComponent)).apply(this, arguments));
    }

    _createClass(FirstComponent, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'h1',
            null,
            'The First Component'
          ),
          React.createElement(
            'p',
            null,
            'This is the first component. Below is an example of the Link component. You can use that to move people to other routes.'
          ),
          React.createElement(
            ReactRouter.Link,
            { to: '/second' },
            'Go to the second component'
          )
        );
      }
    }]);

    return FirstComponent;
  }(React.Component);

  RouterDemo.FirstComponent = FirstComponent;
})();
//# sourceMappingURL=FirstComponent.js.map
