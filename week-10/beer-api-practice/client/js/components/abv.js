if (window.BeerRouter === undefined) {window.BeerRouter = {}; }
(function() {

  class AbvComponent extends React.Component {
    constructor() {
      super();
    }
    componentDidMount() {
      console.log('AbvComponent.ComponentDidMount');
      this.getTheData();
    }

    getTheData(evt, query) {

      var param = query
      // if (evt.keyCode === 13) {
        $.ajax({
          url: "/api/theabv/" + param
        })
        .done((data) => {

          var dataAsObjects = JSON.parse(data);
          console.log('got data', dataAsObjects);

          this.setState({
            apiResult: dataAsObjects
          });
        });
      // }
    }

    render(){

      return <div>
        <header>
          <div className="nav-tabs"><ReactRouter.Link to={'/'}>home</ReactRouter.Link></div>
          <div className="nav-tabs"><ReactRouter.Link to={'/locator'}>locator</ReactRouter.Link></div>
          <div className="nav-tabs"><ReactRouter.Link to={'/abv'}>abv</ReactRouter.Link></div>
          <div className="nav-tabs"><ReactRouter.Link to={'/ibu'}>ibu</ReactRouter.Link></div>
          <div className="nav-tabs"><ReactRouter.Link to={'/history'}>history</ReactRouter.Link></div>
        </header>
        <div className="hops-img"></div>



        <div className="ibu-content">
          <section>
            <div className="nav-tabs" onClick={(evt)=>{this.getTheData(evt,"2,4")}}> 2-4</div>
            <div className="nav-tabs" onClick={(evt)=>{this.getTheData(evt,"5,7")}}>5-7</div>
            <div className="nav-tabs" onClick={(evt)=>{this.getTheData(evt,"8,10")}}>8-10</div>
            <div className="nav-tabs" onClick={(evt)=>{this.getTheData(evt,"11,13")}}>11-13</div>
            <div className="nav-tabs" onClick={(evt)=>{this.getTheData(evt,"14,80")}}>14+</div>
          </section>
        </div>
      </div>
    }
  }
  BeerRouter.AbvComponent = AbvComponent;

})();
