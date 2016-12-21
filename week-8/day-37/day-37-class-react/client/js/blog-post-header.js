(function() {
  class BlogPostHeader extends React.Component {
    render() {
      var title = 'TO SAVE REAL NEWS';
      console.log('props', this.props);

      return <header>
        <div className="post-date">{this.props.date}</div>
        <h1>{title}</h1>
      </header>
    }
  }

  window.Blog.BlogPostHeader = BlogPostHeader;
})();
