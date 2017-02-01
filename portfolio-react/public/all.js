"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.Portfolio === undefined) {
  window.Portfolio = {};
}
(function () {
  var HomeComponent = function (_React$Component) {
    _inherits(HomeComponent, _React$Component);

    function HomeComponent() {
      _classCallCheck(this, HomeComponent);

      return _possibleConstructorReturn(this, (HomeComponent.__proto__ || Object.getPrototypeOf(HomeComponent)).call(this));
    }

    _createClass(HomeComponent, [{
      key: "render",
      value: function render() {
        return React.createElement(
          "div",
          null,
          React.createElement(
            "header",
            null,
            React.createElement("section", { id: "banner" }),
            React.createElement(
              "div",
              { className: "nav-tab nav-1" },
              React.createElement(
                ReactRouter.Link,
                { to: '/' },
                "home"
              )
            ),
            React.createElement(
              "div",
              { className: "nav-tab" },
              React.createElement(
                ReactRouter.Link,
                { to: '/resume' },
                "resume"
              )
            )
          ),
          React.createElement(
            "section",
            null,
            React.createElement(
              "h1",
              { id: "name-holder" },
              "DAVID KURTH"
            ),
            React.createElement(
              "p",
              { className: "info-me", id: "space" },
              "Front End Developer"
            ),
            React.createElement("div", { className: "ending-bar" })
          ),
          React.createElement(
            "section",
            { className: "info-me" },
            React.createElement(
              "div",
              { className: "container" },
              React.createElement(
                "div",
                { className: "client-height" },
                React.createElement(
                  "div",
                  { className: "shown" },
                  React.createElement(
                    "h1",
                    null,
                    "Summary"
                  ),
                  React.createElement(
                    "p",
                    null,
                    "This is my path. Originally an IT Recruiter for over 5 years I have always had an interest in creating and making things. I started out as a Graphic Design student in college for 3 years before I missed the cut. I then went on to get an Advertising degree. I like to brew my own beer."
                  ),
                  React.createElement(
                    "h1",
                    null,
                    "Skills"
                  ),
                  React.createElement(
                    "p",
                    null,
                    "My skills involve working with HTML5, CSS3, JS, Node.JS, React, and Express. I am a quick learner, and love to learn. I am currently reading up on Express, and mongoDB."
                  ),
                  React.createElement(
                    "p",
                    null,
                    "To read more about me click below."
                  )
                ),
                React.createElement(
                  "div",
                  { className: "hidden" },
                  React.createElement(
                    "p",
                    null,
                    "My other skills include an interest in ....."
                  )
                )
              )
            ),
            React.createElement(
              "div",
              { className: "read-more-trigger" },
              React.createElement(
                "span",
                { className: "arrow" },
                "\u25BE"
              ),
              React.createElement(
                "span",
                { className: "read-more" },
                "Read more"
              ),
              React.createElement(
                "span",
                { className: "read-less" },
                "Read less"
              )
            ),
            React.createElement("div", { className: "ending-bar" })
          )
        );
      }
    }]);

    return HomeComponent;
  }(React.Component);

  Portfolio.HomeComponent = HomeComponent;
})();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.Portfolio === undefined) {
  window.Portfolio = {};
}
(function () {
  var ResumeComponent = function (_React$Component) {
    _inherits(ResumeComponent, _React$Component);

    function ResumeComponent() {
      _classCallCheck(this, ResumeComponent);

      return _possibleConstructorReturn(this, (ResumeComponent.__proto__ || Object.getPrototypeOf(ResumeComponent)).call(this));
    }

    _createClass(ResumeComponent, [{
      key: "render",
      value: function render() {
        return React.createElement(
          "div",
          null,
          React.createElement(
            "header",
            null,
            React.createElement("section", { id: "banner" }),
            React.createElement(
              "div",
              { className: "nav-tab nav-1" },
              React.createElement(
                ReactRouter.Link,
                { to: '/' },
                "home"
              )
            ),
            React.createElement(
              "div",
              { className: "nav-tab" },
              React.createElement(
                ReactRouter.Link,
                { to: '/resume' },
                "resume"
              )
            )
          ),
          React.createElement(
            "section",
            { className: "section-margin" },
            React.createElement(
              "h1",
              null,
              "David Kurth"
            ),
            React.createElement(
              "h2",
              null,
              "github:"
            ),
            React.createElement(
              "h2",
              null,
              "portfolio:"
            ),
            React.createElement(
              "h2",
              null,
              "linkedIn:"
            ),
            React.createElement("div", { className: "ending-bar" })
          ),
          React.createElement(
            "section",
            { className: "section-margin" },
            React.createElement(
              "h1",
              null,
              "Summary of Qualifications"
            ),
            React.createElement("div", { className: "ending-bar" })
          ),
          React.createElement(
            "section",
            { className: "section-margin" },
            React.createElement(
              "h1",
              null,
              "Work Experience"
            ),
            React.createElement("div", { className: "ending-bar" })
          ),
          React.createElement(
            "section",
            { className: "section-margin" },
            React.createElement(
              "h1",
              null,
              "Education"
            ),
            React.createElement("div", { className: "ending-bar" })
          )
        );
      }
    }]);

    return ResumeComponent;
  }(React.Component);

  Portfolio.ResumeComponent = ResumeComponent;
})();
"use strict";

if (window.Portfolio === undefined) {
      window.Portfolio = {};
}

(function () {
      var mountNode = document.querySelector('#react-root');

      var Router = ReactRouter.Router;
      var Route = ReactRouter.Route;
      var IndexRoute = ReactRouter.IndexRoute;

      var router = React.createElement(
            Router,
            { history: ReactRouter.hashHistory },
            React.createElement(Route, { path: "/", component: Portfolio.HomeComponent }),
            React.createElement(Route, { path: "/resume", component: Portfolio.ResumeComponent })
      );

      ReactDOM.render(router, mountNode);
})();
//# sourceMappingURL=all.js.map
