window.SW = window.SW || {};
(function() {
  var breweryId = []; //returned from the API
	var allLatlng = []; //returned from the API
	var allMarkers = []; //returned from the API
	var breweryName = []; //returned from the API
	var infowindow = null;
	var pos;
	var userCords;
	var tempMarkerHolder = [];


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
                console.log("sucess-test", pos);
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
        {theList}
        </div>
    }
  }
  SW.BeerSampleComponent = BeerSampleComponent;
})();
