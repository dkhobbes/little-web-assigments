(function() {
  class BlogPostRelated extends React.Component {
    render() {
        return <div className="related">

        <h2>RELATED</h2>

        <ul>
          <li>
            <h3>Curse of the Zeldman Curse</h3>
            <div className="date">2 March 2013</div>
            <div className="category">In "Apple"</div>
          </li>
          <li>
            <h3>Val Head: Web Animation in the Design Process</h3>
            <div className="date">8 November 2016</div>
            <div className="category">In "An Event Apart"</div>
          </li>
          <li>
            <h3>Like and Friend are broken in Facebook.</h3>
            <div className="date">3 March 2011</div>
            <div className="category">In "Design"</div>
          </li>
        </ul>

      </div>
    }
  }
  window.Blog.BlogPostRelated = BlogPostRelated;

})();
