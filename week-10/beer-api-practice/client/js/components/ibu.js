if (window.BeerRouter === undefined) {window.BeerRouter = {}; }
(function() {

  class Ibu2and4Component extends React.Component {
    constructor() {
      super();
    }
    componentDidMount() {
      console.log('IbuComponent.ComponentDidMount');
      // this.getTheData();
    }

  }


  class IbuComponent extends React.Component {
    constructor() {
      super();
    }

    componentDidMount() {
      console.log('IbuComponent.ComponentDidMount');
      // this.getTheData();
    }

      getTheData(evt, query) {
        // var param = query;

        $.ajax({
          url: "/api/theibu/" + query
        })
        .done((data) => {

          var dataAsObjects = JSON.parse(data);
          console.log('got data', dataAsObjects);

          this.setState({
            apiResult: dataAsObjects
          })
        });

      }



    render(){

      var theList;

      if (this.state != null) {
        console.log(this.state);
        theList = <ul className="theList">
          {this.state.apiResult.data.map((ibu, index) => {
            return <li key={index}> <img src={ibu.labels.medium} className="abvIbuImg" /><h2 className="beerImgText">Ibu:{ibu.ibu}</h2> </li>
          })}
        </ul>;
      }


      return <div>
        <header>
          <div className="nav-tabs"><ReactRouter.Link to={'/'}>home</ReactRouter.Link></div>
          <div className="nav-tabs"><ReactRouter.Link to={'/locator'}>locator</ReactRouter.Link></div>
          <div className="nav-tabs"><ReactRouter.Link to={'/abv'}>abv</ReactRouter.Link></div>
          <div className="nav-tabs"><ReactRouter.Link to={'/ibu'}>ibu</ReactRouter.Link></div>
          {/*  <div className="nav-tabs"><ReactRouter.Link to={'/history'}>history</ReactRouter.Link></div> */}
        </header>
        <div className="abvIbu-bkgd">
        <div className="hops-img"></div>
        <div className="ibu-content">
          <section>
            <div className="nav-2" onClick={(evt)=>{this.getTheData(evt,"10,19")}}>10-19</div>
            <div className="nav-2" onClick={(evt)=>{this.getTheData(evt,"20,39")}}>20-39</div>
            <div className="nav-2" onClick={(evt)=>{this.getTheData(evt,"40,70")}}>40-70</div>
            <div className="nav-2" onClick={(evt)=>{this.getTheData(evt,"71,100")}}>71-100</div>
            <div className="nav-2" onClick={(evt)=>{this.getTheData(evt,"101,250")}}>101+</div>
          </section>
          {theList}
          </div>
        </div>
      </div>
    }
  }
  BeerRouter.IbuComponent = IbuComponent;
})();
