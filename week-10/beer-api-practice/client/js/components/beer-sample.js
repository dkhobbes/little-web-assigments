if (window.BeerRouter === undefined) {window.BeerRouter = {}; }
(function() {
  var breweryId = []; //returned from the API
	var allLatlng = []; //returned from the API
	var allMarkers = []; //returned from the API
	var breweryName = []; //returned from the API
	var infowindow = null;
	var pos;
	var userCords;
	var tempMarkerHolder = [];

class Map extends React.Component {
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


  class BeerSampleComponent extends React.Component{

    constructor() {
      super();
    }

    componentDidMount() {
      console.log('AppComponent.ComponentDidMount');
      this.getTheData();
    }

    getTheData(evt) {
      // if (evt.keyCode === 13) {
        $.ajax({
          url: "/api/beer"
        })
        .done((data) => {
          console.log('got data');

          var dataAsObjects = JSON.parse(data);
          //Start geolocation
          if (navigator.geolocation) {
            console.log(navigator.geolocation);

              function error(err) {
                // console.warn('ERROR(' + err.code + '): ' + err.message);
                console.log("error-test");
              }

              function success(pos){
                userCords = pos.coords;
                // return userCords;
                console.log("sucess-test", pos.coords);


                //call API with GPS coordinates
                //add markers with breweries that fit in GPS coordinates
                //add onclick event with box of info on breweries
              }

              // Get the user's current position
              navigator.geolocation.getCurrentPosition(success, error);
              // console.log(pos.latitude + " " + pos.longitude);
            }
          else {
                alert('Geolocation is not supported in your browser');
              }
          //End Geo location
          this.setState({
            apiResult: dataAsObjects
          });
        });
      // }
    }

    render(){
      // console.log('render', this.state);
      var theList;

      if (this.state != null) {
        console.log(this.state);
        theList = <ul className="theList">

        {this.state.apiResult.data.map((brewery, index) => {
          return <li key={index}> (latitude: {brewery.latitude}) (longitude: {brewery.longitude})</li>
          })
        })}
        </ul>;
      }

      return <div>
      <header>
        <div className="nav-tabs"><ReactRouter.Link to={'/'}>home</ReactRouter.Link></div>
        <div className="nav-tabs"><ReactRouter.Link to={'/locator'}>locator</ReactRouter.Link></div>
        <div className="nav-tabs"><ReactRouter.Link to={'/abv'}>abv</ReactRouter.Link></div>
        <div className="nav-tabs"><ReactRouter.Link to={'/ibu'}>ibu</ReactRouter.Link></div>
      </header>
      <div id="control">
        <h2 id="Title-beer">Find Local Breweries</h2>
        <p>We will help you locate your closest brewery. Simply type in your zip code below to begin, and map my beer.</p>
        <form method="get" id="chooseZip">
          <button type="submit" className="learnButton">Use current location</button>
        </form>
      </div>
      <Map />
      <div className="example"></div>
      <div className="example-2">
      <p>Although precise numbers from the 19th century are difficult to confirm, this is almost certainly the first time the United States has crossed the 4,000 brewery barrier since the 1870s.<br></br><span>September 28, 2015</span><span>By Bart Watson</span><span>www.brewersassociation.org</span>
      </p>
      </div>
        {/*{theList}*/}
      </div>
    }
  }
  BeerRouter.BeerSampleComponent = BeerSampleComponent;
})();
