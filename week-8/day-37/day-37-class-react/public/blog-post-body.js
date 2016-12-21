"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {
  var BlogPostBody = function (_React$Component) {
    _inherits(BlogPostBody, _React$Component);

    function BlogPostBody() {
      _classCallCheck(this, BlogPostBody);

      return _possibleConstructorReturn(this, (BlogPostBody.__proto__ || Object.getPrototypeOf(BlogPostBody)).apply(this, arguments));
    }

    _createClass(BlogPostBody, [{
      key: "render",
      value: function render() {
        return React.createElement(
          "div",
          { className: "post-body" },
          React.createElement("img", { src: "http://www.zeldman.com/wp-content/themes/zeldman/images/default.svg" }),
          React.createElement(
            "p",
            null,
            "This is the first paragraph."
          ),
          React.createElement(
            "p",
            null,
            "This is the second paragraph"
          )
        );
      }
    }]);

    return BlogPostBody;
  }(React.Component);

  window.Blog.BlogPostBody = BlogPostBody;
})();
//# sourceMappingURL=blog-post-body.js.map