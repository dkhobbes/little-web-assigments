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
              <li></li>
              <li></li>
            </ul>
          </div>
          <div id="main-nav">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </header>
        <section>
          <div className="tabs"><ReactRouter.Link to={'/'}>home</ReactRouter.Link></div>
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
