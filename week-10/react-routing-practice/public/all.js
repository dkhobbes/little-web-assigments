'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.RouterDemo === undefined) {
  window.RouterDemo = {};
}

(function () {
  var AppComponent = function (_React$Component) {
    _inherits(AppComponent, _React$Component);

    function AppComponent() {
      _classCallCheck(this, AppComponent);

      return _possibleConstructorReturn(this, (AppComponent.__proto__ || Object.getPrototypeOf(AppComponent)).apply(this, arguments));
    }

    _createClass(AppComponent, [{
      key: 'render',
      value: function render() {
        console.log('rendering AppComponent');

        return React.createElement(
          'div',
          null,
          React.createElement(
            'p',
            null,
            'The app component'
          ),
          this.props.children
        );
      }
    }]);

    return AppComponent;
  }(React.Component);

  RouterDemo.AppComponent = AppComponent;
})();
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
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.RouterDemo === undefined) {
  window.RouterDemo = {};
}

(function () {
  var SecondComponent = function (_React$Component) {
    _inherits(SecondComponent, _React$Component);

    function SecondComponent() {
      _classCallCheck(this, SecondComponent);

      return _possibleConstructorReturn(this, (SecondComponent.__proto__ || Object.getPrototypeOf(SecondComponent)).apply(this, arguments));
    }

    _createClass(SecondComponent, [{
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
            "Second Component"
          ),
          React.createElement(
            "p",
            null,
            "This is the second component. That button below shows you how to go back in browser history."
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

    return SecondComponent;
  }(React.Component);

  RouterDemo.SecondComponent = SecondComponent;
})();
"use strict";

if (window.RouterDemo === undefined) {
  window.RouterDemo = {};
}

(function () {

  var mountNode = document.querySelector('#react-root');

  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  //This is the router. The router itself has no visible manifestation on the page.
  //  Its purpose is to decide what goes on the page.
  //
  //Here is a little rundown of what you see below.
  //  * The <Router>...</Router> component defines the router. Everything in it
  //    is about router configuration. In that `history={ReactRouter.hashHistory}`
  //    configures React to put route changes on the hash rather than change the
  //    actual path. This is better for you at this point. For more info:
  //    https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md
  //  * The routes have path attributes. Those define which hash path maps to which component.
  //  * FirstComponent - You will see this if you go to the root hash path. If you
  //    include that with the path, FirstComponent shows up at http://localhost:5003/#/
  //  * SecondComponent - You will see this if you go to /second. If you include that
  //    with the path, that's http://localhost:5003/#/second

  var router = React.createElement(
    Router,
    { history: ReactRouter.hashHistory },
    React.createElement(Route, { path: "/", component: RouterDemo.FirstComponent }),
    React.createElement(Route, { path: "/second", component: RouterDemo.SecondComponent })
  );

  ReactDOM.render(router, mountNode);
})();
//# sourceMappingURL=all.js.map
