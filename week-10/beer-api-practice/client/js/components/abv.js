window.SW = window.SW || {};
(function() {
  class AbvComponent extends React.Component {
    constructor() {
      super();
    }
    componentDidMount() {
      console.log('AppComponent.ComponentDidMount');
    }

    getTheData(evt) {
      // if (evt.keyCode === 13) {
        $.ajax({
          url: "/api/abv"
        })
        .done((data) => {
          console.log('got data');

          var dataAsObjects = JSON.parse(data);

          this.setState({
            apiResult: dataAsObjects
          });
        });
      // }
    }

    render(){
      return <div><p>test</p>
      </div>
    }
  }
  SW.AbvComponent = AbvComponent;

})();
