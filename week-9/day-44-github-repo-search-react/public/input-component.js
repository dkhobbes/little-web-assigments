'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

window.SW = window.SW || {};
(function () {
  var InputComponent = function (_React$Component) {
    _inherits(InputComponent, _React$Component);

    function InputComponent() {
      _classCallCheck(this, InputComponent);

      var _this = _possibleConstructorReturn(this, (InputComponent.__proto__ || Object.getPrototypeOf(InputComponent)).call(this));

      _this.state = {
        apiResult: {
          items: []
        }
      };
      return _this;
    }

    _createClass(InputComponent, [{
      key: 'keyUpHappening',
      value: function keyUpHappening(evt) {
        var _this2 = this;

        console.log('key up happening', evt.keyCode);

        if (evt.keyCode === 13) {
          $.ajax({
            url: 'https://api.github.com/search/users?q=' + this.myInput.value
          }).done(function (data) {
            console.log('github data?', data);
            _this2.setState({
              apiResult: data
            });
          });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;

        console.log('render', this.state);

        return React.createElement(
          'div',
          { className: 'search-bar' },
          React.createElement('input', { onKeyUp: function onKeyUp(evt) {
              _this3.keyUpHappening(evt);
            }, ref: function ref(input) {
              _this3.myInput = input;
            } }),
          React.createElement('iframe', { src: 'https://developer.github.com/changes/' }),
          React.createElement(
            'ul',
            { className: 'results' },
            this.state.apiResult.items.map(function (info) {
              return React.createElement(
                'li',
                { className: 'box', key: info.id },
                React.createElement(
                  'div',
                  { className: 'name-api' },
                  info.login
                ),
                React.createElement(
                  'div',
                  { className: 'login-api' },
                  React.createElement(
                    'a',
                    { target: '_blank', href: info.html_url },
                    info.html_url
                  )
                )
              );
            })
          )
        );
      }
    }]);

    return InputComponent;
  }(React.Component);

  SW.InputComponent = InputComponent;
})();
//# sourceMappingURL=input-component.js.map
