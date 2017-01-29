if (window.BeerRouter === undefined) {window.BeerRouter = {}; }
(function() {

  class IbuComponent extends React.Component {
    constructor() {
      super();
    }

    componentDidMount() {
      console.log('AppComponent.ComponentDidMount');
      // this.getTheData();
      // getTheData() {
      //   $.ajax({
      //     url: "/api/ibu"
      //   })
      //   .done((data) => {
      //     console.log('got data', data);
      //
      //     var dataAsObjects = JSON.parse(data);
      //   });
      //
      //     this.setState({
      //       apiResult: dataAsObjects
      //     });
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
      </div>
    }
  }
  BeerRouter.IbuComponent = IbuComponent;
})();
