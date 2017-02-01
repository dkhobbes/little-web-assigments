if (window.BeerRouter === undefined) {window.BeerRouter = {}; }
(function() {

  class Ibu2and4Component extends React.Component {
    constructor() {
      super();
    }
    componentDidMount() {
      console.log('IbuComponent.ComponentDidMount');
      // this.getTheData();
    }

  }


  class IbuComponent extends React.Component {
    constructor() {
      super();
    }

    componentDidMount() {
      console.log('IbuComponent.ComponentDidMount');
      this.getTheData();
    }

      getTheData() {
        $.ajax({
          url: "/api/theibu"
        })
        .done((data) => {

          var dataAsObjects = JSON.parse(data);
          console.log('got data', dataAsObjects);

          this.setState({
            apiResult: dataAsObjects
          })
        });

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
            <div className="nav-tabs"><ReactRouter.Link to={'/theibu'}>10-19</ReactRouter.Link></div>
            <div className="nav-tabs"><ReactRouter.Link to={'/theibu'}>20-39</ReactRouter.Link></div>
            <div className="nav-tabs"><ReactRouter.Link to={'/theibu'}>40-70</ReactRouter.Link></div>
            <div className="nav-tabs"><ReactRouter.Link to={'/theibu'}>71-100</ReactRouter.Link></div>
            <div className="nav-tabs"><ReactRouter.Link to={'/theibu'}>101+</ReactRouter.Link></div>
          </section>
        </div>
      </div>
    }
  }
  BeerRouter.IbuComponent = IbuComponent;
})();
