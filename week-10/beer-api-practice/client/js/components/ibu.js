window.SW = window.SW || {};
(function() {
  class IbuComponent extends React.Component {
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
  SW.IbuComponent = IbuComponent;

})();
