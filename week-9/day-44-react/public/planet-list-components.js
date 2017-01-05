'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

window.SW = window.SW || {};

(function () {
  console.log('hi');

  var PlanetListComponent = function (_React$Component) {
    _inherits(PlanetListComponent, _React$Component);

    function PlanetListComponent() {
      _classCallCheck(this, PlanetListComponent);

      return _possibleConstructorReturn(this, (PlanetListComponent.__proto__ || Object.getPrototypeOf(PlanetListComponent)).call(this));
    }

    _createClass(PlanetListComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        console.log('AppComponent.ComponentDidMount');
        this.getTheData();
      }
    }, {
      key: 'componentWillunmount',
      value: function componentWillunmount() {
        console.log('AppComponent.ComponentWillunmount');
      }
    }, {
      key: 'getTheData',
      value: function getTheData() {
        console.log('load the planets');
      }
    }, {
      key: 'getTheData',
      value: function getTheData() {
        var _this2 = this;

        $.ajax({
          url: 'http://swapi.co/api/planets'
        }).done(function (data) {
          console.log('got data', data);

          _this2.setState({
            apiResult: data
          });
        });
      }
    }, {
      key: 'render',
      value: function render() {
        console.log('render', this.state);
        var theList;

        if (this.state != null) {
          theList = React.createElement(
            'ul',
            null,
            this.state.apiResult.results.map(function (planet, index) {
              return React.createElement(
                'li',
                { key: index },
                planet.name
              );
            })
          );
        }

        return React.createElement(
          'div',
          { className: 'planet-list' },
          React.createElement(
            'h1',
            null,
            'Planet List'
          ),
          theList
        );
      }
    }]);

    return PlanetListComponent;
  }(React.Component);

  var mountNode = document.querySelector('#react-root');

  var AppComponent = function (_React$Component2) {
    _inherits(AppComponent, _React$Component2);

    function AppComponent() {
      _classCallCheck(this, AppComponent);

      return _possibleConstructorReturn(this, (AppComponent.__proto__ || Object.getPrototypeOf(AppComponent)).apply(this, arguments));
    }

    _createClass(AppComponent, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          null,
          React.createElement(PlanetListComponent, null)
        );
      }
    }]);

    return AppComponent;
  }(React.Component);

  SW.PlanetListComponent = PlanetListComponent;
})();
//# sourceMappingURL=planet-list-components.js.map
