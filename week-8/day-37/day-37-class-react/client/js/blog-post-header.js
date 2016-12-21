(function() {
  class BlogPostHeader extends React.Component {
    render() {
      return <header>
        <div className="post-date">19 December 2016 12pm America/New_York</div>
        <h1>TO SAVE REAL NEWS</h1>
      </header>
    }
  }

  window.Blog.BlogPostHeader = BlogPostHeader;
})();
