'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

window.SW = window.SW || {};
(function () {
  var BeerSampleComponent = function (_React$Component) {
    _inherits(BeerSampleComponent, _React$Component);

    function BeerSampleComponent() {
      _classCallCheck(this, BeerSampleComponent);

      return _possibleConstructorReturn(this, (BeerSampleComponent.__proto__ || Object.getPrototypeOf(BeerSampleComponent)).call(this));
    }

    _createClass(BeerSampleComponent, [{
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
      value: function getTheData(evt) {
        var _this2 = this;

        // if (evt.keyCode === 13) {
        $.ajax({
          url: "/api/beer"
        }).done(function (data) {
          // console.log('got data', data);

          var dataAsObjects = JSON.parse(data);
          // var beerUL = document.querySelector(".beer-info");
          // console.log('beerMe', dataAsObjects);
          //
          // dataAsObjects.data.forEach(function(beerMe){
          //   console.log('beerMe', dataAsObjects);
          //   var li = document.createElement('li');
          //   li.textContent = beerMe.name;
          //   beerUL.appendChild(li);
          // });

          _this2.setState({
            apiResult: dataAsObjects
          });
        });
        // }
      }
    }, {
      key: 'render',
      value: function render() {
        // console.log('render', this.state);
        var theList;

        if (this.state != null) {
          console.log(this.state);
          theList = React.createElement(
            'ul',
            { className: 'theList' },
            this.state.apiResult.data.map(function (nested) {
              return nested.breweries.map(function (brewery, index) {
                return React.createElement(
                  'li',
                  { key: index },
                  ' ',
                  brewery.name,
                  ' (status: ',
                  brewery.status,
                  ')',
                  React.createElement(
                    'ol',
                    null,
                    brewery.locations.map(function (location, index) {
                      return React.createElement(
                        'li',
                        { key: index },
                        ' (latitude: ',
                        location.latitude,
                        ', longitude: ',
                        location.longitude,
                        ') '
                      );
                    })
                  )
                );
              });
            })
          );
        }

        return React.createElement(
          'div',
          null,
          theList
        );
      }
    }]);

    return BeerSampleComponent;
  }(React.Component);

  SW.BeerSampleComponent = BeerSampleComponent;
})();
//# sourceMappingURL=beer-sample.js.map
