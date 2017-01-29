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

                //Use the zip code and return all market ids in area.
    $.ajax({
      type: "GET",
      contentType: "application/json; charset=utf-8",
      url: "/#/locator/accessURL",
      success: function (data) {

         $.each(data.results, function (i, val) {
          breweryId.push(val.id);
          breweryName.push(val.name);
         });

        //console.log(marketName);

        var counter = 0;
        //Now, use the id to get detailed info
        $.each(breweryId, function (k, v){
          $.ajax({
            type: "GET",
            contentType: "application/json; charset=utf-8",
            // submit a get request to the restful service mktDetail.
            url: "http://api.brewerydb.com/v2/locations?key=f4b03113073283a320e1c5d0630a4d0d&locality=" + v,
            dataType: 'jsonp',
            success: function (data) {

            for (var key in data) {

              var results = data[key];

              //console.log(results);

              // //The API returns a link to Google maps containing lat and long. This pulls it apart.
              var googleLink = results['GoogleLink'];
              var latLong = decodeURIComponent(googleLink.substring(googleLink.indexOf("=")+1, googleLink.lastIndexOf("(")));

              var split = latLong.split(',');

              //covert values to floats, to play nice with .LatLng() below.
              var latitude = parseFloat(split[0]);
              var longitude = parseFloat(split[1]);

              //set the markers.
              myLatlng = new google.maps.LatLng(latitude,longitude);

              allMarkers = new google.maps.Marker({
                position: myLatlng,
                map: map,
                title: breweryName[counter],
                html:
                    '<div class="markerPop">' +
                    '<h1>' + breweryName[counter].substring(4) + '</h1>' + //substring removes distance from title
                    '<h3>' + results['Address'] + '</h3>' +
                    '<p>' + results['Products'].split(';') + '</p>' +
                    '<p>' + results['Schedule'] + '</p>' +
                    '</div>'
              });

              //put all lat long in array
              allLatlng.push(myLatlng);

              //Put the marketrs in an array
              tempMarkerHolder.push(allMarkers);

              counter++;
              //console.log(counter);
            };

              google.maps.event.addListener(allMarkers, 'click', function () {
                infowindow.setContent(this.html);
                infowindow.open(map, this);
              });


              //console.log(allLatlng);
              //  Make an array of the LatLng's of the markers you want to show
              //  Create a new viewpoint bound
              var bounds = new google.maps.LatLngBounds ();
              //  Go through each...
              for (var i = 0, LtLgLen = allLatlng.length; i < LtLgLen; i++) {
                //  And increase the bounds to take this point
                bounds.extend (allLatlng[i]);
              }
              //  Fit these bounds to the map
              map.fitBounds (bounds);


            }
          });
        }); //end .each
      }
    });
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
        <div className="nav-tabs"><ReactRouter.Link to={'/history'}>history</ReactRouter.Link></div>
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
