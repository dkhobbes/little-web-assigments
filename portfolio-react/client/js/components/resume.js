if (window.Portfolio === undefined) {window.Portfolio = {}; }
(function() {

  class ResumeComponent extends React.Component {
    constructor(){
     super();
    }

   render(){
     return <div>
       <header>
         <section id="banner"></section>
         <div className="nav-tab nav-1"><ReactRouter.Link to={'/'}>home</ReactRouter.Link></div>
         <div className="nav-tab"><ReactRouter.Link to={'/resume'}>resume</ReactRouter.Link></div>
       </header>
     </div>
    }
  }

Portfolio.ResumeComponent = ResumeComponent;

})();
