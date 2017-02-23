if (window.BlogTest === undefined) {window.BlogTest = {}; }
(function() {
  class MainPageComponent extends React.Component {
    constructor() {
      super();
    }

    render(){
      return <div>
        <header>
          <div id="eyebrow-nav">
          <ul>
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
          <div className="tabs"><ReactRouter.Link to={'/PostOne'}>one</ReactRouter.Link></div>
          <div className="tabs"><ReactRouter.Link to={'/PostTwo'}>two</ReactRouter.Link></div>
          <div className="tabs"><ReactRouter.Link to={'/PostThree'}>three</ReactRouter.Link></div>
          <div className="tabs"><ReactRouter.Link to={'/PostFour'}>four</ReactRouter.Link></div>
          <div className="tabs"><ReactRouter.Link to={'/PostFive'}>five</ReactRouter.Link></div>
        </section>
      </div>
    }
  }

  BlogTest.MainPageComponent = MainPageComponent;
})();
