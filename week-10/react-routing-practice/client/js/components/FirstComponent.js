if (window.RouterDemo === undefined) { window.RouterDemo = {}; }

(function() {

  class FirstComponent extends React.Component {
    render() {
      return <div>
        <h1>The First Component</h1>

        <p>This is the first component. Below is an example of the Link component. You can use that to move people to other routes.</p>

        <ReactRouter.Link to={'/second'}>Go to the second component</ReactRouter.Link>
      </div>;
    }
  }

  RouterDemo.FirstComponent = FirstComponent;

})();
