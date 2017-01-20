window.SW = window.SW || {};
(function() {



  class BeerSampleComponent extends React.Component{

    constructor() {
      super();
    }

    componentDidMount() {
      console.log('AppComponent.ComponentDidMount');
      this.getTheData();
    }

    componentWillUnmount() {
      console.log('AppComponent.ComponentWillUnmount');
    }


    getTheData(evt) {
      // if (evt.keyCode === 13) {
        $.ajax({
          url: "/api/beer"
        })
        .done((data) => {
          // console.log('got data', data);

          var dataAsObjects = JSON.parse(data);
          // var beerUL = document.querySelector(".beer-info");
          // console.log('beerMe', dataAsObjects);
          //
          // dataAsObjects.data.forEach(function(beerMe){
          //   console.log('beerMe', dataAsObjects);
          //   var li = document.createElement('li');
          //   li.textContent = beerMe.name;
          //   beerUL.appendChild(li);
          // });

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

        {this.state.apiResult.data.map((nested) => {
          return nested.breweries.map((brewery, index) => {
            return <li key={index}> {brewery.name} (status: {brewery.status})
              <ol>
                {brewery.locations.map((location, index) => {
                  return <li key={index}> (latitude: {location.latitude}, longitude: {location.longitude}) </li>
                })}
              </ol>
            </li>
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
