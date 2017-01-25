window.SW = window.SW || {};
(function() {
  class AbvComponent extends React.Component {
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
  SW.AbvComponent = AbvComponent;

})();
