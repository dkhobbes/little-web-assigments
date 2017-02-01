if (window.Portfolio === undefined) {window.Portfolio = {}; }

(function() {
var mountNode = document.querySelector('#react-root');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var router = <Router history={ReactRouter.hashHistory}>
      <Route path="/" component={Portfolio.HomeComponent} />
      <Route path="/resume" component={Portfolio.ResumeComponent} />
    </Router>;

ReactDOM.render(router, mountNode);
})();
