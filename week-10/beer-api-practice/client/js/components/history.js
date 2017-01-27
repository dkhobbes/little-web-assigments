if (window.BeerRouter === undefined) {window.BeerRouter = {}; }
(function() {

  class MapHistory extends React.Component {
    componentDidMount() {
      console.log("sanity check");
      new google.maps.Map(this.map, {
        center: {lat: 38.032936, lng: -97.9130348},
        scrollwheel: false,
        zoom: 5
      });
    }
    render() {
      return (
        <div id="map" ref={(map) => { this.map = map; }}></div>
      )
    }
  }

  class HistoryComponent extends React.Component {
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
          <div className="nav-tabs"><ReactRouter.Link to={'/history'}>history</ReactRouter.Link></div>
        </header>
        <div className="history-bar"></div>
        <MapHistory />
        <div className="example-2">
        <p>The beer brewing industry is a major economic driver in America. There are more than 2,800 breweries in the U.S. responsible for $246.5 billion in economic output in 2012 alone. Directly and indirectly, breweries create more than 2 million American jobs.<br></br><span>www.ceres.org/declaration/about/climate-declaration-campaigns/brewery</span>
        </p>
        </div>
      </div>
    }
  }
  BeerRouter.HistoryComponent = HistoryComponent;

})();
