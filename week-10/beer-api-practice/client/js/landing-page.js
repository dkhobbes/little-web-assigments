window.SW = window.SW || {};
(function() {
  class LandingPageComponent extends React.Component {
    constructor() {
      super();
    }
    componentDidMount() {
      console.log('AppComponent.ComponentDidMount');
    }
    render(){
      return <div>
      </div>
    }
  }
  SW.LandingPageComponent = LandingPageComponent;

})();
