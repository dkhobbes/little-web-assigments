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
