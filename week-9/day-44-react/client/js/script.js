window.SW = window.SW || {};

var mountNode = document.querySelector('#react-root');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var router = <Router history={ReactRouter.hashHistory}>
    <Route path="/" component={RouterDemo.PlanetListComponent} />
    <Route path="/starship" component={RouterDemo.StarshipListComponent} />
  </Router>;

ReactDOM.render(router, mountNode);
})();
