"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.BlogTest === undefined) {
  window.BlogTest = {};
}
(function () {
  var BlogPostFourComponent = function (_React$Component) {
    _inherits(BlogPostFourComponent, _React$Component);

    function BlogPostFourComponent() {
      _classCallCheck(this, BlogPostFourComponent);

      return _possibleConstructorReturn(this, (BlogPostFourComponent.__proto__ || Object.getPrototypeOf(BlogPostFourComponent)).call(this));
    }

    _createClass(BlogPostFourComponent, [{
      key: "render",
      value: function render() {
        return React.createElement(
          "div",
          null,
          React.createElement(
            "header",
            null,
            React.createElement(
              "div",
              { id: "eyebrow-nav" },
              React.createElement(
                "ul",
                null,
                React.createElement("li", null),
                React.createElement("li", null)
              )
            ),
            React.createElement(
              "div",
              { id: "main-nav" },
              React.createElement(
                "ul",
                null,
                React.createElement("li", null),
                React.createElement("li", null),
                React.createElement("li", null),
                React.createElement("li", null),
                React.createElement("li", null)
              )
            )
          )
        );
      }
    }]);

    return BlogPostFourComponent;
  }(React.Component);

  BlogTest.BlogPostFourComponent = BlogPostFourComponent;
})();
//# sourceMappingURL=blog-post-4.js.map
