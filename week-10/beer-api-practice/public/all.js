'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.BeerRouter === undefined) {
  window.BeerRouter = {};
}
(function () {
  var AbvComponent = function (_React$Component) {
    _inherits(AbvComponent, _React$Component);

    function AbvComponent() {
      _classCallCheck(this, AbvComponent);

      return _possibleConstructorReturn(this, (AbvComponent.__proto__ || Object.getPrototypeOf(AbvComponent)).call(this));
    }

    _createClass(AbvComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        console.log('AppComponent.ComponentDidMount');
      }
    }, {
      key: 'getTheData',
      value: function getTheData(evt) {
        var _this2 = this;

        // if (evt.keyCode === 13) {
        $.ajax({
          url: "/api/abv"
        }).done(function (data) {
          console.log('got data');

          var dataAsObjects = JSON.parse(data);

          _this2.setState({
            apiResult: dataAsObjects
          });
        });
        // }
      }
    }, {
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'header',
            null,
            React.createElement(
              'div',
              { className: 'nav-tabs' },
              React.createElement(
                ReactRouter.Link,
                { to: '/' },
                'home'
              )
            ),
            React.createElement(
              'div',
              { className: 'nav-tabs' },
              React.createElement(
                ReactRouter.Link,
                { to: '/locator' },
                'locator'
              )
            ),
            React.createElement(
              'div',
              { className: 'nav-tabs' },
              React.createElement(
                ReactRouter.Link,
                { to: '/abv' },
                'abv'
              )
            ),
            React.createElement(
              'div',
              { className: 'nav-tabs' },
              React.createElement(
                ReactRouter.Link,
                { to: '/ibu' },
                'ibu'
              )
            )
          )
        );
      }
    }]);

    return AbvComponent;
  }(React.Component);

  BeerRouter.AbvComponent = AbvComponent;
})();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.BeerRouter === undefined) {
  window.BeerRouter = {};
}
(function () {
  var breweryId = []; //returned from the API
  var allLatlng = []; //returned from the API
  var allMarkers = []; //returned from the API
  var breweryName = []; //returned from the API
  var infowindow = null;
  var pos;
  var userCords;
  var tempMarkerHolder = [];

  var Map = function (_React$Component) {
    _inherits(Map, _React$Component);

    function Map() {
      _classCallCheck(this, Map);

      return _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).apply(this, arguments));
    }

    _createClass(Map, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        console.log("sanity check");
        new google.maps.Map(this.map, {
          center: { lat: 38.032936, lng: -97.9130348 },
          scrollwheel: false,
          zoom: 5
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        return React.createElement("div", { id: "map", ref: function ref(map) {
            _this2.map = map;
          } });
      }
    }]);

    return Map;
  }(React.Component);

  var BeerSampleComponent = function (_React$Component2) {
    _inherits(BeerSampleComponent, _React$Component2);

    function BeerSampleComponent() {
      _classCallCheck(this, BeerSampleComponent);

      return _possibleConstructorReturn(this, (BeerSampleComponent.__proto__ || Object.getPrototypeOf(BeerSampleComponent)).call(this));
    }

    _createClass(BeerSampleComponent, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        console.log('AppComponent.ComponentDidMount');
        this.getTheData();
      }
    }, {
      key: "getTheData",
      value: function getTheData(evt) {
        var _this4 = this;

        // if (evt.keyCode === 13) {
        $.ajax({
          url: "/api/beer"
        }).done(function (data) {
          console.log('got data');

          var dataAsObjects = JSON.parse(data);
          //Start geolocation
          if (navigator.geolocation) {
            var error = function error(err) {
              // console.warn('ERROR(' + err.code + '): ' + err.message);
              console.log("error-test");
            };

            var success = function success(pos) {
              userCords = pos.coords;
              // return userCords;
              console.log("sucess-test", pos.coords);

              //call API with GPS coordinates
              //add markers with breweries that fit in GPS coordinates
              //add onclick event with box of info on breweries
            };

            // Get the user's current position


            console.log(navigator.geolocation);

            navigator.geolocation.getCurrentPosition(success, error);
            // console.log(pos.latitude + " " + pos.longitude);
          } else {
            alert('Geolocation is not supported in your browser');
          }
          //End Geo location
          _this4.setState({
            apiResult: dataAsObjects
          });
        });
        // }
      }
    }, {
      key: "render",
      value: function render() {
        // console.log('render', this.state);
        var theList;

        if (this.state != null) {
          console.log(this.state);
          theList = React.createElement(
            "ul",
            { className: "theList" },
            this.state.apiResult.data.map(function (brewery, index) {
              return React.createElement(
                "li",
                { key: index },
                " (latitude: ",
                brewery.latitude,
                ") (longitude: ",
                brewery.longitude,
                ")"
              );
            }),
            ")}"
          );
        }

        return React.createElement(
          "div",
          null,
          React.createElement(
            "header",
            null,
            React.createElement(
              "div",
              { className: "nav-tabs" },
              React.createElement(
                ReactRouter.Link,
                { to: '/' },
                "home"
              )
            ),
            React.createElement(
              "div",
              { className: "nav-tabs" },
              React.createElement(
                ReactRouter.Link,
                { to: '/locator' },
                "locator"
              )
            ),
            React.createElement(
              "div",
              { className: "nav-tabs" },
              React.createElement(
                ReactRouter.Link,
                { to: '/abv' },
                "abv"
              )
            ),
            React.createElement(
              "div",
              { className: "nav-tabs" },
              React.createElement(
                ReactRouter.Link,
                { to: '/ibu' },
                "ibu"
              )
            )
          ),
          React.createElement(
            "div",
            { id: "control" },
            React.createElement(
              "h2",
              { id: "Title-beer" },
              "Find Local Breweries"
            ),
            React.createElement(
              "p",
              null,
              "We will help you locate your closest brewery. Simply type in your zip code below to begin, and map my beer."
            ),
            React.createElement(
              "form",
              { method: "get", id: "chooseZip" },
              React.createElement(
                "button",
                { type: "submit", className: "learnButton" },
                "Use current location"
              )
            )
          ),
          React.createElement(Map, null),
          React.createElement("div", { className: "example" }),
          React.createElement(
            "div",
            { className: "example-2" },
            React.createElement(
              "p",
              null,
              "Although precise numbers from the 19th century are difficult to confirm, this is almost certainly the first time the United States has crossed the 4,000 brewery barrier since the 1870s.",
              React.createElement("br", null),
              React.createElement(
                "span",
                null,
                "September 28, 2015"
              ),
              React.createElement(
                "span",
                null,
                "By Bart Watson"
              ),
              React.createElement(
                "span",
                null,
                "www.brewersassociation.org"
              )
            )
          )
        );
      }
    }]);

    return BeerSampleComponent;
  }(React.Component);

  BeerRouter.BeerSampleComponent = BeerSampleComponent;
})();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.BeerRouter === undefined) {
  window.BeerRouter = {};
}
(function () {
  var IbuComponent = function (_React$Component) {
    _inherits(IbuComponent, _React$Component);

    function IbuComponent() {
      _classCallCheck(this, IbuComponent);

      return _possibleConstructorReturn(this, (IbuComponent.__proto__ || Object.getPrototypeOf(IbuComponent)).call(this));
    }

    _createClass(IbuComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        console.log('AppComponent.ComponentDidMount');
      }
    }, {
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'header',
            null,
            React.createElement(
              'div',
              { className: 'nav-tabs' },
              React.createElement(
                ReactRouter.Link,
                { to: '/' },
                'home'
              )
            ),
            React.createElement(
              'div',
              { className: 'nav-tabs' },
              React.createElement(
                ReactRouter.Link,
                { to: '/locator' },
                'locator'
              )
            ),
            React.createElement(
              'div',
              { className: 'nav-tabs' },
              React.createElement(
                ReactRouter.Link,
                { to: '/abv' },
                'abv'
              )
            ),
            React.createElement(
              'div',
              { className: 'nav-tabs' },
              React.createElement(
                ReactRouter.Link,
                { to: '/ibu' },
                'ibu'
              )
            )
          )
        );
      }
    }]);

    return IbuComponent;
  }(React.Component);

  BeerRouter.IbuComponent = IbuComponent;
})();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.BeerRouter === undefined) {
  window.BeerRouter = {};
}
(function () {
  var LandingPageComponent = function (_React$Component) {
    _inherits(LandingPageComponent, _React$Component);

    function LandingPageComponent() {
      _classCallCheck(this, LandingPageComponent);

      return _possibleConstructorReturn(this, (LandingPageComponent.__proto__ || Object.getPrototypeOf(LandingPageComponent)).call(this));
    }

    _createClass(LandingPageComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        console.log('AppComponent.ComponentDidMount');
      }
    }, {
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'header',
            null,
            React.createElement(
              'div',
              { className: 'nav-tabs' },
              React.createElement(
                ReactRouter.Link,
                { to: '/' },
                'home'
              )
            ),
            React.createElement(
              'div',
              { className: 'nav-tabs' },
              React.createElement(
                ReactRouter.Link,
                { to: '/locator' },
                'locator'
              )
            ),
            React.createElement(
              'div',
              { className: 'nav-tabs' },
              React.createElement(
                ReactRouter.Link,
                { to: '/abv' },
                'abv'
              )
            ),
            React.createElement(
              'div',
              { className: 'nav-tabs' },
              React.createElement(
                ReactRouter.Link,
                { to: '/ibu' },
                'ibu'
              )
            )
          )
        );
      }
    }]);

    return LandingPageComponent;
  }(React.Component);

  BeerRouter.LandingPageComponent = LandingPageComponent;
})();
"use strict";

if (window.BeerRouter === undefined) {
      window.BeerRouter = {};
}

(function () {
      var mountNode = document.querySelector('#react-root');

      var Router = ReactRouter.Router;
      var Route = ReactRouter.Route;
      var IndexRoute = ReactRouter.IndexRoute;

      var router = React.createElement(
            Router,
            { history: ReactRouter.hashHistory },
            React.createElement(Route, { path: "/", component: BeerRouter.LandingPageComponent }),
            React.createElement(Route, { path: "/locator", component: BeerRouter.BeerSampleComponent }),
            React.createElement(Route, { path: "/abv", component: BeerRouter.AbvComponent }),
            React.createElement(Route, { path: "/ibu", component: BeerRouter.IbuComponent })
      );

      ReactDOM.render(router, mountNode);
})();
//# sourceMappingURL=all.js.map
