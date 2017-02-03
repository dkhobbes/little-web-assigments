"use strict";

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
      key: "componentDidMount",
      value: function componentDidMount() {
        console.log('AbvComponent.ComponentDidMount');
        // this.getTheData();
      }
    }, {
      key: "getTheData",
      value: function getTheData(evt, query) {
        var _this2 = this;

        // var param = query
        // if (evt.keyCode === 13) {
        $.ajax({
          url: "/api/theabv/" + query
        }).done(function (data) {

          var dataAsObjects = JSON.parse(data);
          // console.log('got data', dataAsObjects);

          _this2.setState({
            apiResult: dataAsObjects
          });
        });
        // }
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        var theList;

        if (this.state != null) {
          console.log(this.state);
          theList = React.createElement(
            "ul",
            { className: "theList" },
            this.state.apiResult.data.map(function (abv, index) {
              return React.createElement(
                "li",
                { key: index },
                " ",
                React.createElement("img", { src: abv.labels.medium, className: "abvIbuImg" }),
                React.createElement(
                  "h2",
                  { className: "beerImgText" },
                  "Abv:",
                  abv.abv
                ),
                " "
              );
            })
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
            { className: "abvIbu-bkgd" },
            React.createElement("div", { className: "hops-img" }),
            React.createElement(
              "div",
              { className: "ibu-content" },
              React.createElement(
                "section",
                null,
                React.createElement(
                  "div",
                  { className: "nav-2", onClick: function onClick(evt) {
                      _this3.getTheData(evt, "2,4");
                    } },
                  " 2-4"
                ),
                React.createElement(
                  "div",
                  { className: "nav-2", onClick: function onClick(evt) {
                      _this3.getTheData(evt, "5,7");
                    } },
                  "5-7"
                ),
                React.createElement(
                  "div",
                  { className: "nav-2", onClick: function onClick(evt) {
                      _this3.getTheData(evt, "8,10");
                    } },
                  "8-10"
                ),
                React.createElement(
                  "div",
                  { className: "nav-2", onClick: function onClick(evt) {
                      _this3.getTheData(evt, "11,13");
                    } },
                  "11-13"
                ),
                React.createElement(
                  "div",
                  { className: "nav-2", onClick: function onClick(evt) {
                      _this3.getTheData(evt, "14,80");
                    } },
                  "14+"
                )
              ),
              theList
            )
          )
        );
      }
    }]);

    return AbvComponent;
  }(React.Component);

  BeerRouter.AbvComponent = AbvComponent;
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
      key: 'componentDidMount',
      value: function componentDidMount() {
        console.log("sanity check");

        var myLatLng = { lat: 38.032936, lng: -97.9130348 };

        this.googleMap = new google.maps.Map(this.map, {
          center: myLatLng,
          scrollwheel: false,
          zoom: 5
        });

        {/*  var contentString = '<div id="content">'+
                 '<h1 id="firstHeading">brewery.streetAdress</h1>'+
                 '<h3>' + ['Address'] + '</h3>' +
                 '<p>' + ['Schedule'] + '</p>' +
                 '</div>';
            var infowindow = new google.maps.InfoWindow({
               content: contentString
             });
           var marker = new google.maps.Marker({
             position: myLatLng,
             map: this.googleMap,
             title: 'Hello World!'
           });
           marker.addListener('click', function() {
               infowindow.open(map, marker);
             });
            console.log("props", this.props); */}
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        var _this2 = this;

        console.log('willReceiveProps test', this.props);

        this.props.info.data.forEach(function (brewery) {
          console.log(brewery);
          var myLatLng = { lat: brewery.latitude, lng: brewery.longitude };
          console.log(myLatLng);
          console.log(_this2.googleMap);

          var marker = new google.maps.Marker({
            position: myLatLng,
            map: _this2.googleMap,
            title: 'Hello World!'
          });
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;

        console.log('sanity check 2');
        return React.createElement('div', { id: 'map', ref: function ref(map) {
            _this3.map = map;
          } });
      }
    }]);

    return Map;
  }(React.Component);

  var BeerSampleComponent = function (_React$Component2) {
    _inherits(BeerSampleComponent, _React$Component2);

    function BeerSampleComponent() {
      _classCallCheck(this, BeerSampleComponent);

      var _this4 = _possibleConstructorReturn(this, (BeerSampleComponent.__proto__ || Object.getPrototypeOf(BeerSampleComponent)).call(this));

      _this4.state = { apiResult: { data: [] } };
      return _this4;
    }

    _createClass(BeerSampleComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        console.log('AppComponent.ComponentDidMount');
        // this.getTheData();
        // this.myInput;
      }
    }, {
      key: 'getTheData',
      value: function getTheData(evt) {
        var _this5 = this;

        // console.log(evt);
        // if (evt.keyCode === 13) {
        // var zip =input.value
        $.ajax({
          url: "/api/state/" + this.myInput.value
        }).done(function (data) {

          var dataAsObjects = JSON.parse(data);
          console.log('got data', dataAsObjects);

          _this5.setState({
            apiResult: dataAsObjects
          });
        });
        // }
      }
    }, {
      key: 'keyUp',
      value: function keyUp(evt) {
        if (evt.keyCode === 13) {
          this.getTheData(evt.target.value);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this6 = this;

        console.log('render', this.state);
        var theList;

        if (this.state != null) {
          console.log(this.state);
          theList = React.createElement(
            'ul',
            { className: 'theList' },
            this.state.apiResult.data.map(function (brewery, index) {
              return React.createElement(
                'li',
                { key: index },
                ' (latitude: ',
                brewery.latitude,
                ') (longitude: ',
                brewery.longitude,
                ')'
              );
            }),
            ')}'
          );
        }

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
          ),
          React.createElement(
            'div',
            { id: 'control' },
            React.createElement(
              'h2',
              { id: 'Title-beer' },
              'Find Local Breweries'
            ),
            React.createElement(
              'p',
              null,
              'We will help you locate your closest brewery. Simply type in your zip code below to begin, and map my beer.'
            ),
            React.createElement(
              'form',
              { method: 'get', id: 'chooseZip' },
              React.createElement(
                'div',
                { className: 'zipSearch' },
                React.createElement('input', { id: 'textZip', type: 'text', placeholder: 'enter state', onKeyUp: function onKeyUp(evt) {
                    _this6.keyUp(evt);
                  }, ref: function ref(input) {
                    _this6.myInput = input;
                  } }),
                React.createElement(
                  'button',
                  { type: 'submit', className: 'learnButton', onClick: function onClick(evt) {
                      _this6.getTheData(evt);
                    } },
                  'Search for State'
                )
              )
            )
          ),
          React.createElement(Map, { info: this.state.apiResult }),
          React.createElement('div', { className: 'example' }),
          React.createElement(
            'div',
            { className: 'example-2' },
            React.createElement(
              'p',
              null,
              'Although precise numbers from the 19th century are difficult to confirm, this is almost certainly the first time the United States has crossed the 4,000 brewery barrier since the 1870s.',
              React.createElement('br', null),
              React.createElement(
                'span',
                null,
                'September 28, 2015'
              ),
              React.createElement(
                'span',
                null,
                'By Bart Watson'
              ),
              React.createElement(
                'span',
                null,
                'www.brewersassociation.org'
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
  var MapHistory = function (_React$Component) {
    _inherits(MapHistory, _React$Component);

    function MapHistory() {
      _classCallCheck(this, MapHistory);

      return _possibleConstructorReturn(this, (MapHistory.__proto__ || Object.getPrototypeOf(MapHistory)).apply(this, arguments));
    }

    _createClass(MapHistory, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        console.log("sanity check");
        var myLatLng = { lat: 31.032936, lng: -99.9130348 };
        this.googleMap = new google.maps.Map(this.map, {
          center: myLatLng,
          scrollwheel: false,
          zoom: 7
        });
        var marker = new google.maps.Marker({
          position: myLatLng,
          map: this.googleMap,
          title: 'Hello World!'
        });
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        var _this2 = this;

        console.log('willReceiveProps test', this.props);

        this.props.info.data.forEach(function (brewery) {
          console.log(brewery);
          var myLatLng = { lat: brewery.latitude, lng: brewery.longitude };
          console.log(myLatLng);
          console.log(_this2.googleMap);

          var marker = new google.maps.Marker({
            position: myLatLng,
            map: _this2.googleMap,
            title: 'Hello World!'
          });
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;

        return React.createElement('div', { id: 'map', ref: function ref(map) {
            _this3.map = map;
          } });
      }
    }]);

    return MapHistory;
  }(React.Component);

  var HistoryComponent = function (_React$Component2) {
    _inherits(HistoryComponent, _React$Component2);

    function HistoryComponent() {
      _classCallCheck(this, HistoryComponent);

      var _this4 = _possibleConstructorReturn(this, (HistoryComponent.__proto__ || Object.getPrototypeOf(HistoryComponent)).call(this));

      _this4.state = { apiResult: {
          data: []
        }
      };

      return _this4;
    }

    _createClass(HistoryComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        console.log('AppComponent.ComponentDidMount');
        this.getTheData();
      }
    }, {
      key: 'getTheData',
      value: function getTheData(evt) {
        var _this5 = this;

        // if (evt.keyCode === 13) {
        $.ajax({
          url: "/api/texas"
        }).done(function (data) {
          console.log('got data');

          var dataAsObjects = JSON.parse(data);

          _this5.setState({
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
          ),
          React.createElement(
            'div',
            { className: 'history-bar' },
            React.createElement(
              'h1',
              { id: 'Title-beer' },
              'Texas Brewery History'
            ),
            React.createElement(
              'p',
              null,
              'Watch the history of Texas Breweries in front of you.'
            ),
            React.createElement(
              'button',
              { type: 'submit', className: 'runButton' },
              'Run History'
            ),
            React.createElement(
              'button',
              { type: 'submit', className: 'resetButton' },
              'Reset'
            )
          ),
          React.createElement(MapHistory, { info: this.state.apiResult }),
          React.createElement(
            'div',
            { className: 'example-2' },
            React.createElement(
              'p',
              null,
              'The beer brewing industry is a major economic driver in America. There are more than 2,800 breweries in the U.S. responsible for $246.5 billion in economic output in 2012 alone. Directly and indirectly, breweries create more than 2 million American jobs.',
              React.createElement('br', null),
              React.createElement(
                'span',
                null,
                'www.ceres.org/declaration/about/climate-declaration-campaigns/brewery'
              )
            )
          )
        );
      }
    }]);

    return HistoryComponent;
  }(React.Component);

  BeerRouter.HistoryComponent = HistoryComponent;
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
  var Ibu2and4Component = function (_React$Component) {
    _inherits(Ibu2and4Component, _React$Component);

    function Ibu2and4Component() {
      _classCallCheck(this, Ibu2and4Component);

      return _possibleConstructorReturn(this, (Ibu2and4Component.__proto__ || Object.getPrototypeOf(Ibu2and4Component)).call(this));
    }

    _createClass(Ibu2and4Component, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        console.log('IbuComponent.ComponentDidMount');
        // this.getTheData();
      }
    }]);

    return Ibu2and4Component;
  }(React.Component);

  var IbuComponent = function (_React$Component2) {
    _inherits(IbuComponent, _React$Component2);

    function IbuComponent() {
      _classCallCheck(this, IbuComponent);

      return _possibleConstructorReturn(this, (IbuComponent.__proto__ || Object.getPrototypeOf(IbuComponent)).call(this));
    }

    _createClass(IbuComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        console.log('IbuComponent.ComponentDidMount');
        // this.getTheData();
      }
    }, {
      key: 'getTheData',
      value: function getTheData(evt, query) {
        var _this3 = this;

        // var param = query;

        $.ajax({
          url: "/api/theibu/" + query
        }).done(function (data) {

          var dataAsObjects = JSON.parse(data);
          console.log('got data', dataAsObjects);

          _this3.setState({
            apiResult: dataAsObjects
          });
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this4 = this;

        var theList;

        if (this.state != null) {
          console.log(this.state);
          theList = React.createElement(
            'ul',
            { className: 'theList' },
            this.state.apiResult.data.map(function (ibu, index) {
              return React.createElement(
                'li',
                { key: index },
                ' ',
                React.createElement('img', { src: ibu.labels.medium, className: 'abvIbuImg' }),
                React.createElement(
                  'h2',
                  { className: 'beerImgText' },
                  'Ibu:',
                  ibu.ibu
                ),
                ' '
              );
            })
          );
        }

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
          ),
          React.createElement(
            'div',
            { className: 'abvIbu-bkgd' },
            React.createElement('div', { className: 'hops-img' }),
            React.createElement(
              'div',
              { className: 'ibu-content' },
              React.createElement(
                'section',
                null,
                React.createElement(
                  'div',
                  { className: 'nav-2', onClick: function onClick(evt) {
                      _this4.getTheData(evt, "10,19");
                    } },
                  '10-19'
                ),
                React.createElement(
                  'div',
                  { className: 'nav-2', onClick: function onClick(evt) {
                      _this4.getTheData(evt, "20,39");
                    } },
                  '20-39'
                ),
                React.createElement(
                  'div',
                  { className: 'nav-2', onClick: function onClick(evt) {
                      _this4.getTheData(evt, "40,70");
                    } },
                  '40-70'
                ),
                React.createElement(
                  'div',
                  { className: 'nav-2', onClick: function onClick(evt) {
                      _this4.getTheData(evt, "71,100");
                    } },
                  '71-100'
                ),
                React.createElement(
                  'div',
                  { className: 'nav-2', onClick: function onClick(evt) {
                      _this4.getTheData(evt, "101,250");
                    } },
                  '101+'
                )
              ),
              theList
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
          ),
          React.createElement(
            'div',
            { id: 'home-picture' },
            React.createElement(
              'div',
              { id: 'divs2center' },
              React.createElement(
                'div',
                { className: 'home-section', id: 'home-center' },
                React.createElement(
                  'h1',
                  null,
                  'Welcome to Beer Me Finder'
                )
              ),
              React.createElement(
                'div',
                { className: 'home-section', id: 'home-2' },
                React.createElement(
                  'p',
                  null,
                  'Please enjoy this application devouted to the beer and Breweries near you. You can look at the breweries in your area, or see what beer has the highest abv to kick your butt.'
                )
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
            React.createElement(Route, { path: "/ibu", component: BeerRouter.IbuComponent }),
            React.createElement(Route, { path: "/history", component: BeerRouter.HistoryComponent })
      );

      ReactDOM.render(router, mountNode);
})();
//# sourceMappingURL=all.js.map
