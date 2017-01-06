window.SW = window.SW || {};

(function() {
  var mountNode = document.querySelector('#react-root');

  class AppComponent extends React.Component {

    render() {
      console.log('AppComponent.render');

      return <div><SW.InputComponent /></div>;
    }
  }

  ReactDOM.render(<AppComponent />, mountNode);
})();
