(function() {
  class BlogPostBody extends React.Component {
    render() {
      return  <div className="post-body">
          <img src="http://www.zeldman.com/wp-content/themes/zeldman/images/default.svg" />
          <p>This is the first paragraph.</p>
          <p>This is the second paragraph</p>
        </div>
    }
  }
  window.Blog.BlogPostBody = BlogPostBody;

})();
