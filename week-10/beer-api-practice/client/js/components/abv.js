if (window.BeerRouter === undefined) {window.BeerRouter = {}; }
(function() {
  class AbvComponent extends React.Component {
    constructor() {
      super();
    }
    componentDidMount() {
      console.log('AppComponent.ComponentDidMount');
    }

    getTheData(evt) {
      // if (evt.keyCode === 13) {
        $.ajax({
          url: "/api/abv"
        })
        .done((data) => {
          console.log('got data');

          var dataAsObjects = JSON.parse(data);

          this.setState({
            apiResult: dataAsObjects
          });
        });
      // }
    }

    render(){
      return <div>
        <header>
          <div className="nav-tabs"><ReactRouter.Link to={'/'}>home</ReactRouter.Link></div>
          <div className="nav-tabs"><ReactRouter.Link to={'/locator'}>locator</ReactRouter.Link></div>
          <div className="nav-tabs"><ReactRouter.Link to={'/abv'}>abv</ReactRouter.Link></div>
          <div className="nav-tabs"><ReactRouter.Link to={'/ibu'}>ibu</ReactRouter.Link></div>
        </header>
      </div>
    }
  }
  BeerRouter.AbvComponent = AbvComponent;

})();
