"use strict";

if (window.RouterDemo === undefined) {
  window.RouterDemo = {};
}

(function () {

  var mountNode = document.querySelector('#react-root');

  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  //This is the router. The router itself has no visible manifestation on the page.
  //  Its purpose is to decide what goes on the page.
  //
  //Here is a little rundown of what you see below.
  //  * The <Router>...</Router> component defines the router. Everything in it
  //    is about router configuration. In that `history={ReactRouter.hashHistory}`
  //    configures React to put route changes on the hash rather than change the
  //    actual path. This is better for you at this point. For more info:
  //    https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md
  //  * The routes have path attributes. Those define which hash path maps to which component.
  //  * FirstComponent - You will see this if you go to the root hash path. If you
  //    include that with the path, FirstComponent shows up at http://localhost:5003/#/
  //  * SecondComponent - You will see this if you go to /second. If you include that
  //    with the path, that's http://localhost:5003/#/second

  var router = React.createElement(
    Router,
    { history: ReactRouter.hashHistory },
    React.createElement(Route, { path: "/", component: RouterDemo.FirstComponent }),
    React.createElement(Route, { path: "/second", component: RouterDemo.SecondComponent }),
    React.createElement(Route, { path: "/third", component: RouterDemo.ThirdComponent })
  );

  ReactDOM.render(router, mountNode);
})();
//# sourceMappingURL=router.js.map
