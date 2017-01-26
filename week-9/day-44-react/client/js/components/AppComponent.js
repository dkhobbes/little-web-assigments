if (window.SWRouter === undefined) {window.SWRouter = {}; }

(function(){
  class AppComponent extends React.Component {
    render() {
      console.log('rendering AppComponent');

      return <div>
      <header>
        <div className="tabs"><ReactRouter.Link to={'/'}>home</ReactRouter.Link></div>
        <div className="tabs"><ReactRouter.Link to={'/planets'}>planets</ReactRouter.Link></div>
        <div className="tabs"><ReactRouter.Link to={'/starships'}>starships</ReactRouter.Link></div>
      </header>
        <p>The app component</p>

        {this.props.children}

      </div>;
    }
  }
  SWRouter.AppComponent = AppComponent;
})();
