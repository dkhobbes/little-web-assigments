if (window.BlogTest === undefined) {window.BlogTest = {}; }
(function() {
  class BlogPostFourComponent extends React.Component {
    constructor() {
      super();
    }

    render(){
      return <div>
        <header>
          <div id="eyebrow-nav">
          <ul>
            <li><ReactRouter.Link to={'/'}>Home</ReactRouter.Link></li>
            <li>About</li>
            <li>My books</li>
          </ul>
        </div>
        <div id="main-nav">
          <ul>
            <li>New releases</li>
            <li>Popular</li>
            <li>Categories</li>
            <li>Recent Posts</li>
            <li>Author Interviews</li>
          </ul>
          </div>
        </header>
        <section>
          <div>example post</div>
        </section>
      </div>
    }
  }

  BlogTest.BlogPostFourComponent = BlogPostFourComponent;
})();
