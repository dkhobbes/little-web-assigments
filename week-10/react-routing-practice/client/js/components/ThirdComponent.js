if (window.RouterDemo === undefined) { window.RouterDemo = {}; }

(function() {

  class ThirdComponent extends React.Component {

    goBackYo() {
      ReactRouter.browserHistory.goBack();
    }

    render() {
      return <div>
        <h1>Third Component</h1>

        <p>This is the third component. That button below shows you how to go back in browser history.</p>

        <button onClick={() => { this.goBackYo(); }}>Go Back</button>
      </div>;
    }
  }

  RouterDemo.ThirdComponent = ThirdComponent;

})();
