if (window.BeerRouter === undefined) {window.BeerRouter = {}; }
(function() {

  class AbvComponent extends React.Component {
    constructor() {
      super();
    }
    componentDidMount() {
      console.log('AbvComponent.ComponentDidMount');
      this.getTheData();
    }

    getTheData(evt) {
      // if (evt.keyCode === 13) {
        $.ajax({
          url: "/api/theabv"
        })
        .done((data) => {

          var dataAsObjects = JSON.parse(data);
          console.log('got data', dataAsObjects);

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
          <div className="nav-tabs"><ReactRouter.Link to={'/history'}>history</ReactRouter.Link></div>
        </header>
        <div className="ibu-content">
          <section>
            <div className="nav-tabs">2-4</div>
            <div className="nav-tabs">5-7</div>
            <div className="nav-tabs">8-10</div>
            <div className="nav-tabs">8-10</div>
            <div className="nav-tabs">11+</div>
          </section>
        </div>
      </div>
    }
  }
  BeerRouter.AbvComponent = AbvComponent;

})();
