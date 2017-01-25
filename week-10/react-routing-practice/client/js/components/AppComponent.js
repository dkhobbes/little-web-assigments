if (window.RouterDemo === undefined) { window.RouterDemo = {}; }

(function() {

  class AppComponent extends React.Component {
    render() {
      console.log('rendering AppComponent');

      return <div>

        <p>The app component</p>

        {this.props.children}

      </div>;
    }
  }

  RouterDemo.AppComponent = AppComponent;

})();
