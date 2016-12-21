(function() {
  console.log('hello');

  var mountNode = document.querySelector('#firstDiv');

  var BlogPostHeader = window.Blog.BlogPostHeader;
  var BlogPostBody = window.Blog.BlogPostBody;
  var BlogPostRelated = window.Blog.BlogPostRelated;

  class BlogPost extends React.Component {
    render() {

      var dateInfo = '19 December 2016 12pm America/New_York';
      var imageUrl = 'http://www.zeldman.com/wp-content/themes/zeldman/images/default.svg';

      return <div className="blog-post">
        <BlogPostHeader date={dateInfo} />
        <BlogPostBody bodypic={imageUrl} />
        <BlogPostRelated />
      </div>
    }
  }

ReactDOM.render(<BlogPost/>, mountNode);

})();
