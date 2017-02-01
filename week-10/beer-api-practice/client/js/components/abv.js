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
        <div className="hops-img"></div>

        <div className="ibu-content">
          <section>
            <div className="nav-tabs"><ReactRouter.Link to={'/theabv'}>2-4</ReactRouter.Link></div>
            <div className="nav-tabs"><ReactRouter.Link to={'/theabv'}>5-7</ReactRouter.Link></div>
            <div className="nav-tabs"><ReactRouter.Link to={'/theabv'}>8-10</ReactRouter.Link></div>
            <div className="nav-tabs"><ReactRouter.Link to={'/theabv'}>11-13</ReactRouter.Link></div>
            <div className="nav-tabs"><ReactRouter.Link to={'/theabv'}>14+</ReactRouter.Link></div>
          </section>
        </div>
      </div>
    }
  }
  BeerRouter.AbvComponent = AbvComponent;

})();
