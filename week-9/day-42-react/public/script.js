'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mountNode = document.querySelector('#react-root');

var LunchPlace = function (_React$Component) {
  _inherits(LunchPlace, _React$Component);

  function LunchPlace() {
    _classCallCheck(this, LunchPlace);

    return _possibleConstructorReturn(this, (LunchPlace.__proto__ || Object.getPrototypeOf(LunchPlace)).apply(this, arguments));
  }

  _createClass(LunchPlace, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'li',
        { className: 'lunch-component' },
        this.props.place.name,
        ': ',
        this.props.place.location,
        React.createElement(
          'ol',
          null,
          this.props.place.favoriteFoods.map(function (food, index) {
            return React.createElement(
              'li',
              { key: index },
              food
            );
          })
        )
      );
    }
  }]);

  return LunchPlace;
}(React.Component);

var GithubApiSample = function (_React$Component2) {
  _inherits(GithubApiSample, _React$Component2);

  function GithubApiSample() {
    _classCallCheck(this, GithubApiSample);

    var _this2 = _possibleConstructorReturn(this, (GithubApiSample.__proto__ || Object.getPrototypeOf(GithubApiSample)).call(this));

    _this2.state = {
      apiResult: {
        results: []
      }
    };
    return _this2;
  }

  _createClass(GithubApiSample, [{
    key: 'clicky',
    value: function clicky() {
      var _this3 = this;

      $.ajax({
        url: 'http://swapi.co/api/people'
      }).done(function (data) {
        console.log('got data', data);

        _this3.setState({
          apiResult: data
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      console.log('rendering star wars');
      return React.createElement(
        'div',
        { className: 'github-api-class' },
        React.createElement(
          'h1',
          null,
          'Github!'
        ),
        React.createElement(
          'button',
          { onClick: function onClick() {
              return _this4.clicky();
            } },
          'load data'
        ),
        React.createElement(
          'ul',
          null,
          this.state.apiResult.results.map(function (char, index) {
            return React.createElement(
              'li',
              { key: char.url },
              char.name
            );
          })
        )
      );
    }
  }]);

  return GithubApiSample;
}(React.Component);

var AppComponent = function (_React$Component3) {
  _inherits(AppComponent, _React$Component3);

  function AppComponent() {
    _classCallCheck(this, AppComponent);

    return _possibleConstructorReturn(this, (AppComponent.__proto__ || Object.getPrototypeOf(AppComponent)).apply(this, arguments));
  }

  _createClass(AppComponent, [{
    key: 'render',
    value: function render() {
      var data = [{
        id: 1,
        name: 'Metropolitan Cafe',
        location: 'In this building',
        favoriteFoods: ['turkey sandwich', 'reuben']
      }, {
        id: 2,
        name: "Mudhen",
        location: "Farmers Market",
        favoriteFoods: ['steak rice bowl']

      }, {
        id: 3,
        name: "Chophouse Burger",
        location: "Main Street",
        favoriteFoods: ['buffalo burger', 'truffle fries']
      }];

      return React.createElement(
        'div',
        null,
        React.createElement(
          'ul',
          { className: 'lunch-component' },
          data.map(function (place) {
            return React.createElement(LunchPlace, { key: place.id, place: place });
          })
        ),
        React.createElement(GithubApiSample, null)
      );
    }
  }]);

  return AppComponent;
}(React.Component);

ReactDOM.render(React.createElement(AppComponent, null), mountNode);
//# sourceMappingURL=script.js.map
