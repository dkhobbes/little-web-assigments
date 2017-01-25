"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.RouterDemo === undefined) {
  window.RouterDemo = {};
}

(function () {
  var ThirdComponent = function (_React$Component) {
    _inherits(ThirdComponent, _React$Component);

    function ThirdComponent() {
      _classCallCheck(this, ThirdComponent);

      return _possibleConstructorReturn(this, (ThirdComponent.__proto__ || Object.getPrototypeOf(ThirdComponent)).apply(this, arguments));
    }

    _createClass(ThirdComponent, [{
      key: "goBackYo",
      value: function goBackYo() {
        ReactRouter.browserHistory.goBack();
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        return React.createElement(
          "div",
          null,
          React.createElement(
            "h1",
            null,
            "Third Component"
          ),
          React.createElement(
            "p",
            null,
            "This is the third component. That button below shows you how to go back in browser history."
          ),
          React.createElement(
            "button",
            { onClick: function onClick() {
                _this2.goBackYo();
              } },
            "Go Back"
          )
        );
      }
    }]);

    return ThirdComponent;
  }(React.Component);

  RouterDemo.ThirdComponent = ThirdComponent;
})();
//# sourceMappingURL=ThirdComponent.js.map
