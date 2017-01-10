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

    getTheData() {
      console.log('load the planets');
    }

    getTheData() {
      $.ajax({
        url: 'http://api.brewerydb.com/v2/'
      })
      .done((data) => {
        console.log('got data', data);

        this.setState({
          apiResult: data
        });
      });
    }

    render(){
      console.log('render', this.state);

      if (this.state != null) {
        theList = <ul className="theList">
        {this.state.apiResult.results.map((beer, index) => { return <BeerStuff key={index} beer={beer}/>; })}
        </ul>;
      }

      return <div className="planet-list">
            <h1>Beer Test</h1>

              {theList}
              <div className="text">
              <h1>Beer Samples</h1>
              </div>
          </div>
    }
  }
  SW.BeerSampleComponent = BeerSampleComponent;
})();
