if (window.RouterDemo === undefined) { window.RouterDemo = {}; }

(function() {

  class SecondComponent extends React.Component {

    goBackYo() {
      ReactRouter.browserHistory.goBack();
    }

    render() {
      return <div>
        <h1>Second Component</h1>

        <p>This is the second component. That button below shows you how to go back in browser history.</p>
        <ReactRouter.Link to={'/third'}>Go to the third component</ReactRouter.Link>
        <button onClick={() => { this.goBackYo(); }}>Go Back</button>

      </div>;
    }
  }

  RouterDemo.SecondComponent = SecondComponent;

})();
