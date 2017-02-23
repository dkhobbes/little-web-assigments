if (window.BlogTest === undefined) {window.BlogTest = {}; }
(function() {
  class ArchiveComponent extends React.Component {
    constructor() {
      super();
    }

    render(){
      return <div>
      <section>
        <div className="tabs"><ReactRouter.Link to={'/'}>home</ReactRouter.Link></div>
        <div className="tabs"><ReactRouter.Link to={'/PostOne'}>starships</ReactRouter.Link></div>
        <div className="tabs"><ReactRouter.Link to={'/PostTwo'}>films</ReactRouter.Link></div>
        <div className="tabs"><ReactRouter.Link to={'/PostThree'}>people</ReactRouter.Link></div>
        <div className="tabs"><ReactRouter.Link to={'/PostFour'}>vehicles</ReactRouter.Link></div>
        <div className="tabs"><ReactRouter.Link to={'/PostFive'}>species</ReactRouter.Link></div>
      </section>
      </div>
    }
  }

  BlogTest.ArchiveComponent = ArchiveComponent;
})();
