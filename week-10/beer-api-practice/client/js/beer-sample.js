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
        url: "/api/beer"

      })
      .done((data) => {
        console.log('got data', data);

        var dataAsObjects = JSON.parse(data);
        var beerUL = document.querySelector(".beer-info");
        console.log('beerMe', dataAsObjects);

        dataAsObjects.data.forEach(function(beerMe){
          console.log('beerMe', dataAsObjects);
          var li = document.createElement('li');
          li.textContent = beerMe.name;
          beerUL.appendChild(li);
        });


        this.setState({
          apiResult: data
        });
      });
    }

    render(){
      console.log('render', this.state);

      if (this.state != null) {
        theList = <ul className="theList">
        {this.state.apiResult.data.map((beer, index) => { return <BeerStuff key={index} beer={beer}/>; })}
        </ul>;
      }

      return <div className="planet-list">
            <h1>Beer Test</h1>

              <div className="text">
              <h1>Beer Samples</h1>
              </div>
          </div>
    }
  }
  SW.BeerSampleComponent = BeerSampleComponent;
})();
