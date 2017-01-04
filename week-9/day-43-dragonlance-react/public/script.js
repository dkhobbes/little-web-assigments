'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mountNode = document.querySelector('#react-root');

var AppComponent = function (_React$Component) {
  _inherits(AppComponent, _React$Component);

  function AppComponent() {
    _classCallCheck(this, AppComponent);

    var _this = _possibleConstructorReturn(this, (AppComponent.__proto__ || Object.getPrototypeOf(AppComponent)).call(this));

    _this.state = {
      apiResult: {
        characters: []
      },
      characterClass: ''
    };
    return _this;
  }

  _createClass(AppComponent, [{
    key: 'clicky',
    value: function clicky() {
      var _this2 = this;

      $.ajax({
        url: 'http://localhost:5000/api/dragonlance'
      }).done(function (data) {
        console.log('got data', data);

        _this2.setState({
          apiResult: data,
          characterClass: "characters-api"
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return React.createElement(
        'div',
        { className: 'dragonlance-api' },
        React.createElement(
          'button',
          { onClick: function onClick() {
              return _this3.clicky();
            } },
          'load data'
        ),
        React.createElement(
          'ul',
          { className: this.state.characterClass },
          this.state.apiResult.characters.map(function (char, index) {
            return React.createElement(
              'li',
              { key: index },
              React.createElement(
                'div',
                { className: 'name-api' },
                char.name
              ),
              React.createElement(
                'div',
                { className: 'race-api' },
                char.race
              ),
              React.createElement(
                'div',
                { className: 'description-api' },
                char.description
              )
            );
          })
        )
      );
    }
  }]);

  return AppComponent;
}(React.Component);

ReactDOM.render(React.createElement(AppComponent, null), mountNode);
//# sourceMappingURL=script.js.map
