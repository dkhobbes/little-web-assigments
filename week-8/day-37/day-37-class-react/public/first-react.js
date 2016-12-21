'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {
  console.log('hello');

  var mountNode = document.querySelector('#firstDiv');

  var BlogPostHeader = window.Blog.BlogPostHeader;

  var BlogPostBody = window.Blog.BlogPostBody;

  var BlogPostRelated = window.Blog.BlogPostRelated;

  var BlogPost = function (_React$Component) {
    _inherits(BlogPost, _React$Component);

    function BlogPost() {
      _classCallCheck(this, BlogPost);

      return _possibleConstructorReturn(this, (BlogPost.__proto__ || Object.getPrototypeOf(BlogPost)).apply(this, arguments));
    }

    _createClass(BlogPost, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          { className: 'blog-post' },
          React.createElement(BlogPostHeader, null),
          React.createElement(BlogPostBody, null),
          React.createElement(BlogPostRelated, null)
        );
      }
    }]);

    return BlogPost;
  }(React.Component);

  ReactDOM.render(React.createElement(BlogPost, null), mountNode);
})();
//# sourceMappingURL=first-react.js.map