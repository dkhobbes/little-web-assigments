'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

window.SW = window.SW || {};

(function () {
  var PlanetListItem = function (_React$Component) {
    _inherits(PlanetListItem, _React$Component);

    function PlanetListItem() {
      _classCallCheck(this, PlanetListItem);

      var _this = _possibleConstructorReturn(this, (PlanetListItem.__proto__ || Object.getPrototypeOf(PlanetListItem)).call(this));

      _this.state = {
        isSelected: false
      };
      return _this;
    }

    _createClass(PlanetListItem, [{
      key: 'toggle',
      value: function toggle() {
        console.log('hi');
        this.setState({
          isSelected: !this.state.isSelected
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var currentClass = 'planet';
        var extraInfo;

        var selectedClass;
        if (this.state.isSelected) {
          currentClass += ' on';

          extraInfo = React.createElement(
            'div',
            null,
            React.createElement(
              'div',
              null,
              'Climate: ',
              this.props.planet.climate
            ),
            React.createElement(
              'div',
              null,
              'Created: ',
              this.props.planet.created
            ),
            React.createElement(
              'div',
              null,
              'Diameter: ',
              this.props.planet.diameter
            ),
            React.createElement(
              'div',
              null,
              'Edited: ',
              this.props.planet.edited
            ),
            React.createElement(
              'div',
              null,
              'Gravity: ',
              this.props.planet.gravity
            ),
            React.createElement(
              'div',
              null,
              'Orbital-Period: ',
              this.props.planet.orbital_period
            )
          );
        }

        return React.createElement(
          'li',
          { className: currentClass, onClick: function onClick() {
              _this2.toggle();
            } },
          this.props.planet.name,
          extraInfo
        );
      }
    }]);

    return PlanetListItem;
  }(React.Component);

  var PlanetListComponent = function (_React$Component2) {
    _inherits(PlanetListComponent, _React$Component2);

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
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        console.log('AppComponent.ComponentWillUnmount');
      }
    }, {
      key: 'getTheData',
      value: function getTheData() {
        console.log('load the planets');
      }
    }, {
      key: 'getTheData',
      value: function getTheData() {
        var _this4 = this;

        $.ajax({
          url: 'http://swapi.co/api/planets'
        }).done(function (data) {
          console.log('got data', data);

          _this4.setState({
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
              return React.createElement(PlanetListItem, { key: index, planet: planet });
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

  SW.PlanetListComponent = PlanetListComponent;
})();
//# sourceMappingURL=planet-list-components.js.map
