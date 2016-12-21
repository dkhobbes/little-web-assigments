(function() {
  console.log('hello');

  var mountNode = document.querySelector('#firstDiv');

  var BlogPostHeader = window.Blog.BlogPostHeader;

  var BlogPostBody = window.Blog.BlogPostBody;

  var BlogPostRelated = window.Blog.BlogPostRelated;

  class BlogPost extends React.Component {
    render() {
      return <div className="blog-post">
        <BlogPostHeader />
        <BlogPostBody />
        <BlogPostRelated />
      </div>
    }
  }

ReactDOM.render(<BlogPost/>, mountNode);

})();
