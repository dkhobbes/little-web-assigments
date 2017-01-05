window.SW = window.SW || {};

(function() {
  console.log('hi');

  class PlanetListComponent extends React.Component {

    constructor() {
      super();
    }

    componentDidMount() {
      console.log('AppComponent.ComponentDidMount');
      this.getTheData();
    }

    componentWillunmount() {
      console.log('AppComponent.ComponentWillunmount');
    }

    getTheData() {
      console.log('load the planets');
    }

    getTheData() {
      $.ajax({
        url: 'http://swapi.co/api/planets'
      })
      .done((data) => {
        console.log('got data', data);

        this.setState({
          apiResult: data
        });
      });
    }

    render() {
      console.log('render', this.state);
      var theList;

      if (this.state != null) {
        theList = <ul>
        {this.state.apiResult.results.map((planet, index) => { return <li key={index}>{planet.name}</li>; })}
        </ul>
      }

      return <div className="planet-list">
        <h1>Planet List</h1>

        {theList}
      </div>
    }
  }

  var mountNode = document.querySelector('#react-root');

  class AppComponent extends React.Component {
    render() {
      return <div>
        <PlanetListComponent />
      </div>;
    }
  }

  SW.PlanetListComponent = PlanetListComponent;

})();
