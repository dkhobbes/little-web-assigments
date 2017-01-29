window.Portfolio = window.Portfolio || {};
(function(){
  var mountNode = document.querySelector('#react-root');

  class AppComponent extends React.Component {
    render() {
      return <div><Portfolio.HomeComponent /></div>;
    }
  }

  ReactDOM.render(<AppComponent />, mountNode);

})();
