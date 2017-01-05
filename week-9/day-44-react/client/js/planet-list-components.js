window.SW = window.SW || {};

(function() {

  class PlanetListItem extends React.Component {

    constructor() {
      super();
      this.state = {
        isSelected: false
      };
    }

    toggle() {
      console.log('hi');
      this.setState({
        isSelected: !this.state.isSelected
      })
    }

    render() {
      var currentClass = 'planet';
      var extraInfo;

      var selectedClass;
      if (this.state.isSelected) {
        currentClass += ' on';

        extraInfo = <div>
          <img src= "https://s-media-cache-ak0.pinimg.com/736x/58/19/d9/5819d950c07b93e41f314655838038dc.jpg" className="sw-logo"/>
          <div>Climate: {this.props.planet.climate}</div>
          <div>Created: {this.props.planet.created}</div>
          <div>Diameter: {this.props.planet.diameter}</div>
          <div>Edited: {this.props.planet.edited}</div>
          <div>Gravity: {this.props.planet.gravity}</div>
          <div>Orbital-Period: {this.props.planet.orbital_period}</div>
          <div>Population: {this.props.planet.population}</div>
          <div>Rotation-period: {this.props.planet.rotation_period}</div>
          <div>Surface-Water: {this.props.planet.surface_water}</div>
          <div>Terrain: {this.props.planet.terrain}</div>
          <div><a target="_blank" href={this.props.planet.url}>{this.props.planet.name} URL link</a></div>

        </div>
      }

      return <li className={currentClass} onClick={() => {this.toggle(); }}>
      {this.props.planet.name}
      {extraInfo}
      </li>
    }
  }

  class PlanetListComponent extends React.Component {

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
        {this.state.apiResult.results.map((planet, index) => { return <PlanetListItem key={index} planet={planet}/>; })}
        </ul>;
      }

      return <div className="planet-list">
        <h1>Planet List</h1>
        {theList}
      </div>
    }
  }

  SW.PlanetListComponent = PlanetListComponent;

})();
